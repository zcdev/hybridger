import { Document } from '@contentful/rich-text-types';

export interface Asset {
    sys: {
        id: string;
    };
    url: string;
    description: string;
}

export interface AssetLink {
    block: Asset[];
}

export interface Content {
    json: Document;
    links: {
        assets: AssetLink;
    };
}

export interface Hero {
    coverImage: {
        url: string;
    },
    title: string;
    content: Content;
}

export interface FeatureItem {
    coverImage: {
        url: string;
    },
    title: string;
    subheader: string;
    content: Content;
}

export interface PricingCard {
    iconLight: {
        url: string;
    },
    iconDark: {
        url: string;
    },
    title: string;
    subheader: string;
    content: Content;
}

export interface Testimonial {
    avatar: {
        url: string;
    },
    title: string;
    author: string;
}