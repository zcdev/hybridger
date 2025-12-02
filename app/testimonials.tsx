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
        <div className="slide text-2xl text-gray-600">
            <Avatar picture={author.picture.url} />
            <h3 className="text-3xl leading-tight text-indigo-700 mb-2">
                {title}
            </h3>
            <Markdown content={content} />
        </div>
    );
}

export default function Testimonials({ testimonialPosts }: { testimonialPosts: any[]; }) {
    return (
        <section className="testimonials bg-accent-1 border-t border-accent-2">
            <h2 className="mb-5 text-4xl tracking-tight leading-tight mt-10">
                Testimonials
            </h2>
            <div className="slideshow">
                <div className="slides grid grid-cols-1 gap-y-11 mb-24">
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
