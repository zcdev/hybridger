
import CoverImage from "./cover-image";
import { Markdown } from "@/lib/markdown";
import { Hero } from "@/lib/types";
import { getHero } from "@/lib/api";

function HeroPreview({
    title,
    coverImage,
    content,
}: Hero) {
    return (
        <section>
            <div className="mb-5 md:mb-12">
                <CoverImage title={title} url={coverImage.url} />
            </div>
            <div className="text-xl md:text-2xl text-gray-600 mb-12 md:mb-20">
                <h3 className="text-2xl md:text-3xl leading-tight text-indigo-700 mb-4">
                    {title}
                </h3>
                <Markdown content={content} />
            </div>
        </section>
    );
}

export default async function HeroSection() {
    const heroSection = await getHero();
    const hero = heroSection[0];

    return (
        <>
            <HeroPreview
                coverImage={hero.coverImage}
                title={hero.title}
                content={hero.content}
            />
        </>
    );
}