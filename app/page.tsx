import ContentfulImage from "../lib/contentful-image";
import { draftMode } from "next/headers";
import CoverImage from "./cover-image";
import Features from "./features";
// import MoreStories from "./more-stories";
import { Markdown } from "@/lib/markdown";
import { getAllPosts } from "@/lib/api";

function Intro() {
  return (
    <section className="flex-col md:flex-row text-left mt-16 mb-16">
      <header className="flex">
        <ContentfulImage
          alt="Hybridger logo"
          className="object-cover h-full rounded-full"
          height={50}
          width={50}
          src="https://images.ctfassets.net/nxqkiyet73hh/mhI5JId9K4gvmef3Wzfxy/742c2e80941780ee64f337df82314004/hybridger-logo.svg"
        />
        <h1 className="text-6xl tracking-tighter leading-tight pl-2 pt-1">
          HyBridger
        </h1>
      </header>
      <h2 className="text-3xl text-indigo-700 mt-5">
        Where design meets development and AI makes the handoff effortless.
      </h2>
      <p className="text-2xl text-gray-600 mt-3">
        HyBridger unifies designers, developers, and stakeholders in a single collaborative workflow powered by AI-driven clarity, consistency, and speed.
      </p>
    </section>
  );
}

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
      <div className="mb-8 md:mb-16">
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
  const heroPost = allPosts.filter(post => post.slug === "value-props")[0];
  const featurePosts = allPosts.filter(post =>
    post.excerpt === "features");
  console.log(featurePosts.sort((a, b) => a.slug.split("-")[1] - b.slug.split("-")[1]));
  const morePosts = allPosts.slice(1);

  return (
    <div className="max-w-6xl mx-auto px-5">
      <Intro />
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
      {/*       <MoreStories morePosts={morePosts} /> */}
    </div>
  );
}
