import React from 'react';

const Blog = () => {
    return (
        <div >
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-3xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">Here are Some  Frequently asked Question with Answer.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-violet-400"> what is cors?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-violet-400">Why are you using firebase? What other options do you have to implement authentication?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-violet-400">How does the private route work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-violet-400">What is Node? How does Node work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-lg bg-sky-400 rounded-md dark:text-gray-400">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;