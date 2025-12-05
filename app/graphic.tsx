import ContentfulImage from "@/lib/contentful-image";

export default function Graphic({
    title,
    srcLight,
    srcDark,
}: {
    title: string,
    srcLight: string;
    srcDark: string;
}) {
    return (
        <>
            <ContentfulImage
                className="graphic block align-[-13px] mb-5 dark:hidden"
                alt={`Icon Image for ${title}`}
                height={50}
                width={50}
                src={srcLight}
            />
            <ContentfulImage
                className="graphic hidden align-[-13px] mb-5 dark:block"
                alt={`Icon Image for ${title}`}
                height={50}
                width={50}
                src={srcDark}
            />
        </>
    );
}