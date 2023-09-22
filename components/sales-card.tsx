import React from 'react';
import { ForSaleProject } from '@/lib';
import { LocaleType } from '@/localization';

interface SalesCardProps {
    project: ForSaleProject;
    lang: LocaleType;
}

const SalesCard = (props: SalesCardProps) => {
    const { project, lang } = props;

    return (
        <div className="bg-neutral-100 shadow-lg rounded-lg overflow-hidden m-4 p-2">
            <div className="px-6 py-4">
                <h3 className="text-blue-900 text-xl font-semibold mb-2">{project.name[lang]}</h3>
                <p className="text-gray-700 text-base">{project.description[lang]}</p>
            </div>
            <div className="flex items-center justify-center h-60hv">
                <iframe
                    width={project.video.width}
                    height={project.video.height}
                    src={project.video.url}
                    title={project.video.title}
                    frameBorder="0"
                    allow={project.video.allow}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default SalesCard;
