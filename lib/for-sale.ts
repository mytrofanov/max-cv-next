export interface ForSaleProject {
    name: {
        en: string;
        ua: string;
    };
    description: {
        en: string;
        ua: string;
    };
    video: { url: string; width: string; height: string; title: string; allow: string };
}

export const forSale: ForSaleProject[] = [
    {
        name: {
            en: 'Words detector in React - check the text for the presence of any words',
            ua: 'Пошук багатьох слів у React - перевірка тексту на наявність списку слів',
        },
        description: {
            en: "There is a list of 100 words or more. It is a simple tool, built in React, that accepts an input of text (could be several pages long). Then once a user pastes the text into the input and presses a scan button, the tool will check the text for the presence of any of the words in my list and, if they're detected, highlight them.",
            ua: 'Є список зі 100 або більше слів. Це простий інструмент, вбудований в React, який приймає текст (може бути декілька сторінко). Після вставлення тексту та натискання кнопки scan, додаток перевіре наявність слів зі списку в тексті і якщо вони є, то будуть підсвічені кольором.',
        },
        video: {
            url: 'https://www.youtube.com/embed/M71irIrkbU4?si=dxzSozv3lZ73VYGh',
            width: '560',
            height: '315',
            title: 'YouTube video player',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        },
    },
];
