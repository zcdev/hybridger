import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  picture,
}: {
  picture: any;
}) {
  return (
    <div className="flex items-center pb-5">
      <ContentfulImage
        alt="Headshot"
        className="headshot object-cover h-full rounded-full"
        height={100}
        width={100}
        src={picture}
      />
    </div>
  );
}
