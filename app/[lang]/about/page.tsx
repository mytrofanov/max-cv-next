import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">About page</h1>
            <div>
                <Button className="m-6">Click me</Button>
            </div>
        </div>
    );
}
