import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
    return <Fragment>
        {/* navbar to be used in every page */}
        <nav className="mb-3 navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Watu Wetu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        {/* The content of a specific page */}
        <Outlet />

        {/* Footer to be used in every page */}
        <footer className="mt-3 py-5 rounded" style={{ background: "whitesmoke" }}>
            <section id="copyright" className="lead d-flex justify-content-center">
                <strong>Watu Wetu</strong>
                <strong className="ms-3">Copyright @ {new Date().getFullYear()}</strong>
            </section>
        </footer>
    </Fragment>
};

export default Root;
