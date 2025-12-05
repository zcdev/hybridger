import Avatar from "./avatar";
import { Testimonial } from "@/lib/types";
import { getTestimonials } from "@/lib/api";

function TestimonialPreview({
    avatar,
    title,
    author
}: Testimonial) {
    return (
        <div className="slide text-md md:text-2xl text-gray-600">
            <Avatar url={avatar.url} />
            <h3 className="text-lg md:text-3xl leading-tight text-indigo-700 mb-2">
                {title}
            </h3>
            <p>{author}</p>
        </div>
    );
}

export default async function Testimonials() {
    const testimonials = await getTestimonials();

    return (
        <section className="testimonials bg-accent-1 border-t border-accent-2">
            <h2 className="mb-2 md:mb-5 text-3xl md:text-4xl tracking-tight leading-tight mt-5 md:mt-12">
                Testimonials
            </h2>
            <div className="slideshow mb-5">
                <div className="slides grid grid-cols-1 mb-12 md:mb-24">
                    {testimonials.map(testimonial => (
                        <TestimonialPreview
                            key={testimonial.title}
                            avatar={testimonial.avatar}
                            title={testimonial.title}
                            author={testimonial.author}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
