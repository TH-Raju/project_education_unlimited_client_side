import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Course from "../components/Course";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/courses',
                        loader: () => fetch('https://education-unlimited-server-side.vercel.app/courses'),
                        element: <Course></Course>
                    },
                    {
                        path: '/courses/course/:id',
                        loader: ({ params }) => fetch(`https://education-unlimited-server-side.vercel.app/courses/${params.id}`),
                        element: <Course></Course>
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])