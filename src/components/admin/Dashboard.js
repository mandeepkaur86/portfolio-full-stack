import { useEffect, useState } from "react"
import {ClipLoader} from "react-spinners"
import ApiServices from "../services/ApiServices"
import { toast } from "react-toastify"

export default function Dashboard(){
    const [load,setLoad]=useState(true)
    const [data,setData]=useState({})
    const obj={
        display:"block",
        margin:"0px auto",
    }
    useEffect(()=>{
        ApiServices.dashboard().then(
            (res)=>{
                if(res.data.success){
                    setData(res.data.data)
                    setTimeout(()=>{
                        setLoad(false)
                    },1000)
                }else{
                toast.error(res.data.message)
                    setTimeout(()=>{
                        setLoad(false)
                    },1000)
                }
            }
        ).catch(
            (err)=>{
                toast.error("Something went wrong")
                setTimeout(()=>{
                    setLoad(false)
                },1000)
            }
        )
    },[])
    return(
        <>
         <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">
                    Dashboard
                    </h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                            <a className="text-white" href="#">
                            Home
                            </a>
                        </li>
                        <li className="breadcrumb-item">
                            <a className="text-white" href="#">
                            Pages
                            </a>
                        </li>
                        <li
                            className="breadcrumb-item text-white active"
                            aria-current="page"
                        >
                            Dashboard
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
        <ClipLoader loading={load} cssOverride={obj} size={100} />
        <div className={load ? "disabled container" :"container"}>
        <div className="row">
            <div className="col-md-3">
                <div className="card p-3 text-center">
                    <h1>{data?.totalThemes}</h1>
                    <h3>Total Themes</h3>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card p-3 text-center">
                    <h1>{data?.totalStories}</h1>
                    <h3>Total Stories</h3>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card p-3 text-center">
                    <h1>{data?.totalUsers}</h1>
                    <h3>Total Users</h3>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card p-3 text-center">
                    <h1>{data?.totalFeedbacks}</h1>
                    <h3>Total Feedback</h3>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}