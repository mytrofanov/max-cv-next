import React from 'react';
import { Dictionary, LocaleType } from '@/localization';
import { MyProjects, MyWorks } from '@/lib';
import ProjectCard from '@/components/project-card';
import { getDictionary } from '@/get-dictionary';
import { BiCheck } from 'react-icons/bi';

interface PaymentsPageProps {
    params: { lang: LocaleType };
}

export default async function PortfolioPage(props: PaymentsPageProps) {
    const { params } = props;
    const dictionary: Dictionary = await getDictionary(params.lang);
    return (
        <div className="container mx-auto">
            <div className="mx-auto max-w-screen-md">{dictionary.portfolio.title}</div>
            <div className="mx-auto max-w-screen-md">
                {MyProjects.map(project => (
                    <div key={project.title} className="p-2 border-b flex items-center">
                        <BiCheck className="mr-2" /> <span>{project.title}</span>
                    </div>
                ))}
            </div>
            <div className="mx-auto p-4 max-w-screen-md">{dictionary.portfolio.description}</div>
            <div className="flex flex-wrap justify-center">
                {MyWorks.map(project => (
                    <ProjectCard key={project.name.en} project={project} lang={params.lang} showGit showURL />
                ))}
            </div>
        </div>
    );
}
