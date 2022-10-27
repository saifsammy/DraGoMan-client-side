import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseDetailsPage from "../components/CourseDetailsPage/CourseDetailsPage";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import LogIn from "../components/LogIn/LogIn";
import Main from "../components/Main/Main";
import SecretPath from "../components/SecretPath/SecretPath";
import SignUp from "../components/SignUp/SignUp";

export const routs = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/courses",
                loader: async () => {
                    return fetch("http://localhost:5000/courses")
                },
                element: <Courses></Courses>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: "/course/:courseid",
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CourseDetailsPage></CourseDetailsPage>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/footer",
                element: <Footer></Footer>
            }

        ]
    }
])