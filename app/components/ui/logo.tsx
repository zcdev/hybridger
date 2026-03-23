import ContentfulImage from "@/lib/contentful-image";

const lightModeLogo = "https://images.ctfassets.net/nxqkiyet73hh/mhI5JId9K4gvmef3Wzfxy/734ac34e10d2ae4ca2162bc12aaa1100/hybridger-logo-light.svg";

const darkModeLogo = "https://images.ctfassets.net/nxqkiyet73hh/AExFYv0mOmAKciFO14IB3/0486ff2afa83f54987b9cc2a2e13ad4d/hybridger-logo-dark.svg";

export default function Logo() {
    return (
        <>
            <ContentfulImage
                className="logo inline-flex align-[-9px] dark:hidden"
                alt="Hybridger logo"
                width={93}
                height={60}
                src={lightModeLogo}
            />
            <ContentfulImage
                className="logo hidden align-[-9px] dark:inline-flex"
                alt="Hybridger logo"
                width={93}
                height={60}
                src={darkModeLogo}
            />
        </>
    );
}