import samurai from '../public/images/samurai.jpg';
import landing from '../public/images/landing.jpg';
import niceDevice from '../public/images/niceDevice.jpg';
import currency from '../public/images/currency.jpg';

export const MyWorks = [
    {
        image: '',
        name: { en: 'About me', ua: 'Про мене' },
        description: {
            en: 'This web app was made using Next, React, TypeScript, tailwindcss, next-intl, testing-library - jest, prettier, etc.',
            ua: 'Цей веб додаток був зроблений за допомогою наступних технологій Next, React, TypeScript, tailwindcss, next-intl, testing-library - jest, prettier, etc.',
        },
        url: '',
        video: {
            url: 'https://www.youtube.com/embed/M71irIrkbU4?si=dxzSozv3lZ73VYGh',
            width: '560',
            height: '315',
            title: 'YouTube video player',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        },
    },
    {
        image: currency,
        name: { en: 'Currency Exchange', ua: 'Обмін валют' },
        description: {
            en: 'This web app was made using React, TypeScript, Redux, Material UI, Git, axios, react-hooks, etc.',
            ua: 'Цей веб додаток був зроблений за допомогою наступних технологій React, TypeScript, Redux, Material UI, Git, axios, react-hooks, etc.',
        },
        url: 'https://mytrofanov.github.io/currency/',
        video: {
            url: 'https://www.youtube.com/embed/M71irIrkbU4?si=dxzSozv3lZ73VYGh',
            width: '560',
            height: '315',
            title: 'YouTube video player',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        },
    },
    {
        image: niceDevice,
        name: { en: 'Online Shop', ua: 'Онлайн магазин' },
        description: {
            en:
                'Pet-project (Backend & FrontEnd) was made using:  React, NodeJs, MobX, React Bootstrap, ' +
                'PostgreSQL,Sequelize, axios, react-hooks, etc.',
            ua: 'Пет-проект (Серверна частина та Фронт) був зроблений з використанням:  React, NodeJs, MobX, React Bootstrap, PostgreSQL,Sequelize, axios, react-hooks, etc.',
        },
        url: '',
        git: 'https://github.com/mytrofanov/online-store',
        video: {
            url: 'https://www.youtube.com/embed/M71irIrkbU4?si=dxzSozv3lZ73VYGh',
            width: '560',
            height: '315',
            title: 'YouTube video player',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        },
    },
    {
        image: samurai,
        name: { en: 'Pet project: The social-network website', ua: 'Пет-проект: Соціальна мережа' },
        description: {
            en: 'This Social Network was build using: React, Redux, JavaScript, TypeScript, CSS, Ajax, API, cookie, react-hook-form, Git',
            ua:
                'Ця соціальна мережа була побудована з використанням: React, Redux, JavaScript, TypeScript, CSS, Ajax, API, ' +
                'cookie, react-hook-form, Git',
        },
        url: 'https://mytrofanov.github.io/second/#/profile',
        video: {
            url: 'https://www.youtube.com/embed/a8-rB8sUkss?si=kY6sobAPrA8jorhN',
            width: '560',
            height: '315',
            title: 'YouTube video player',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        },
    },
    {
        image: landing,
        name: { en: 'Landing Page', ua: 'Лендінгова сторінка' },
        description: {
            en: 'This Landing Page with responsive design was made using HTML5, CSS3, JavaScript, Git',
            ua: 'Ця лендінгова сторінка з адаптивним дизайном була побудована з використанням: HTML5, CSS3, JavaScript, Git',
        },
        url: 'https://mytrofanov.github.io/wpd/index.html#',
        video: {
            url: 'https://www.youtube.com/embed/EMjg7x94PqQ?si=RbKWc_Ao95HgtO0V',
            width: '560',
            height: '315',
            title: 'YouTube video player',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        },
    },
];
