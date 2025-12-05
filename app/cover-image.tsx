import ContentfulImage from "../lib/contentful-image";

export default function CoverImage({
  title,
  url
}: {
  title: string;
  url: string;
}) {
  return (
    <div className="hero sm:mx-0">
      <ContentfulImage
        alt={`Cover Image for ${title}`}
        priority
        width={1112}
        height={450}
        src={url}
      />
    </div>
  );
}
