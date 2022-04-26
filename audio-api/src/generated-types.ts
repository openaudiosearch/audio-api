import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
  /** ISO 8601 DateTime format, this is capable of adding a time offset, see https://en.wikipedia.org/wiki/ISO_8601 */
  Datetime: any;
  /** ISO 8601 Duration format ([hh]:[mm]:[ss].[sss]), capable of adding milliseconds, see https://en.wikipedia.org/wiki/ISO_8601 */
  Duration: any;
  HTML: any;
  JSON: any;
  URL: any;
};

export enum AspectRatio {
  Aspect_16x9 = 'ASPECT_16x9',
  Square = 'SQUARE'
}

export type Asset = {
  /** media asset mimeType e.g. `audio/mp4` */
  mimeType: Scalars['String'];
  /** file size in  byte */
  size: Scalars['Int'];
  /** title to be displayed in download tab e.g. `MPEG-4 AAC Audio (m4a)` */
  title?: Maybe<Scalars['String']>;
  /** absolute path to media asset */
  url: Scalars['URL'];
};

export type AssetType = Asset & {
  __typename?: 'AssetType';
  /** media asset mimeType e.g. `audio/mp4` */
  mimeType: Scalars['String'];
  /** file size in byte */
  size: Scalars['Int'];
  /** title to be displayed in download tab e.g. `MPEG-4 AAC Audio (m4a)` */
  title?: Maybe<Scalars['String']>;
  /** absolute path to media asset */
  url: Scalars['URL'];
};

/** The root query type interface which gives access points into the data universe. */
export type AudioQuery = {
  contributor?: Maybe<Contributor>;
  item?: Maybe<Item>;
  /** Reads and enables pagination through a set of `Item`. */
  items?: Maybe<ItemsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  show?: Maybe<ShowType>;
  /** Reads and enables pagination through a set of `Collection`. */
  shows?: Maybe<CollectionConnection>;
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryContributorArgs = {
  uri: Scalars['URL'];
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryItemArgs = {
  guid: Scalars['ID'];
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryShowArgs = {
  id: Scalars['ID'];
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryShowsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type BooleanFilter = {
  equalTo?: InputMaybe<Scalars['Boolean']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
};

export type Chapter = {
  /** Link related to the chapter */
  href?: Maybe<Scalars['URL']>;
  /** image that will be presented in the header section if the chapter is available */
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  /** start time following [hh]:[mm]:[ss].[sss] format */
  start: Scalars['Duration'];
  title: Scalars['String'];
};

/** The primary collection an Item is related to, e.g. a Podcast, Show or Conference */
export type Collection = {
  description?: Maybe<Scalars['HTML']>;
  externalIds?: Maybe<Array<Scalars['String']>>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  link?: Maybe<Scalars['URL']>;
  /** subtitle is an extension to the title. The subtitle is meant to clarify what the podcast is about. While a title can be anything, a subtitle should be more descriptive in what the content actually wants to convey and what the most important information is, you want everybody want to know about the offering. */
  subtitle?: Maybe<Scalars['String']>;
  /** A summary is a much more precise and elaborate description of the podcast's content. While title and subtitle are rather concise, a summary is meant to consist of one or more sentences that form a paragraph or more. */
  summary?: Maybe<Scalars['String']>;
  /** title of the podcast that is the primary field to be used to represent the podcast in directories, lists and other uses. */
  title: Scalars['String'];
};


/** The primary collection an Item is related to, e.g. a Podcast, Show or Conference */
export type CollectionExternalIdsArgs = {
  system?: InputMaybe<Directory>;
};


/** The primary collection an Item is related to, e.g. a Podcast, Show or Conference */
export type CollectionImageArgs = {
  aspect?: InputMaybe<AspectRatio>;
};

export type CollectionConnection = {
  /** A list of `Item` objects. */
  nodes: Array<Collection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Collection` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Contributor = {
  /** avatar e.g. profile photo of the contributor */
  avatar?: Maybe<Image>;
  /** @deprecated try to use avatar.url if possible */
  avatarUrl?: Maybe<Scalars['URL']>;
  /** used as a reference e.g. in transcripts */
  id: Scalars['ID'];
  /** name of the contributor e.g. Hans Meier */
  name: Scalars['String'];
  /** URI identifying the person e.g. his personal domain or this main social media profile e.g. Twitter/Mastodon */
  uri?: Maybe<Scalars['URL']>;
  /** contributors group e.g. { id: "1", slug: "onair", title: "On Air" } */
  wikidataId?: Maybe<Scalars['String']>;
};

export type ContributorType = Contributor & {
  __typename?: 'ContributorType';
  /** avatar e.g. profile photo of the contributor */
  avatar?: Maybe<Image>;
  /** @deprecated try to use avatar.url if possible */
  avatarUrl?: Maybe<Scalars['URL']>;
  /** used as a reference e.g. in transcripts */
  id: Scalars['ID'];
  /** name of the contributor e.g. `Hans Meier` */
  name: Scalars['String'];
  uri: Scalars['URL'];
  wikidataId?: Maybe<Scalars['String']>;
};

export enum Directory {
  Ardaudiothek = 'ARDAUDIOTHEK',
  Cba = 'CBA',
  Fyyd = 'FYYD',
  Internetarchive = 'INTERNETARCHIVE',
  Itunes = 'ITUNES',
  Listennotes = 'LISTENNOTES',
  Panoptikum = 'PANOPTIKUM',
  Podcastindexorg = 'PODCASTINDEXORG',
  Podchaser = 'PODCHASER',
  Spotify = 'SPOTIFY'
}

export type Image = {
  attribution?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url: Scalars['URL'];
};

export type ImageType = Image & {
  __typename?: 'ImageType';
  attribution?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  url: Scalars['URL'];
};

export type IntFilter = {
  distinctFrom?: InputMaybe<Scalars['Int']>;
  equalTo?: InputMaybe<Scalars['Int']>;
  greaterThan?: InputMaybe<Scalars['Int']>;
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
  lessThan?: InputMaybe<Scalars['Int']>;
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  notDistinctFrom?: InputMaybe<Scalars['Int']>;
  notEqualTo?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** A single item of a Podcast Feed e.g. a single Episode, Teaser, Talk or Lecture */
export type Item = {
  /**
   * Audio Assets
   * - media Assets played by an audio player
   * - format support depends on the used browser (https://en.wikipedia.org/wiki/HTML5_audio#Supported_audio_coding_formats)
   * - also allows HLS streams
   */
  audios: Array<Asset>;
  /** Chapters are sections of an episode */
  chapters?: Maybe<Array<Chapter>>;
  /** Contributors are natural persons providing content to that item */
  contributors?: Maybe<Array<Contributor>>;
  depublicationDate?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['HTML']>;
  duration: Scalars['Duration'];
  durationSeconds: Scalars['Int'];
  /** Ordinal of the episode, either globally e.g. `72` or per season */
  episodeNumber?: Maybe<Scalars['Int']>;
  externalIds?: Maybe<Array<Scalars['String']>>;
  /**
   * Files
   * - list of files available for download
   * - if no files are present, a player will use audio assets as downloads
   */
  files?: Maybe<Array<Asset>>;
  /** an guid grouping this Item to a season, series or multi part publication */
  groupingId?: Maybe<Scalars['ID']>;
  guid: Scalars['ID'];
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  link?: Maybe<Scalars['URL']>;
  nextEpisode?: Maybe<Item>;
  publicationDate: Scalars['Datetime'];
  show?: Maybe<Collection>;
  subtitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** e.g. `FG072 Verantwortung in der Informatik` */
  title: Scalars['String'];
};


/** A single item of a Podcast Feed e.g. a single Episode, Teaser, Talk or Lecture */
export type ItemExternalIdsArgs = {
  system?: InputMaybe<Directory>;
};


/** A single item of a Podcast Feed e.g. a single Episode, Teaser, Talk or Lecture */
export type ItemImageArgs = {
  aspect?: InputMaybe<AspectRatio>;
};


/** A single item of a Podcast Feed e.g. a single Episode, Teaser, Talk or Lecture */
export type ItemTitleArgs = {
  variant?: InputMaybe<TitleVariant>;
};

/** A filter to be used against `Item` object types. All fields are combined with a logical ‘and.’ */
export type ItemFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ItemFilter>>;
  /** Filter by the object’s `episodeNumber` field. */
  episodeNumber?: InputMaybe<IntFilter>;
  /** Filter by the object’s `groupId` field. */
  groupingId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ItemFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ItemFilter>>;
  /** Filter by the object’s `title` field. */
  title?: InputMaybe<StringFilter>;
};

export type ItemType = Item & Node & {
  __typename?: 'ItemType';
  /** @deprecated only for debugging */
  _raw?: Maybe<Scalars['JSON']>;
  audios: Array<Asset>;
  chapters?: Maybe<Array<Chapter>>;
  contributors?: Maybe<Array<Contributor>>;
  depublicationDate?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['HTML']>;
  duration: Scalars['Duration'];
  durationSeconds: Scalars['Int'];
  episodeNumber?: Maybe<Scalars['Int']>;
  externalIds?: Maybe<Array<Scalars['String']>>;
  files?: Maybe<Array<Asset>>;
  groupingId?: Maybe<Scalars['ID']>;
  guid: Scalars['ID'];
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  isPublished: Scalars['Boolean'];
  link?: Maybe<Scalars['URL']>;
  nextEpisode?: Maybe<Item>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  publicationDate: Scalars['Datetime'];
  show?: Maybe<Collection>;
  subjects?: Maybe<Scalars['JSON']>;
  subtitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
  title: Scalars['String'];
};


export type ItemTypeExternalIdsArgs = {
  system?: InputMaybe<Directory>;
};


export type ItemTypeImageArgs = {
  aspect?: InputMaybe<AspectRatio>;
};


export type ItemTypeTitleArgs = {
  variant?: InputMaybe<TitleVariant>;
};

export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  /** A list of `Item` objects. */
  nodes: Array<Item>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Item` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export enum ItemsOrderBy {
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  GroupNumberAsc = 'GROUP_NUMBER_ASC',
  GroupNumberDesc = 'GROUP_NUMBER_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PublicationDateAsc = 'PUBLICATION_DATE_ASC',
  PublicationDateDesc = 'PUBLICATION_DATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Organization = {
  image?: Maybe<Image>;
  name: Scalars['String'];
  uri?: Maybe<Scalars['URL']>;
  wikidataId?: Maybe<Scalars['String']>;
};

export type OrganizationType = Node & Organization & {
  __typename?: 'OrganizationType';
  image?: Maybe<Image>;
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  uri?: Maybe<Scalars['URL']>;
  wikidataId?: Maybe<Scalars['String']>;
};


export type OrganizationTypeImageArgs = {
  aspect?: InputMaybe<AspectRatio>;
};

/** A connection to a list of `Organization` values. */
export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  /** A list of `Organization` objects. */
  nodes: Array<Organization>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organization` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export enum OrganizationsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

export type Podcast = {
  episodes?: Maybe<ItemsConnection>;
  feedUrls?: Maybe<Array<Scalars['URL']>>;
  language?: Maybe<Scalars['String']>;
  type?: Maybe<PodcastVariant>;
};

export enum PodcastVariant {
  /** episodic: Stand-alone episodes that should be presented last-to-first. */
  Episodic = 'EPISODIC',
  /** Serial: Episodes that should be presented first-to-last. Great for narratives, storytelling, thematic, and multiple seasons. */
  Serial = 'SERIAL'
}

export type Query = AudioQuery & Node & {
  __typename?: 'Query';
  contributor?: Maybe<Contributor>;
  contributorById?: Maybe<Contributor>;
  item?: Maybe<Item>;
  /** Reads and enables pagination through a set of `Item`. */
  items?: Maybe<ItemsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  organization?: Maybe<Organization>;
  /** Reads and enables pagination through a set of `Organization`. */
  organizations?: Maybe<OrganizationsConnection>;
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. */
  query: Query;
  show?: Maybe<ShowType>;
  /** Reads and enables pagination through a set of `Show`. */
  shows?: Maybe<ShowsConnection>;
  /** version, for backwards compability with other JSON formats */
  version?: Maybe<Scalars['Int']>;
};


export type QueryContributorArgs = {
  source?: InputMaybe<Directory>;
  uri: Scalars['URL'];
};


export type QueryContributorByIdArgs = {
  id: Scalars['ID'];
  source?: InputMaybe<Directory>;
};


export type QueryItemArgs = {
  guid: Scalars['ID'];
  source?: InputMaybe<Directory>;
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ItemsOrderBy>>;
  source?: InputMaybe<Directory>;
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


export type QueryOrganizationArgs = {
  name: Scalars['String'];
  source?: InputMaybe<Directory>;
};


export type QueryOrganizationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
  source?: InputMaybe<Directory>;
};


export type QueryShowArgs = {
  id: Scalars['ID'];
  source?: InputMaybe<Directory>;
};


export type QueryShowsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Directory>;
};

export type ShowType = Collection & Node & Podcast & {
  __typename?: 'ShowType';
  /** @deprecated only for debugging */
  _raw?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['HTML']>;
  episodes?: Maybe<ItemsConnection>;
  externalIds?: Maybe<Array<Scalars['String']>>;
  feedUrls?: Maybe<Array<Scalars['URL']>>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  language?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['URL']>;
  meta?: Maybe<Scalars['JSON']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
  title: Scalars['String'];
  type?: Maybe<PodcastVariant>;
};


export type ShowTypeExternalIdsArgs = {
  system?: InputMaybe<Directory>;
};


export type ShowTypeImageArgs = {
  aspect?: InputMaybe<AspectRatio>;
};

export type ShowsConnection = CollectionConnection & {
  __typename?: 'ShowsConnection';
  nodes: Array<ShowType>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

export enum TitleVariant {
  Clean = 'CLEAN',
  WithoutNumber = 'WITHOUT_NUMBER'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AspectRatio: AspectRatio;
  Asset: ResolversTypes['AssetType'];
  AssetType: ResolverTypeWrapper<AssetType>;
  AudioQuery: ResolversTypes['Query'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BooleanFilter: BooleanFilter;
  Chapter: never;
  Collection: ResolversTypes['ShowType'];
  CollectionConnection: ResolversTypes['ShowsConnection'];
  Contributor: ResolversTypes['ContributorType'];
  ContributorType: ResolverTypeWrapper<ContributorType>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  Directory: Directory;
  Duration: ResolverTypeWrapper<Scalars['Duration']>;
  HTML: ResolverTypeWrapper<Scalars['HTML']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Image: ResolversTypes['ImageType'];
  ImageType: ResolverTypeWrapper<ImageType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IntFilter: IntFilter;
  Item: ResolversTypes['ItemType'];
  ItemFilter: ItemFilter;
  ItemType: ResolverTypeWrapper<ItemType>;
  ItemsConnection: ResolverTypeWrapper<ItemsConnection>;
  ItemsOrderBy: ItemsOrderBy;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Node: ResolversTypes['ItemType'] | ResolversTypes['OrganizationType'] | ResolversTypes['Query'] | ResolversTypes['ShowType'];
  Organization: ResolversTypes['OrganizationType'];
  OrganizationType: ResolverTypeWrapper<OrganizationType>;
  OrganizationsConnection: ResolverTypeWrapper<OrganizationsConnection>;
  OrganizationsOrderBy: OrganizationsOrderBy;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Podcast: ResolversTypes['ShowType'];
  PodcastVariant: PodcastVariant;
  Query: ResolverTypeWrapper<{}>;
  ShowType: ResolverTypeWrapper<ShowType>;
  ShowsConnection: ResolverTypeWrapper<ShowsConnection>;
  String: ResolverTypeWrapper<Scalars['String']>;
  StringFilter: StringFilter;
  TitleVariant: TitleVariant;
  URL: ResolverTypeWrapper<Scalars['URL']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: ResolversParentTypes['AssetType'];
  AssetType: AssetType;
  AudioQuery: ResolversParentTypes['Query'];
  Boolean: Scalars['Boolean'];
  BooleanFilter: BooleanFilter;
  Chapter: never;
  Collection: ResolversParentTypes['ShowType'];
  CollectionConnection: ResolversParentTypes['ShowsConnection'];
  Contributor: ResolversParentTypes['ContributorType'];
  ContributorType: ContributorType;
  Cursor: Scalars['Cursor'];
  Datetime: Scalars['Datetime'];
  Duration: Scalars['Duration'];
  HTML: Scalars['HTML'];
  ID: Scalars['ID'];
  Image: ResolversParentTypes['ImageType'];
  ImageType: ImageType;
  Int: Scalars['Int'];
  IntFilter: IntFilter;
  Item: ResolversParentTypes['ItemType'];
  ItemFilter: ItemFilter;
  ItemType: ItemType;
  ItemsConnection: ItemsConnection;
  JSON: Scalars['JSON'];
  Node: ResolversParentTypes['ItemType'] | ResolversParentTypes['OrganizationType'] | ResolversParentTypes['Query'] | ResolversParentTypes['ShowType'];
  Organization: ResolversParentTypes['OrganizationType'];
  OrganizationType: OrganizationType;
  OrganizationsConnection: OrganizationsConnection;
  PageInfo: PageInfo;
  Podcast: ResolversParentTypes['ShowType'];
  Query: {};
  ShowType: ShowType;
  ShowsConnection: ShowsConnection;
  String: Scalars['String'];
  StringFilter: StringFilter;
  URL: Scalars['URL'];
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  __resolveType: TypeResolveFn<'AssetType', ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
};

export type AssetTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetType'] = ResolversParentTypes['AssetType']> = {
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AudioQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AudioQuery'] = ResolversParentTypes['AudioQuery']> = {
  __resolveType: TypeResolveFn<'Query', ParentType, ContextType>;
  contributor?: Resolver<Maybe<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<AudioQueryContributorArgs, 'uri'>>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<AudioQueryItemArgs, 'guid'>>;
  items?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType, Partial<AudioQueryItemsArgs>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<AudioQueryNodeArgs, 'nodeId'>>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['ShowType']>, ParentType, ContextType, RequireFields<AudioQueryShowArgs, 'id'>>;
  shows?: Resolver<Maybe<ResolversTypes['CollectionConnection']>, ParentType, ContextType, Partial<AudioQueryShowsArgs>>;
};

export type ChapterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chapter'] = ResolversParentTypes['Chapter']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Duration'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  __resolveType: TypeResolveFn<'ShowType', ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, Partial<CollectionExternalIdsArgs>>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, Partial<CollectionImageArgs>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type CollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionConnection'] = ResolversParentTypes['CollectionConnection']> = {
  __resolveType: TypeResolveFn<'ShowsConnection', ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = {
  __resolveType: TypeResolveFn<'ContributorType', ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  wikidataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ContributorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorType'] = ResolversParentTypes['ContributorType']> = {
  avatar?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  wikidataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export interface HtmlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HTML'], any> {
  name: 'HTML';
}

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  __resolveType: TypeResolveFn<'ImageType', ParentType, ContextType>;
  attribution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
};

export type ImageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageType'] = ResolversParentTypes['ImageType']> = {
  attribution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'ItemType', ParentType, ContextType>;
  audios?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<Array<ResolversTypes['Chapter']>>, ParentType, ContextType>;
  contributors?: Resolver<Maybe<Array<ResolversTypes['Contributor']>>, ParentType, ContextType>;
  depublicationDate?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Duration'], ParentType, ContextType>;
  durationSeconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episodeNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, Partial<ItemExternalIdsArgs>>;
  files?: Resolver<Maybe<Array<ResolversTypes['Asset']>>, ParentType, ContextType>;
  groupingId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, Partial<ItemImageArgs>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  nextEpisode?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  publicationDate?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<ItemTitleArgs>>;
};

export type ItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemType'] = ResolversParentTypes['ItemType']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  audios?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<Array<ResolversTypes['Chapter']>>, ParentType, ContextType>;
  contributors?: Resolver<Maybe<Array<ResolversTypes['Contributor']>>, ParentType, ContextType>;
  depublicationDate?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Duration'], ParentType, ContextType>;
  durationSeconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  episodeNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, Partial<ItemTypeExternalIdsArgs>>;
  files?: Resolver<Maybe<Array<ResolversTypes['Asset']>>, ParentType, ContextType>;
  groupingId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, Partial<ItemTypeImageArgs>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  nextEpisode?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publicationDate?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<ItemTypeTitleArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemsConnection'] = ResolversParentTypes['ItemsConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'ItemType' | 'OrganizationType' | 'Query' | 'ShowType', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  __resolveType: TypeResolveFn<'OrganizationType', ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  wikidataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type OrganizationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationType'] = ResolversParentTypes['OrganizationType']> = {
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, Partial<OrganizationTypeImageArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  wikidataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationsConnection'] = ResolversParentTypes['OrganizationsConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PodcastResolvers<ContextType = any, ParentType extends ResolversParentTypes['Podcast'] = ResolversParentTypes['Podcast']> = {
  __resolveType: TypeResolveFn<'ShowType', ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType>;
  feedUrls?: Resolver<Maybe<Array<ResolversTypes['URL']>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PodcastVariant']>, ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  contributor?: Resolver<Maybe<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<QueryContributorArgs, 'uri'>>;
  contributorById?: Resolver<Maybe<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<QueryContributorByIdArgs, 'id'>>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'guid'>>;
  items?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType, Partial<QueryItemsArgs>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'name'>>;
  organizations?: Resolver<Maybe<ResolversTypes['OrganizationsConnection']>, ParentType, ContextType, Partial<QueryOrganizationsArgs>>;
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['ShowType']>, ParentType, ContextType, RequireFields<QueryShowArgs, 'id'>>;
  shows?: Resolver<Maybe<ResolversTypes['ShowsConnection']>, ParentType, ContextType, Partial<QueryShowsArgs>>;
  version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type ShowTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowType'] = ResolversParentTypes['ShowType']> = {
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, Partial<ShowTypeExternalIdsArgs>>;
  feedUrls?: Resolver<Maybe<Array<ResolversTypes['URL']>>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, Partial<ShowTypeImageArgs>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PodcastVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowsConnection'] = ResolversParentTypes['ShowsConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['ShowType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  AssetType?: AssetTypeResolvers<ContextType>;
  AudioQuery?: AudioQueryResolvers<ContextType>;
  Chapter?: ChapterResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  Contributor?: ContributorResolvers<ContextType>;
  ContributorType?: ContributorTypeResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  Duration?: GraphQLScalarType;
  HTML?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  ImageType?: ImageTypeResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemType?: ItemTypeResolvers<ContextType>;
  ItemsConnection?: ItemsConnectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Node?: NodeResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationType?: OrganizationTypeResolvers<ContextType>;
  OrganizationsConnection?: OrganizationsConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Podcast?: PodcastResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ShowType?: ShowTypeResolvers<ContextType>;
  ShowsConnection?: ShowsConnectionResolvers<ContextType>;
  URL?: GraphQLScalarType;
};

