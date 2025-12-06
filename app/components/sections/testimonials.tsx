import ImageWrapper from "../ui/image-wrapper";
import { Testimonial } from "@/lib/types";
import { getTestimonials } from "@/lib/api";

function TestimonialPreview({
    avatar,
    title,
    author
}: Testimonial) {
    return (
        <div className="slide text-gray-600">
            <ImageWrapper src={avatar.url} width={100} height={100} alt={author} className="headshot object-cover h-full rounded-full" />
            <h3 className="pt-5 text-lg md:text-3xl leading-tight text-indigo-700 mb-2">
                {title}
            </h3>
            <p className="text-md md:text-xl">{author}</p>
        </div>
    );
}

export default async function Testimonials() {
    const testimonials = await getTestimonials();
    const sortedTestimonials = [...testimonials].sort((a, b) => a.id! - b.id!);

    return (
        <section className="testimonials border-t-1 border-gray-300">
            <h2 className="mb-5 text-3xl md:text-4xl tracking-tight leading-tight mt-5 md:mt-12">
                Testimonials
            </h2>
            <div className="slideshow mb-5">
                <div className="slides grid grid-cols-1 mb-12 md:mb-24">
                    {sortedTestimonials.map(testimonial => (
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
