import ContentfulImage from "@/lib/contentful-image";

export default function Graphic({
    title,
    url,
}: {
    title: string,
    url: string;
}) {
    return (
        <>
            <ContentfulImage
                className="graphic block align-[-13px] mb-5 dark:hidden"
                alt={`Icon Image for ${title}`}
                height={50}
                width={50}
                src={url}
            />
            {/*             <ContentfulImage
                className="hidden align-[-13px] mb-5 dark:block"
                alt={`Icon Image for ${title}`}
                height={45}
                width={45}
                src={url}
            /> */}
        </>
    );
}