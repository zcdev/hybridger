import ContentfulImage from "../lib/contentful-image";
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
        <div className="text-2xl text-gray-600">
            <ContentfulImage
                className="align-[-13px] mb-2"
                alt={`Icon Image for ${title}`}
                height={45}
                width={45}
                src={coverImage.url}
            />
            <h3 className="text-3xl leading-tight text-indigo-700 mb-2">
                {title}
            </h3>
            <Markdown content={content} />
        </div>
    );
}

export default function Prices({ pricePosts }: { pricePosts: any[]; }) {
    return (
        <section className="prices">
            <h2 className="mb-5 text-4xl tracking-tight leading-tight mt-10">
                Pricing Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
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
