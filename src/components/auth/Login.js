export default function Login(){
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
            <div className="container-xxl">
                <div className="row">
                    <div className="col-md-9 offset-md-2">
                    <form>
                        <div className="row">
                            <div className="col-md-2">
                                <label>Email</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" placeholder="Enter Email"/>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-2">
                                <label>Password</label>
                            </div>
                            <div className="col-md-8">
                                <input className="form-control" placeholder="Enter Password"/>
                            </div>
                        </div>
                        <button className="btn btn-primary d-block mx-auto w-25">Login</button>
                    </form>
                    </div>
                </div> 
            </div>
        </>
    )
}