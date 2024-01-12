import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import { Link } from "react-router-dom"
import ApiServices, { BASE_URL } from "../services/ApiServices"
export default function ReaderList(){
    const [load,setLoad]=useState(true)
    const [data,setData]=useState([])
    const obj={
        display:"block",
        margin:"0px auto",
    }
    useEffect(()=>{
        ApiServices.getAllReader().then(
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
    const changeStatus=(id,status)=>{
        setLoad(true)
        if(status){
            var status=false
        }
        else{
            var status=true
        }
        let data={
            _id:id,
            status:status
        }
        ApiServices.changeStatusReader(data).then(
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
                        Manage Readers
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
                            Readers
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(
                        (el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.contact}</td>
                                <td>{el?.userId?.status?"Active":"In-Active"}</td>
                                <td>
                                    {
                                        el?.userId?.status?
                                        <button className="btn btn-danger"onClick={()=>{changeStatus(el?.userId?._id,el?.userId?.status)}}>In-Active</button>
                                        :
                                        <button onClick={()=>{changeStatus(el?.userId?._id,el?.userId?.status)}} className="btn btn-success">Active</button>
                                    }
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
        </>
    )
}