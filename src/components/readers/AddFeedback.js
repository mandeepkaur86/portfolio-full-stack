import { useNavigate, useParams } from "react-router-dom";
import {  useEffect, useState } from "react"
import { toast } from "react-toastify"
import {ClipLoader} from "react-spinners"
import ApiServices from "../services/ApiServices";
export default function AddFeedback(){
    const param=useParams()
    const storyId=param.id
    const [story,setStory]=useState({})
    const obj={
        display:"block",
        margin:"0px auto",
    }
    const nav=useNavigate()
    useEffect(()=>{
        let data={
            _id:storyId
        }
        ApiServices.singleReaderStory(data).then(
            (res)=>{
                if(res.data.success){
                    setStory(res.data.data)
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
    const [load,setLoad]=useState(true)
    const [rating,setRating]=useState("")
    const handleForm=(e)=>{
        setLoad(true)
        e.preventDefault()
        let data={
            userId:sessionStorage.getItem("userId"),
            storyId:storyId,
            feedback:rating
        }
        ApiServices.addFeedback(data).then(
            (res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    setTimeout(()=>{
                        nav("/feedback")
                    },1000)
                }
                else{
                    toast.error(res.data.message)
                    setTimeout(()=>{
                        setLoad(false)
                    },1000)
                }
            }
        ).catch(
            (err)=>{
                toast.error("Something went Wrong!! Try Again later!!")
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
                <div className="col-md-8 offset-md-2">
                    <h1>Your review Matters to Us!!</h1>
                    <p>Add your review on Story {story?.name}</p>
                    <form onSubmit={handleForm}>
                    <input className="form-control my-3" type="text" placeholder="Write your review"  value={rating} onChange={(e)=>{setRating(e.target.value)}} required/>
                    <button className="btn btn-primary d-block mx-auto w-25 ">Add</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}