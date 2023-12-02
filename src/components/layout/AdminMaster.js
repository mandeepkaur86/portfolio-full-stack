import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import AdminHeader from "./AdminHeader";
export default function AdminMaster(){
    return(
        <>
        <AdminHeader/>
        <Outlet/>
        <Footer/>
        <ToastContainer/>
        </>
    )
}