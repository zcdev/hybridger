import ContentfulImage from "../lib/contentful-image";

export default function Header() {
    return (
        <header className="text-left mt-12 mb-12">
            <ContentfulImage
                className="inline-flex align-[-13px]"
                alt="Hybridger logo"
                height={50}
                width={50}
                src="https://images.ctfassets.net/nxqkiyet73hh/mhI5JId9K4gvmef3Wzfxy/742c2e80941780ee64f337df82314004/hybridger-logo.svg"
            />
            <h1 className="inline-flex text-6xl tracking-tighter leading-tight pl-2">
                HyBridger
            </h1>
            <h2 className="text-3xl text-indigo-700 mt-5">
                Where design meets development and AI makes the handoff effortless.
            </h2>
            <p className="text-2xl text-gray-600 mt-3">
                HyBridger unifies designers, developers, and stakeholders in a single collaborative workflow powered by AI-driven clarity, consistency, and speed.
            </p>
        </header>
    );
}