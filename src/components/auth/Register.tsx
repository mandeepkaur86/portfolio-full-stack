import { useState } from "react"
import ApiServices from "../services/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import React from "react"
export default function Register(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [load,setLoad]=useState(false)
    const [name,setName]=useState("")
    const [contact,setContact]=useState("")
    const nav=useNavigate()
    const handleForm=(e)=>{
        setLoad(true)
        e.preventDefault()
        let data={
            email:email,
            password:password,
            name:name,
            contact:contact
        }
        ApiServices.register(data).then(
            (res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    setTimeout(()=>{
                        nav("/login")
                    },1500)
                }
                else{
                    toast.error(res.data.message)
                    setTimeout(()=>{
                        setLoad(false)
                    },2000)
                }
            }
        ).catch(
            (err)=>{
                toast.error("Something went Wrong!! Try Again later!!")
                setTimeout(()=>{
                    setLoad(false)
                },2000)
            }
        )
    }
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
                        Register
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
                            Register
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
        <ClipLoader loading={load} cssOverride={obj} size={100} />
        <div className={load ? "": "disabled"}>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-9 offset-md-2">
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-md-2">
                                <label>Name</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" type="name" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-2">
                                <label>Email</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-2">
                                <label>Password</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" placeholder="Enter Password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-2">
                                <label>Contact</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" placeholder="Enter contact" type="number" value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
                            </div>
                        </div>
                        <button className="btn btn-primary d-block mx-auto w-25">Register</button>
                    </form>
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}