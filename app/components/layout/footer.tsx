export default function Footer() {
    return (
        <footer className="border-t-1 border-gray-300">
            <div className="container mx-auto px-5">
                <div className="py-10 md:py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-6 md:mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Built with Next.js + Contentful.
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-5 lg:w-1/2">
                        <p className="text-md">This website is a conceptual prototype for personal demo purposes and it does not represent a real business or provide actual services.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}