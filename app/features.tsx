import CoverImage from "./cover-image";
import { Markdown } from "@/lib/markdown";

function FeaturePreview({
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
        <div>
            <div className="mb-5">
                <CoverImage title={title} slug={slug} url={coverImage.url} />
            </div>
            <div className="text-2xl text-gray-600">
                <h3 className="text-3xl leading-tight text-indigo-700">
                    {title}
                </h3>
                <Markdown content={content} />
            </div>
        </div>
    );
}

export default function Features({ featurePosts }: { featurePosts: any[]; }) {
    return (
        <section className="features">
            <h2 className="mb-8 text-4xl leading-tight mt-10">
                Product Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                {featurePosts.map((post) => (
                    <FeaturePreview
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
