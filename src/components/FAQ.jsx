import React from 'react';

const FAQ = () => {
    return (
        <div className=' w-5/6 mx-auto justify-center'>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-items-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-3xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">Here are Some  Frequently asked Question with Answer.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400"> What is single page application?</summary>
                            <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">A single-page application is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400"> What do we learn from this website?</summary>
                            <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">You can Learn various of Programming Language in Easy Way. We Teach Programming Language various ways. we try to give best Input from Us. On this site You can learn any of programming language what we have. If you purcess Our premimum course then we submit you a Certificate. and also We help you to find Internship or Job.  </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400"> What is programming?</summary>
                            <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">Computer programming is the process of performing a particular computation, usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400"> Why to learn programming language</summary>
                            <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">When you learn programming, it is not only about the knowledge you acquire, but also (and specially) about the useful transferable skills you get. And the fact is that, in addition to becoming more precise and methodic, when you learn programming, you significantly improve your problem solving and abstraction skills. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-violet-400">What is Framework?</summary>
                            <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">In computer programming, a software framework is an abstraction in which software, providing generic functionality, can be selectively changed by additional user-written code, thus providing application-specific software. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-violet-400">What is React?</summary>
                            <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.  </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
                            <p className="px-4 py-6 pt-4 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;