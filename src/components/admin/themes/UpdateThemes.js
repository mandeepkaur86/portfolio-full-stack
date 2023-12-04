import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import ApiServices, { BASE_URL } from "../../services/ApiServices"
import { useNavigate, useParams } from "react-router-dom"
export default function UpdateThemes(){
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [imageName,setImageName]=useState("")
    const [image,setImage]=useState({})
    const [previousImage,setPreviousImage]=useState("")
    const [load,setLoad]=useState(true)
    let param=useParams()
    let id=param.id
    useEffect(()=>{
        let data={
            _id:id
        }
        ApiServices.singleThemes(data).then(
            (res)=>{
                if(res.data.success){
                    setName(res.data.data.name)
                    setDescription(res.data.data.description)
                    setPreviousImage(res.data.data.image)
                    setTimeout(()=>{
                        setLoad(false)
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
    },[])
    const nav=useNavigate()
    const handleForm=(e)=>{
        setLoad(true)
        e.preventDefault()
        let data=new FormData()
        data.append("name",name)
        data.append("_id",id)
        data.append("description",description)
        if(!!imageName){
            data.append("image",image)
        }
        ApiServices.updateThemes(data).then(
            (res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    setTimeout(()=>{
                        nav("/admin/viewThemes")
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
                        Update Themes
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
                            Themes
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
                <div className="row my-3">
                    <div className="col-md-4 offset-md-4">
                        <img src={`${BASE_URL}/${previousImage}`} className="img-fluid w-100" style={{height:"250px"}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 offset-md-2">
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-md-2">
                                <label>Theme Name</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" type="text" placeholder="Enter Themes Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-2">
                                <label>Image</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" placeholder="Choose Image" type="file" value={imageName} onChange={(e)=>{setImageName(e.target.value);setImage(e.target.files[0])}}/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-2">
                                <label>Description</label>
                            </div>
                            <div className="col-md-8">
                                <textarea className="form-control" placeholder="Enter Description"  value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                            </div>
                        </div>

                        <button className="btn btn-primary d-block mx-auto w-25">Update</button>
                    </form>
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}