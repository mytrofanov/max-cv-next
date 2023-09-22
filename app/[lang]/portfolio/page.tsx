import { Dictionary, LocaleType } from '@/localization';
import React from 'react';
import { MyWorks } from '@/lib';
import ProjectCard from '@/components/project-card';
import { getDictionary } from '@/get-dictionary';

interface PaymentsPageProps {
    params: { lang: LocaleType };
}

export default async function PortfolioPage(props: PaymentsPageProps) {
    const { params } = props;
    const dictionary: Dictionary = await getDictionary(params.lang);
    return (
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-center text-indigo-500 mb-6">{dictionary.portfolio.title}</h2>
            <div className="flex flex-wrap justify-center">
                {MyWorks.map(project => (
                    <ProjectCard key={project.name.en} project={project} lang={params.lang} showGit showURL />
                ))}
            </div>
        </div>
    );
}
