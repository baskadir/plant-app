interface Image {
    id: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: null | string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null | string;
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    rank: number;
    image: Image | null;
}

export interface CategoriesResponse {
    data: Category[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            total: number;
        };
    };
}

export interface Question {
    id: number;
    title: string;
    subtitle: string;
    image_uri: string;
    uri: string;
    order: number;
}