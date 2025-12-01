import { draftMode } from "next/headers";
import CoverImage from "./cover-image";
import { Markdown } from "@/lib/markdown";
import Features from "./features";
import Prices from "./prices";
import { getAllPosts } from "@/lib/api";

function HeroPost({
  title,
  coverImage,
  content,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  content: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section>
      <div className="mb-8 md:mb-12">
        <CoverImage title={title} slug={slug} url={coverImage.url} />
      </div>
      <div className="text-2xl text-gray-600">
        <h3 className="text-3xl leading-tight text-indigo-700 mb-4">
          {title}
        </h3>
        <Markdown content={content} />
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = await draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts.find(post => post.slug === "value-props");
  const featurePosts = allPosts.filter(post =>
    post.excerpt === "features").sort((a, b) => a.slug.split("-")[1] - b.slug.split("-")[1]);
  const pricePosts = allPosts.filter(post =>
    post.excerpt === "prices").sort((a, b) => a.slug.split("-")[1] - b.slug.split("-")[1]);

  return (
    <>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          content={heroPost.content}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <Features featurePosts={featurePosts} />
      <Prices pricePosts={pricePosts} />
    </>
  );
}
