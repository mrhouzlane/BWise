import { Outlet } from "react-router-dom";

import style from './MainLayout.module.scss'
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
    return (
        <div className={style.App}>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default MainLayout;