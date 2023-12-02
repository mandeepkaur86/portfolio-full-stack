import { Link, useNavigate } from "react-router-dom"
import {toast} from "react-toastify"
export default function AdminHeader(){
  const token=sessionStorage.getItem("token")
  const nav=useNavigate()
  const logout=()=>{
    if(window.confirm("Do you want to Logout?")){
      sessionStorage.clear()
      toast.success("Logout Successfully")
      setTimeout(()=>{
        nav("/login")
      })
    }
  }
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a
              href="index.html"
              className="navbar-brand d-flex align-items-center px-4 px-lg-5"
            >
              <h2 className="m-0 text-primary">
                <i className="fa fa-book me-3" />
                Story App
              </h2>
            </a>
            <button
              type="button"
              className="navbar-toggler me-4"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/admin" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/admin/viewThemes" className="nav-item nav-link">
                  Themes
                </Link>
                <Link to="/admin/viewStory" className="nav-item nav-link">
                  Themes
                </Link>
                <Link to="/admin/viewFeedback" className="nav-item nav-link">
                  Feedback
                </Link>
                <Link to="/admin/viewReader" className="nav-item nav-link">
                  Feedback
                </Link>
              </div>
              {!!token ? 
              <a href="#" onClick={logout} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
              Logout
              <i className="fa fa-arrow-right ms-3" />
              </a>
              :
              <Link to="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
              Login
              <i className="fa fa-arrow-right ms-3" />
              </Link>
              }
            </div>
          </nav>
        </>
    )
}