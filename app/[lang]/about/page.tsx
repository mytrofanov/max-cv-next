import { AboutMe } from '@/lib';

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center mt-36">
            <ul className="list-none p-0">
                {AboutMe.map((contact, index) => (
                    <li key={index} className="mb-4 flex items-center">
                        {contact.icon}
                        <a
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline flex items-center"
                        >
                            <span className="ml-2">{contact.title}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
