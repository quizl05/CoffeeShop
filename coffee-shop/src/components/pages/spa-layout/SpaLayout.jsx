import { Outlet } from "react-router-dom";

import HeaderNavbar from "../../header-navbar/HeaderNavbar";
import FooterNavbar from '../../footer-navbar/FooterNavbar'

export default function Spalayout() {
    return (
        <>
            <HeaderNavbar />
            <main>
                <Outlet />
            </main>
            <FooterNavbar />
        </>
    );
}