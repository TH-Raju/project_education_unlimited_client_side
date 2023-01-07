import React from 'react';
import Review from './Review';

const Summary = () => {
    return (
        <div>
            <section className="p-6 mb-28 dark:bg-gray-800 dark:text-gray-100">
                <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-black">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">500+</p>
                        <p className="text-sm sm:text-base">Student's</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-black">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">300K</p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-black">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">20</p>
                        <p className="text-sm sm:text-base">Course Published</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-black">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">20</p>
                        <p className="text-sm sm:text-base">Teacher</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-black">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">10</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6 text-black">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">99+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
            <Review></Review>

            <div className='text-black'>
                <h1 className=' underline underline-offset-8 text-black text-3xl text-center py-10 font-bold'>Contact With Us</h1>
                <div className="grid w-full grid-cols-1 gap-8  py-16 mx-auto md:grid-cols-2 md:px-12  xl:px-32 pl-4 dark:bg-gray-800 dark:text-gray-100">

                    <div className="flex flex-col justify-around w-5/6 mx-auto">
                        <div className="space-y-2 ml-16">
                            <h2 className="text-4xl text-black font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                            <div className="dark:text-gray-400">Do you want to say us?</div>
                        </div>
                        <img src={require('../image/contact.gif')} alt="Contact our customer support" className="-mt-10 -z-30 max-w-96 max-h-96  " />
                    </div>
                    <form noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label htmlFor="name" className="text-sm text-black">Full name</label>
                            <input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm text-black">Email</label>
                            <input id="email" type="email" placeholder="Your email" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm text-black">Message</label>
                            <textarea id="message" rows="3" placeholder="Your message" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                        </div>
                        <button type="submit" method="POST" action="mailto:rajukhan894200@gmail.com" encType="multipart/form-data" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-cyan-700 text-white">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Summary;