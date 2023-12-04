import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import ApiServices from "../../services/ApiServices"
export default function AddStory(){
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [imageName,setImageName]=useState("")
    const [image,setImage]=useState({})
    const [themeId,setThemeId]=useState("")
    const [author,setAuthor]=useState("")
    const [story,setStory]=useState("")
    const [load,setLoad]=useState(false)
    const [themes,setThemes]=useState([])
    useEffect(()=>{
        ApiServices.getAllThemes().then(
            (res)=>{
                setThemes(res.data.data)
            }
        )
    },[])
    const handleForm=(e)=>{
        setLoad(true)
        e.preventDefault()
        let data=new FormData()
        data.append("name",name)
        data.append("image",image)
        data.append("description",description)
        data.append("author",author)
        data.append("story",story)
        data.append("themeId",themeId)
        ApiServices.addStory(data).then(
            (res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    setName("")
                    setImageName("")
                    setImage("")
                    setDescription("")
                    setAuthor("")
                    setThemeId("")
                    setStory("")
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
                        Add Story
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
        <div className={load && "disabled"}>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-9 offset-md-2">
                    <form onSubmit={handleForm}>
                        <div className="row">
                            <div className="col-md-2">
                                <label>Story Name</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" type="text" placeholder="Enter Story Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
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
                                <label>Themes</label>
                            </div>
                            <div className="col-md-8">
                                <select className="form-control"   value={themeId} onChange={(e)=>{setThemeId(e.target.value)}}>
                                    <option value="" selected >Select Theme</option>
                                    {themes?.map((el,index)=>(
                                        <option value={el?._id} key={index}>{el?.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-2">
                                <label>Author</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" placeholder="Enter author name"  value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-2">
                                <label>Story</label>
                            </div>
                            <div className="col-md-8">
                                <textarea className="form-control" placeholder="Enter Description"  value={story} onChange={(e)=>{setStory(e.target.value)}}/>
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

                        <button className="btn btn-primary d-block mx-auto w-25">Add</button>
                    </form>
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}