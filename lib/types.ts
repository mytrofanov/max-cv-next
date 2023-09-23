import { StaticImageData } from 'next/image';
import React from 'react';

interface Video {
    url: string;
    width: string;
    height: string;
    title: string;
    allow: string;
}

export interface MyProject {
    name: {
        en: string;
        ua: string;
    };
    description: {
        en: string;
        ua: string;
    };
    git?: string;
    url?: string;
    image: StaticImageData | string;
    video: Video | null;
}
export interface AboutMeItem {
    title: string;
    url: string;
    icon: React.ReactNode;
}
