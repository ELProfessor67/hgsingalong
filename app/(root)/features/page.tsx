import React from 'react'

const page = () => {
    return (
        <section className="bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold capitalize lg:text-4xl text-white"> Explore Our  <br />Exciting Upcoming <span className="underline decoration-blue-500">Features</span></h1>

                <p className="mt-4 xl:mt-6 text-gray-300">
                    We are thrilled to announce a range of exciting new features designed to enhance your experience and streamline your workflow. Stay tuned for powerful updates that will bring more efficiency, flexibility, and creativity to your projects. Get ready to explore the future of seamless, intuitive solutions!
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div className="p-8 space-y-3 border-2  border-blue-300 rounded-xl">
                        <span className="inline-block  text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>

                        </span>

                        <h1 className="text-2xl font-semibold  capitalize text-white">AI Voice Enhancer</h1>

                        <p className="text-gray-300">
                            Unlock your vocal potential with AI. Enjoy improved singing, personalized song suggestions, and enhanced meeting audio quality.
                        </p>


                    </div>

                    <div className="p-8 space-y-3 border-2  border-blue-300 rounded-xl">
                        <span className="inline-block  text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold  capitalize text-white">Sing Better</h1>

                        <p className="text-gray-300">
                            AI will help you refine your voice, making every note perfect. Experience enhanced vocal quality and confidence.
                        </p>


                    </div>

                    <div className="p-8 space-y-3 border-2  border-blue-300 rounded-xl">
                        <span className="inline-block  text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold  capitalize text-white">Duet with AI</h1>

                        <p className="text-gray-300">
                            Sing along with AI for a seamless and immersive duet experience. Elevate your performances with advanced vocal harmony.
                        </p>


                    </div>

                    <div className="p-8 space-y-3 border-2  border-blue-300 rounded-xl">
                        <span className="inline-block  text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-music"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>

                        </span>

                        <h1 className="text-2xl font-semibold  capitalize text-white">Song Suggestions</h1>

                        <p className="text-gray-300">
                            Discover personalized recommendations tailored to your musical taste, enhancing your listening experience with curated selections.
                        </p>


                    </div>
                    <div className="p-8 space-y-3 border-2  border-blue-300 rounded-xl">
                        <span className="inline-block  text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mic"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                        </span>

                        <h1 className="text-2xl font-semibold  capitalize text-white">Enhanced Meeting Audio</h1>

                        <p className="text-gray-300">
                            Elevate your virtual gatherings with crystal-clear sound quality, ensuring every voice is heard distinctly and clearly, enhancing communication and collaboration.
                        </p>


                    </div>
                    <div className="p-8 space-y-3 border-2  border-blue-300 rounded-xl">
                        <span className="inline-block  text-blue-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold  capitalize text-white">Much More</h1>

                        <p className="text-gray-300">
                            Explore a myriad of additional features designed to enrich your experience, from advanced settings to seamless integration with other tools, ensuring versatility and functionality.
                        </p>


                    </div>
                </div>
            </div>
        </section>

    )
}

export default page