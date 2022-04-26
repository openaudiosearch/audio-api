import { Item, ShowType, ShowsConnection, Image } from "../generated-types";
import { RESTDataSource, RequestOptions, Request, Response } from "apollo-datasource-rest";

import { DataSource } from "./interface";
import config from "../config";
import { CbaResponse, Series } from './cba/types';

/*
 * Docs: https://github.com/eazyliving/fyyd-api
 *
 */

type EpisodeSearchArgs = {
  title?: string; // the episode's title. Search might use parts of the string to find the episode.
  guid?: string; // the episode's GUID as stated inside the podcasts feed.
  podcast_id?: Number; // the podcast's id in fyyd's database.
  podcast_title?: string; // the podcast's title. Search might use parts of the string to find the podcast.
  pubdate?: string; // the pubDate as stated inside the podcasts feed.
  duration?: Number; // the duration of the episode in seconds.
  url?: string; // the episode's url as stated inside the podcast's feed.
  term?: string; // a search term to find inside the episodes.
};
/* Please note: title, guid, pubdate, duration, url and term add episodes together. Think of a logical OR.
In contrast to that, podcast_id and podcast_title restrict all episodes to podcasts matching to one of podcast_id or podcast_title. */

export class CbaAPI extends RESTDataSource implements DataSource {
  constructor() {
    super();
    this.baseURL = "https://cba.fro.at/wp-json/wp/v2/";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set(
      "User-Agent",
      `saerdnaer/audio-api (${config.branch || "local"})`
    );
  }

  async episode(_id: string): Promise<Item> {
    throw new Error('unimplemented')
  }
  async episodes(_args: EpisodeSearchArgs | any): Promise<Item[]> {
    throw new Error('unimplemented')
  }

  // async podcast({ id, slug }: any): Promise<ShowType> {
  async podcast(): Promise<ShowType> {
    throw new Error('unimplemented')
  }

  protected async didReceiveResponse<TResult = CbaResponse<any>>(response: Response, request: Request): Promise<TResult> {
    const total = response.headers.get('x-wp-total')
    const content = await super.didReceiveResponse(response, request)
    return {
      total: Number(total),
      content
    } as any
  }

  async podcasts(offset: number, count: number): Promise<ShowsConnection> {
    const page = Math.max(offset / count, 1)
    const res = await this.get<CbaResponse<Series[]>>('/series', { per_page: count, page: page })

    const shows = res.content.map(series => this.formatShow(series))
    return {
      nodes: shows,
      totalCount: res.total,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false
      }
    }
  }

  formatShow(series: Series): ShowType {
    const nodeId = 'cba:' + series.id
    let image: Image | undefined
    if (series._embedded?.featured_image.length) {
      let cbaImage = series._embedded?.featured_image[0]
      image = {
        url: cbaImage.source_url,
        attribution: cbaImage.caption?.rendered,
        // description: cbaImage._links
      }
    }
    return {
      summary: series.content.rendered,
      title: series.title.rendered,
      nodeId,
      externalIds: [series.guid.rendered],
      image
    }
  }

}

export type SeriesArgs = {
  perPage: number
  page: number
}
