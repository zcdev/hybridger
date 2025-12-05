import Graphic from "./graphic";
import { Markdown } from "@/lib/markdown";
import { PricingCard } from "@/lib/types";
import { getPriceCards } from "@/lib/api";

function PricePreview({
    iconLight,
    iconDark,
    title,
    subheader,
    content,
}: PricingCard) {
    return (
        <div className="text-xl md:text-2xl text-gray-600">
            <Graphic title={title} srcLight={iconLight.url} srcDark={iconDark.url} />
            <h3 className="text-2xl md:text-3xl leading-tight text-indigo-700">
                {title}
            </h3>
            <h4 className="text-xl font-bold">
                {subheader}
            </h4>
            <Markdown content={content} />
        </div>
    );
}

export default async function Prices() {
    const priceCards = await getPriceCards();
    const sortedPriceCards = [...priceCards].sort((a, b) => a.id! - b.id!);

    return (
        <section className="prices">
            <h2 className="mb-2 md:mb-5 text-3xl md:text-4xl tracking-tight leading-tight mt-5 md:mt-12">
                Pricing Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-20">
                {sortedPriceCards.map(card => (
                    <PricePreview
                        key={card.title}
                        title={card.title}
                        subheader={card.subheader}
                        iconLight={card.iconLight}
                        iconDark={card.iconDark}
                        content={card.content}
                    />
                ))}
            </div>
        </section>
    );
}
