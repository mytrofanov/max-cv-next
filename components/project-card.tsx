import React from 'react';
import { MediaSize, MyProject } from '@/lib';
import { LocaleType } from '@/localization';
import Image from 'next/image';

interface SalesCardProps {
    project: MyProject;
    lang: LocaleType;
    showGit?: boolean;
    showURL?: boolean;
}

const ProjectCard = (props: SalesCardProps) => {
    const { project, lang, showGit, showURL } = props;
    return (
        <div className="bg-neutral-100 shadow-lg rounded-lg overflow-hidden m-4 p-2 max-w-screen-md">
            <div className="px-6 py-4 flex flex-col items-start">
                <h3 className="text-blue-900 text-xl font-semibold mb-2">{project.name[lang]}</h3>
                <p className="text-gray-700 text-base max-w-screen-sm text-left">{project.description[lang]}</p>
                {showGit && project.git ? (
                    <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {project.git}
                    </a>
                ) : null}
                {showURL && project.url ? (
                    <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {project.url}
                    </a>
                ) : null}
            </div>
            <div className="flex items-center justify-center h-60hv">
                {project.video ? (
                    <iframe
                        width={project.video.width}
                        height={project.video.height}
                        src={project.video.url}
                        title={project.video.title}
                        frameBorder="0"
                        allow={project.video.allow}
                        allowFullScreen
                    ></iframe>
                ) : (
                    <Image
                        src={project.image}
                        alt={project.name[lang]}
                        width={MediaSize.width}
                        height={MediaSize.height}
                    />
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
