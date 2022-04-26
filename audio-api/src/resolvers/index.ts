import { Directory, QueryResolvers } from "../generated-types";

const Query: QueryResolvers = {
  show(_root, { id, source }, { dataSources }) {
    switch (source) {
      case Directory.Fyyd:
        return dataSources?.fyydAPI.podcast({ id: +id, slug: id });
      default:
        return null;
    }
  },
  shows(_root, { offset, first, source }, { dataSources }) {
    const count = first || 50;
    offset = offset ? +(offset / count) : 0
    switch (source) {
      case Directory.Fyyd:
        return dataSources?.fyydAPI.podcasts(offset, count)
      case Directory.Cba:
        return dataSources?.cbaAPI.podcasts(offset, count)
      default:
        return null;
    }
  },
  item(_root, { guid, source }, { dataSources }) {
    const id: Number = +guid;
    switch (source) {
      case Directory.Fyyd:
        return id
          ? dataSources?.fyydAPI.episode(id)
          : dataSources?.fyydAPI
              .episodes({ guid, count: 1 })
              .then((x: any[]) => x?.[0]);
        case Directory.Internetarchive:
          return dataSources?.internetArchiveAPI.episode(guid);
      default:
        return null;
    }
  },
};

export const resolvers = {
  Query,
};
