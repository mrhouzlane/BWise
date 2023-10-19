import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ComingSoon from "./pages/ComingSoon";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

export const menus = [
    { name: "Dashboard", path: "/", element: <Dashboard />, image: "dashboard.svg" },
    { name: "History", path: "/history", element: <ComingSoon />, image: "history.svg" },
    { name: "Settings", path: "/settings", element: <ComingSoon />, image: "settings.svg" },
    { name: "About", path: "/about", element: <About />, image: "about.svg" }
];

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                {menus.map(m => (
                    <Route key={m.name} path={m.path} element={m.element} />
                ))}
            </Route>
        </Routes>
    )
}

export default App;