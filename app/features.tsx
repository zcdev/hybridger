import CoverImage from "./cover-image";
import { Markdown } from "@/lib/markdown";
import { FeatureItem } from "@/lib/types";
import { getFeatureItems } from "@/lib/api";

function FeaturePreview({
    coverImage,
    title,
    subheader,
    content,
}: FeatureItem) {
    return (
        <div className="text-xl md:text-2xl text-gray-600">
            <CoverImage title={title} url={coverImage.url} />
            <h3 className="text-2xl md:text-3xl leading-tight text-indigo-700 mt-5">
                {title}
            </h3>
            <h4 className="text-xl font-bold">
                {subheader}
            </h4>
            <Markdown content={content} />
        </div>
    );
}

export default async function Features() {
    const featureItems = await getFeatureItems();
    const sortedFeatureItems = [...featureItems].sort((a, b) => a.id! - b.id!);

    return (
        <section className="features">
            <h2 className="mb-2 md:mb-5 text-3xl md:text-4xl tracking-tight leading-tight mt-5 md:mt-12">
                Product Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-12 md:mb-20">
                {sortedFeatureItems.map(item => (
                    <FeaturePreview
                        key={item.id}
                        coverImage={item.coverImage}
                        title={item.title}
                        subheader={item.subheader}
                        content={item.content}
                    />
                ))}
            </div>
        </section>
    );
}
