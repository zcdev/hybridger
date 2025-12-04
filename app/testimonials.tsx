import Avatar from "./avatar";
import { Markdown } from "@/lib/markdown";

function TestimonialPreview({
    title,
    author,
    content,
    excerpt,
    slug,
}: {
    title: string;
    author: any;
    content: any;
    excerpt: string;
    slug: string;
}) {
    return (
        <div className="slide text-md md:text-2xl text-gray-600">
            <Avatar picture={author.picture.url} />
            <h3 className="text-lg md:text-3xl leading-tight text-indigo-700 mb-2">
                {title}
            </h3>
            <Markdown content={content} />
        </div>
    );
}

export default function Testimonials({ testimonialPosts }: { testimonialPosts: any[]; }) {
    return (
        <section className="testimonials bg-accent-1 border-t border-accent-2">
            <h2 className="mb-2 md:mb-5 text-3xl md:text-4xl tracking-tight leading-tight mt-5 md:mt-12">
                Testimonials
            </h2>
            <div className="slideshow mb-5">
                <div className="slides grid grid-cols-1 mb-12 md:mb-24">
                    {testimonialPosts.map((post) => (
                        <TestimonialPreview
                            key={post.slug}
                            title={post.title}
                            author={post.author}
                            content={post.content}
                            slug={post.slug}
                            excerpt={post.excerpt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
