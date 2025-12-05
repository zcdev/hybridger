import ContentfulImage from "@/lib/contentful-image";
import { ImageWrapperProps } from "@/lib/types";

export default function ImageWrapper({
    src,
    srcDark,
    alt,
    width,
    height,
    className
}: ImageWrapperProps) {
    return (
        <>
            <picture>
                {/* dark mode image if provided */}
                {srcDark && (
                    <source
                        media="(prefers-color-scheme: dark)"
                        srcSet={srcDark}
                    />
                )}

                {/* fallback/light image */}
                <ContentfulImage
                    src={src}
                    alt={alt || ""}
                    width={width}
                    height={height}
                    className={className}
                    priority
                />
            </picture>
        </>
    );
}
