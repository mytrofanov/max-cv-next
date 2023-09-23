import samurai from '../public/images/samurai.jpg';
import landing from '../public/images/landing.jpg';
import niceDevice from '../public/images/niceDevice.jpg';
import currency from '../public/images/currency.jpg';

export const MediaSize = {
    width: 560,
    height: 315,
};

export const MyWorks = [
    {
        image: '',
        name: { en: 'About me', ua: 'Про мене' },
        description: {
            en: 'This web app was made using Next, React, TypeScript, tailwindcss, next-intl, testing-library - jest, CI-CD, prettier, etc.',
            ua: 'Цей веб додаток був зроблений за допомогою наступних технологій Next, React, TypeScript, tailwindcss, next-intl, testing-library - jest, CI-CD, prettier, etc.',
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
        name: {
            en: 'Currency Exchange with history and rate compare',
            ua: 'Обмін валют з історією та порівнянням курсів',
        },
        description: {
            en: 'This web app was made using React, TypeScript, Redux, Material UI, Git, axios, react-hooks, etc.',
            ua: 'Цей веб додаток був зроблений за допомогою наступних технологій React, TypeScript, Redux, Material UI, Git, axios, react-hooks, etc.',
        },
        url: 'https://mytrofanov.github.io/currency/',
        video: {
            url: 'https://www.youtube.com/embed/Ue3kocR_aP4?si=NM_HsGf3EwHSczEF',
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
        video: null,
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
export const MyProjects = [
    {
        title: 'full-stack project from scratch (MERN stack)',
    },
    {
        title: 'app for Android and IOS on  Expo',
    },
    {
        title: 'app for Android on React Native (Calculator for Truck-Drivers)',
    },
    {
        title: 'app for Iphone on React Native using XCode for sharing data',
    },
    {
        title: 'chrome extention for sharing data and files',
    },
    {
        title: 'plugin for Zotero Connector',
    },
    {
        title: 'crush game 2D - Aviator (on React)',
    },
];
