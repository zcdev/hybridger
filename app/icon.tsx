import ContentfulImage from "@/lib/contentful-image";

export default function Icon({
    title,
    url,
}: {
    title: string,
    url: string;
}) {
    return (
        <>
            <ContentfulImage
                className="block align-[-13px] mb-5 dark:hidden"
                alt={`Icon Image for ${title}`}
                height={45}
                width={45}
                src={url}
            />
            <ContentfulImage
                className="hidden align-[-13px] mb-5 dark:block"
                alt={`Icon Image for ${title}`}
                height={45}
                width={45}
                src={url}
            />
        </>
    );
}