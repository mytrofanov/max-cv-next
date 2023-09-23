import React from 'react';
import ProgressiveImage from '@/components/progressive-image';
import MaxPhoto_small from '../../public/images/max_photo_small.png';
import MaxPhoto from '../../public/images/max_photo.png';
import { Cube } from '@/components/cube/cube';
import { Dictionary, LocaleType } from '@/localization';
import { getDictionary } from '@/get-dictionary';

interface HomeProps {
    params: { lang: LocaleType };
}

export default async function Home(props: HomeProps) {
    const { params } = props;
    const dictionary: Dictionary = await getDictionary(params.lang);
    return (
        <div className="h-1/2 flex mx-auto max-w-screen-md">
            <div className="w-1/2 flex items-center justify-center">
                <ProgressiveImage preview={MaxPhoto_small.src} image={MaxPhoto.src} alt="Max Mytrofanov" />
            </div>
            <div className="w-1/2 flex flex-col justify-top items-center">
                <h1 className="text-2xl font-bold text-center mt-4">{dictionary?.home.title}</h1>
                <h5 className="text-sm font-bold text-center mt-4">{dictionary?.home.aboutMe.text}</h5>
                <Cube />
            </div>
        </div>
    );
}
