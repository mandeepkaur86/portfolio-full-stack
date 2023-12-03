import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export default function Header(){
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
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/themes" className="nav-item nav-link active">
                  Themes
                </Link>
                <Link to="/story" className="nav-item nav-link">
                  Story
                </Link>
                <Link to="/feedback" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              {!!token ? 
              <a href="#" onClick={logout} className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
              Logout
              <i className="fa fa-arrow-right ms-3" />
              </a>
              :
              <>
              <Link to="/register" className="nav-item nav-link">
                  Register
              </Link>
              <Link to="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
              Login
              <i className="fa fa-arrow-right ms-3" />
              </Link>
              </>
              
              }
              
            </div>
          </nav>
        </>
    )
}