import {Link} from "react-router-dom"
export function Menu()
{
    return(<>

     <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
             
           
            </ul>
            <form className="d-flex" role="search">
                <Link className="btn btn-success mx-2" to="/login" role="button">Login</Link>
                <Link className="btn btn-warning mx-2" to="/reg" role="button">Register</Link>
            </form>
          </div>
        </div>
      </nav>



    </>)
}