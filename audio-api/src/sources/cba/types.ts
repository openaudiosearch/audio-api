export interface CbaResponse<T> {
    total: number
    content: T
}

export interface Series {
    id:             number;
    date:           Date;
    date_gmt:       Date;
    guid:           GUID;
    modified:       Date;
    modified_gmt:   Date;
    slug:           string;
    status:         string;
    type:           string;
    link:           string;
    title:          GUID;
    content:        Content;
    featured_media: number;
    comment_status: string;
    ping_status:    string;
    template:       string;
    acf:            any[];
    post_parent:    number;
    url:            string;
    _links:         StationLinks;
    _embedded:      Embedded;
}

export interface Embedded {
    featured_image:     EmbeddedFeaturedImage[];
    station:            Station[];
    "wp:featuredmedia": EmbeddedFeaturedImage[];
}

export interface EmbeddedFeaturedImage {
    id:            number;
    date:          Date;
    slug:          string;
    type:          string;
    link:          string;
    title:         GUID;
    author:        number;
    originators:   Array<any[]>;
    license:       License;
    caption:       GUID;
    alt_text:      string;
    media_type:    string;
    mime_type:     MIMEType;
    media_details: MediaDetails;
    source_url:    string;
    _links:        FeaturedImageLinks;
}

export interface FeaturedImageLinks {
    self:       About[];
    collection: About[];
    about:      About[];
    author:     ReplyElement[];
    replies:    ReplyElement[];
    "wp:term":  WpTerm[];
    curies:     Cury[];
}

export interface About {
    href: string;
}

export interface ReplyElement {
    embeddable: boolean;
    href:       string;
}

export interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
}

export interface WpTerm {
    taxonomy:   string;
    embeddable: boolean;
    href:       string;
}

export interface GUID {
    rendered: string;
}

export interface License {
    license_image: string;
    license:       string;
    version:       string;
    conditions:    string;
    license_link:  string;
}

export interface MediaDetails {
    width:      number;
    height:     number;
    file:       string;
    sizes:      { [key: string]: Size };
    image_meta: ImageMeta;
}

export interface ImageMeta {
    aperture:          string;
    credit:            string;
    camera:            string;
    caption:           string;
    created_timestamp: string;
    copyright:         string;
    focal_length:      string;
    iso:               string;
    shutter_speed:     string;
    title:             string;
    orientation:       string;
    keywords:          any[];
}

export interface Size {
    file:       string;
    width:      number;
    height:     number;
    mime_type:  MIMEType;
    source_url: string;
}

export enum MIMEType {
    ImageJPEG = "image/jpeg",
}

export interface Station {
    id:              number;
    date:            Date;
    slug:            string;
    type:            string;
    link:            string;
    title:           GUID;
    featured_media:  number;
    livestream_urls: string[];
    _links:          StationLinks;
}

export interface StationLinks {
    self:               About[];
    collection:         About[];
    about:              About[];
    replies:            ReplyElement[];
    "wp:featuredmedia": ReplyElement[];
    "wp:attachment":    About[];
    curies:             Cury[];
    featured_image?:    ReplyElement[];
    station?:           ReplyElement[];
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

