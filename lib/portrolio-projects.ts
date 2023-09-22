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
        reference: '',
    },
    {
        image: currency,
        name: 'Currency Exchange',
        description: 'This site was made using React, TypeScript, Redux, Material UI, Git, axios, react-hooks, etc.',
        reference: 'https://mytrofanov.github.io/currency/',
    },
    {
        image: niceDevice,
        name: 'Online Shop',
        description:
            'Pet-project (Backend & FrontEnd) was made using:  React, NodeJs, MobX, React Bootstrap, ' +
            'PostgreSQL,Sequelize, axios, react-hooks, etc.',
        reference: 'http://nicedevice.top/',
        git: 'https://github.com/mytrofanov/online-store',
    },
    {
        image: samurai,
        name: 'The social-network website',
        description:
            'This Social Network was build using React, Redux, JavaScript, TypeScript, CSS, Ajax, API, ' +
            'cookie, react-hook-form, Git',
        reference: 'https://mytrofanov.github.io/second/#/profile',
    },
    {
        image: landing,
        name: 'Landing Page',
        description: 'This Landing Page was made using HTML5, CSS3, JavaScript, Git',
        reference: 'https://mytrofanov.github.io/wpd/index.html#',
    },
];
