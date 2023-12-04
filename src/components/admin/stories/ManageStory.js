import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import ApiServices, { BASE_URL } from "../../services/ApiServices"
import { Link } from "react-router-dom"
export default function ManageStory(){
    const [load,setLoad]=useState(true)
    const [data,setData]=useState([])
    const obj={
        display:"block",
        margin:"0px auto",
    }
    useEffect(()=>{
        ApiServices.getAllStory().then(
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
    const deleteStory=(id)=>{
        setLoad(true)
        let data={
            _id:id
        }
        ApiServices.deleteStory(data).then(
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
                        Manage Story
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
        <div className={load ? "disabled container table-responsive" :"container table-responsive"}>
            <div className="d-flex justify-content-end mb-3">
                <Link className="btn btn-danger " to="/admin/addStory">Add New</Link>
            </div>
            <table className="table table-bordered table-striped table-hover">
                <thead className="text-light bg-primary">
                    <tr>
                        <th>Sno</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Theme</th>
                        <th>Author</th>
                        <th>Story</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(
                        (el,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <img src={BASE_URL+"/"+el?.image} style={{height:"200px",width:"200px"}}/>
                                </td>
                                <td>{el?.name}</td>
                                <td>{el?.themeId?.name}</td>
                                <td>{el?.author}</td>
                                <td>{el?.story}</td>
                                <td>{el?.description}</td>
                                <td>
                                    <Link to={"/admin/updateStory/"+el?._id}>
                                    <i className="bi bi-pencil-square text-success fs-3"></i>
                                    </Link>
                                    <i className="bi bi-trash fs-3 text-danger" onClick={()=>{deleteStory(el?._id)}}></i>
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