import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "../components";
import { Drawer, MainAppBar } from "../layouts";

const routes = [
    {
        view: lazy(() => import("../views/Home")),
        path: "/"
    },
    {
        view: lazy(() => import("../views/Contact")),
        path: "/contact"
    },
    {
        view: lazy(() => import("../views/Login")),
        path: "/login"
    }
]

const Home = lazy(() => import("../views/Home"));
const Contact = lazy(() => import("../views/Contact"));
const Login = lazy(() => import("../views/Login"));

const Router = () => {
    return (
        <BrowserRouter>
          <Suspense fallback={<Loader />}></Suspense>
            <Routes>
                <Route element={<Drawer />}>
                    <Route path="/" element={
                        <Suspense fallback={<Loader />}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/contact" element={
                        <Suspense fallback={<Loader />}>
                            <Contact />
                        </Suspense>
                    } />
                </Route>
            </Routes>
            <Routes>
                <Route element={<MainAppBar />}>
                    <Route path="/login" element={
                        <Suspense fallback={<Loader />}>
                            <Login />
                        </Suspense>
                    } />
                </Route>
            </Routes>
    </BrowserRouter>
    );
}

export default Router