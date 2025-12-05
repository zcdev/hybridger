import Logo from "./logo";

export default function Header() {
    return (
        <header className="text-left mt-12 mb-12">
            <Logo />
            <h1 className="inline-flex text-6xl tracking-tighter leading-tight pl-2">
                HyBridger
            </h1>
            <h2 className="text-3xl text-indigo-700 mt-4">
                Where design meets development and AI makes the handoff effortless.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mt-4">
                HyBridger unifies designers, developers, and stakeholders in a single collaborative workflow powered by AI-driven clarity, consistency, and speed.
            </p>
        </header>
    );
}