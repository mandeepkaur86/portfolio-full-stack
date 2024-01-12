import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import { Link, useParams } from "react-router-dom"
import ApiServices, { BASE_URL } from "../services/ApiServices"
import React from "react"

export default function Story(){
    const [load,setLoad]=useState(true)
    const [data,setData]=useState([])
    const obj={
        display:"block",
        margin:"0px auto",
    }
    const token=sessionStorage.getItem("token")
    const param=useParams()
    const themeId=param.id
    useEffect(()=>{
        var data = {};
        if(!!themeId){
             data={
                themeId:themeId
            }
        }
        
        ApiServices.getReaderStory(data).then(
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
    },[load])
    
    return(
        <>
        <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">
                       Story
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
                            Story
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
                    data?.map((el,index)=>(
                        <div className="col-md-4  p-4" key={index}>
                            <div className="card ">
                                <img src={BASE_URL+"/"+(el as any)?.image} style={{height:"250px"}} className="card-img-top"/>
                                <div className="card-body">
                                    <h3 className="card-title" style={{height:"50px"}}>{(el as any)?.name}</h3>
                                    <p style={{textOverflow:"ellipsis",height:"50px",overflow:"hidden",}}>{(el as any)?.description}</p>
                                    <Link className="btn btn-primary" to={
                                        !!token || index==0?`/singleStory/${(el as any)?._id}`:"/login"
                                    }>View Story</Link>
                                </div>
                                
                            </div>
                        </div>
                ))}
            </div>
   
            

        </div>
        </>
    )
}