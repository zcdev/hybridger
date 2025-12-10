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
    imageAsset: {
        url: string;
    },
    title: string;
    content: Content;
}

export interface FeatureItem {
    imageAsset: {
        url: string;
    },
    title: string;
    subheader: string;
    content: Content;
    id?: number;
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
    id?: number;
}

export interface Testimonial {
    avatar: {
        url: string;
    },
    title: string;
    author: string;
    id?: number;
}

export type ImageWrapperProps = {
    src: string;
    srcDark?: string;
    alt?: string;
    width?: number;
    height?: number;
    className?: string;
    wrapperClassName?: string;
};