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
    video: { url: string; width: string; height: string; title: string; allow: string };
}
