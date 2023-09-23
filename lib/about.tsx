import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { AboutMeItem } from '@/lib/types';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

export const AboutMe: AboutMeItem[] = [
    { title: 'Telegram', url: 'https://t.me/MaxMytrofanov', icon: <FaTelegramPlane /> },
    { title: 'Linkedin', url: 'https://www.linkedin.com/in/maksym-mytrofanov-967365215/', icon: <AiOutlineLinkedin /> },
    { title: 'Github', url: 'https://github.com/mytrofanov', icon: <FiGithub /> },
];
