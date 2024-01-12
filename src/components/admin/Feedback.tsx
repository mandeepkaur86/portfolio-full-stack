import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../services/ApiServices"
import React from "react"
export default function Feedback(){
    const [load,setLoad]=useState(true)
    const [data,setData]=useState([])
    const obj={
        display:"block",
        margin:"0px auto",
    }
    useEffect(()=>{
        ApiServices.getAllfeedback(data).then(
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
    const deleteFeedback=(id,status)=>{
        setLoad(true)
        if(status){
            var status1=false
        }
        else{
            var status1=true
        }
        let data={
            _id:id,
            status:status1
        }
        ApiServices.deletefeedback(data).then(
            (res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                }else{
                    toast.error(res.data.message)
                }
                setTimeout(()=>{
                    setLoad(false)
                },1000)
            }
        ).catch(
            (err)=>{
                toast.error("Something went wrong")
                setTimeout(()=>{
                    setLoad(false)
                },1000)
            }
        )
    }
    return(
        <>
        <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                    <h1 className="display-3 text-white animated slideInDown">
                        Manage Feedback
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
        <div className={load ? "disabled container table-responsive" :"container table-responsive"}>
            <table className="table table-bordered table-striped table-hover">
                <thead className="text-light bg-primary">
                    <tr>
                        <th>Sno</th>
                        <th>User Details</th>
                        <th>Story</th>
                        <th>Feedback</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    {data?.map(
                        (el,index)=>(
                            <tbody>
                                {data?.map((el: any, index: number) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{(el as any)?.userId?.name}</td>
                                        <td>{(el as any)?.storyId?.name}</td>
                                        <td>{el?.feedback}</td>
                                        <td>
                                            <i
                                                className="bi bi-trash fs-3 text-danger"
                                                onClick={() => {
                                                    deleteFeedback((el as any)?._id, (el as any)?._status as boolean);
                                                }}
                                            ></i>
                                        </td>
                                    </tr>
                                ))}
            </tbody>
                        )
                    )}
                
            </table>
        </div>
        </>
    )
}