import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { fromJSON } from "postcss";


// Lazy Loading Components
const About = lazy(() => import("./component/About"));
const Skills = lazy(() => import("./component/Skills"));
const Projects = lazy(() => import("./component/Projects"));

const AppLayout = () => {
    return (
        <div className="app min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
         <Outlet />
        </main>
        <Footer />
    </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<div className="flex justify-center items-center h-screen"><h1 className="text-2xl font-semibold">Loading...</h1></div>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: "/skills",
                element: (
                    <Suspense fallback={<div className="flex justify-center items-center h-screen"><h1 className="text-2xl font-semibold">Loading...</h1></div>}>
                        <Skills />
                    </Suspense>
                )
            },
            {
                path: "/projects",
                element: (
                    <Suspense fallback={<h1 className="text-center text-2xl py-20">Loading...</h1>}>
                        <Projects />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);