import ContentfulImage from "@/lib/contentful-image";

const lightModeLogo = "https://images.ctfassets.net/nxqkiyet73hh/mhI5JId9K4gvmef3Wzfxy/b8cc7b11a8c06f1d5dd012ecbc53add6/hybrider-logo-light.svg";

const darkModeLogo = "https://images.ctfassets.net/nxqkiyet73hh/AExFYv0mOmAKciFO14IB3/e3f28ff028b430d16e29d3a504812f26/hybrider-logo-dark.svg";

export default function Logo() {
    return (
        <>
            <ContentfulImage
                className="logo inline-flex align-[-13px] dark:hidden"
                alt="Hybridger logo"
                width={50}
                height={77}
                src={lightModeLogo}
            />
            <ContentfulImage
                className="logo hidden align-[-13px] dark:inline-flex"
                alt="Hybridger logo"
                width={50}
                height={77}
                src={darkModeLogo}
            />
        </>
    );
}