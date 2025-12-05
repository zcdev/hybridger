import ContentfulImage from "../lib/contentful-image";

export default function CoverImage({
  title,
  url
}: {
  title: string;
  url: string;
}) {
  return (
    <div className="sm:mx-0">
      <ContentfulImage
        alt={`Cover Image for ${title}`}
        priority
        width={1100}
        height={700}
        src={url}
      />
    </div>
  );
}
