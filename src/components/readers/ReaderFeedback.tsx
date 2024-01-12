import { useEffect, useState } from "react"
import ApiServices, { BASE_URL } from "../services/ApiServices"
import { toast } from "react-toastify"
import {ClipLoader} from "react-spinners"
import { Navigate } from "react-router-dom"
export default function ReaderFeedback(){
    const [load,setLoad]=useState(true)
    const [rating,setRating]=useState([])
    const obj={
        display:"block",
        margin:"0px auto",
    }
    
    useEffect(()=>{
        let data={
            userId:sessionStorage.getItem("userId")
        }
        ApiServices.getReaderFeedback(data).then(
            (res)=>{
                if(res.data.success){
                    setRating(res.data.data)
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
    const token=sessionStorage.getItem("token")
    if(!token){
        toast.error("Please login")
        return <Navigate to="/login"/>
    }
    return(
        <>
        <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">
                    Feedback
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
                            Feedback
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
                {
                    rating?.map((el,index)=>(
                <div className="col-md-4 p-4">
                    <div className="card">
                        <img src={BASE_URL+"/"+el?.storyId?.image}style={{height:"250px"}}/>
                        <div className="card-body">
                            <h3>{el?.storyId?.name}</h3>
                            <p>By Author {el?.storyId?.author}</p>
                            <h4>Your Review {el?.feedback}</h4>
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>

        </>
    )
}