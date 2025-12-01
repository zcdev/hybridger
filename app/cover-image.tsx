import ContentfulImage from "../lib/contentful-image";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {
  return (
    <div className="sm:mx-0">
      <ContentfulImage
        alt={`Cover Image for ${title}`}
        priority
        width={1100}
        height={700}
        className={cn("shadow-small", {
          "hover:shadow-medium transition-shadow duration-200": slug,
        })}
        src={url}
      />
    </div>
  );
}
