import Graphic from "./graphic";
import { Markdown } from "@/lib/markdown";

function PricePreview({
    title,
    coverImage,
    content,
    excerpt,
    slug,
}: {
    title: string;
    coverImage: any;
    content: any;
    excerpt: string;
    slug: string;
}) {
    return (
        <div className="text-xl md:text-2xl text-gray-600">
            <Graphic title={title} url={coverImage.url} />
            <h3 className="text-2xl md:text-3xl leading-tight text-indigo-700">
                {title}
            </h3>
            <Markdown content={content} />
        </div>
    );
}

export default function Prices({ pricePosts }: { pricePosts: any[]; }) {
    return (
        <section className="prices">
            <h2 className="mb-2 md:mb-5 text-3xl md:text-4xl tracking-tight leading-tight mt-5 md:mt-12">
                Pricing Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-20">
                {pricePosts.map((post) => (
                    <PricePreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        content={post.content}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    );
}
