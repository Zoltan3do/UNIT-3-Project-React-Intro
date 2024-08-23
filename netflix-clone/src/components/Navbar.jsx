import netflix_logo from "../netflix_logo.png"
import avatar from "../avatar.png"

function Navbar() {
    return (
        <header className="bg-black sticky-top">
            <nav className="navbar navbar-expand-lg px-3">
                <div className="container-fluid">
                    <img src={netflix_logo} alt="logo" className=" me-3" style={{ width: "150px" }} />
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#!">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-light" href="#!">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#!">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#!">Recently Added</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#!">My List</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row align-items-center w-25 d-none d-lg-flex justify-content-end">
                        <div className="col-2 px-0">
                            <span className="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg></span>
                        </div>
                        <div className="col-2 px-0">
                            <p className="text-light fs-small m-0">KIDS</p>
                        </div>
                        <div className="col-1 px-0">
                            <span className="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                            </svg></span>
                        </div>
                        <div className="col-3 px-0">
                            <div className="btn-group dropstart">
                                <button type="button" className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={avatar} alt="avatar
                              " className="w-75" />
                                </button>
                                <ul
                                    className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-dark border border-1 border-light">
                                    <li><a className="dropdown-item bg-dark text-light" href="#!">Profile</a></li>
                                    <li><a className="dropdown-item bg-dark text-light" href="#!">Settings</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Navbar