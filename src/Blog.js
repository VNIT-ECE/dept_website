export default function Blog(){
    return (
        <section id="blog">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex justify-center">
                <div className="mx-auto text-center text-4xl rounded bg-teal-accent-700 shadow-xl my-10 px-6 py-3 text-white">Blog</div>
            </div>
            <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
                <div className="px-10 bg-white py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        Quick Links
                    </p>
                    <p
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-teal-accent-400"
                        aria-label="Read article"
                        title="Nori grape silver beet broccoli kombu beet"
                    >
                        Software Installation Guide
                    </p>
                    <p className="max-w-xs mx-auto mb-2 text-gray-700">
                       Learn how to install the softwares you may encounter with.
                    </p>
                    <a
                            href="https://hackmd.io/@vedantphuse/ece-sy-resources"
                            target="_blank"
                            rel="noreferrer"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-accent-accent-400 hover:text-teal-accent-400"
                    >
                        Read more
                    </a>
                </div>
                <div className="px-10 py-20 bg-white text-center border rounded lg:px-5 lg:py-10 xl:py-20">
                    <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        Gallery
                    </p>
                    <a
                        href="/"
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-teal-accent-400"
                        aria-label="Read article"
                        title="Well, the way they make shows is, they make one"
                    >
                        <img alt="ECE VNIT" src="https://picsum.photos/200" />
                    </a>
                    <p className="max-w-xs mx-auto mb-2 text-gray-700">
                    </p>
                    <a
                        href="/gallery"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-accent-accent-400 hover:text-teal-accent-400"
                    >
                        Read more
                    </a>
                </div>
                <div className="px-10 py-20  text-center border rounded lg:px-5 lg:py-10 xl:py-20">
                    {/* <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                        20 Nov 2020
                    </p> */}
                    <p
                    
                        className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-teal-accent-400"
                        aria-label="Read article"
                        title="Pommy ipsum smeg head whizz morris himer due"
                    >
                        Dept Magazine
                    </p>
                    <p className="max-w-xs mx-auto mb-2 text-gray-700">
                        Coming Soon...
                    </p>
                    {/* <a
                        href="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-teal-accent-accent-400 hover:text-teal-accent-400"
                    >
                        Read more
                    </a> */}
                </div>
            </div>
            <div className="flex justify-center">
                <button type="button" className="px-6 py-3 my-5 shadow-md bg-teal-accent-700 hover:bg-teal-500 text-white">See all posts</button>
            </div>
        </div>
        </section>
    );
};