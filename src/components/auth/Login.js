import { useState } from "react"
import ApiServices from "../services/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
export default function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [load,setLoad]=useState(false)
    const nav=useNavigate()
    const handleForm=(e)=>{
        setLoad(true)
        e.preventDefault()
        let data={
            email:email,
            password:password
        }
        ApiServices.adminlogin(data).then(
            (res)=>{
                if(res.data.success){
                    sessionStorage.setItem("token",res.data.token)
                    sessionStorage.setItem("userType",res.data.data.userType)
                    sessionStorage.setItem("email",res.data.data.email)
                    sessionStorage.setItem("userId",res.data.data._id)
                    toast.success(res.data.message)
                    setTimeout(()=>{
                        nav("/")
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
                        Login
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
                            Login
                        </li>
                        </ol>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
        <ClipLoader loading={load} cssOverride={obj} size={100} />
        <div className={load && "disabled"}>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-9 offset-md-2">
                    <form onSubmit={handleForm}>
                        <div className="row">
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
                        <button className="btn btn-primary d-block mx-auto w-25">Login</button>
                    </form>
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}