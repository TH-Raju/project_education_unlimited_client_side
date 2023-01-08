import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mx-32 md:mx-10 ' >
            <div className="dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" ></div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <h1 className="text-3xl font-semibold">👉 What is react? and Why to use react?</h1>
                        <p className="flex-1 pt-6">React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. and also React is a front-end JavaScript library. React is capable of making API calls (sending the request to the backend), which deal with the data. React cannot process the database or the data source itself. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">2 min read</span>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" ></div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <h1 className="text-3xl font-semibold">👉 What is cors?</h1>
                        <p className="flex-1 pt-6">Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">2 min read</span>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" ></div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <h1 className="text-3xl font-semibold">👉 Why are you using firebase? What other options do you have to implement authentication?</h1>
                        <p className="flex-1 pt-6">Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">5 min read</span>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" ></div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <h1 className="text-3xl font-semibold">👉 How does the private route work?</h1>
                        <p className="flex-1 pt-6">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">3 min read</span>
                        </div>
                    </div>
                </div>
                <div className="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                    <div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" ></div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <h1 className="text-3xl font-semibold">👉 What is Node? How does Node work?</h1>
                        <p className="flex-1 pt-6">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                            </div>
                            <span className="text-xs">4 min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;