import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ApiServices, { BASE_URL } from "../services/ApiServices"
import { toast } from "react-toastify"
import {ClipLoader} from "react-spinners"
import React from "react"
export default function SingleStory(){
    const param=useParams()
    const id=param.id
    const [data,setData]=useState({})
    const [load,setLoad]=useState(true)
    useEffect(()=>{
        let data={
            _id:id
        }
        ApiServices.singleReaderStory(data).then(
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
    })
    const obj={
        display:"block",
        margin:"0px auto",
    }
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
                <div className="col-md-8 offset-md-2">
                    <div className="card">
                        <img src={BASE_URL+"/"+(data as any)?.image} style={{height:"300px"}} className="card-img-top"/>
                        <div className="card-body">
                            <h1>{(data as any)?.name}</h1>
                            <p>{(data as any)?.description}</p>
                            <hr/>
                            <h3>Story</h3>
                            <p>{(data as any)?.story}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <span>By- {(data as any)?.author}</span> 
                            <Link to={"/addFeedback/"+(data as any)?._id} className="btn btn-primary">Add Feedback</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}