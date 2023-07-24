import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'>Home</Link>
                            <Link to="/colleges">College</Link>
                            <Link to="/admission">Admission</Link>
                            <Link to="/mycollege">My College</Link>
                            {
                                user ?
                                    <><button onClick={handleLogOut} className="btn btn-sm">Log Out</button></> :
                                    <><Link to="login" className="btn btn-sm">Login</Link></>
                            }
                            {/* <Link to="/login">Login</Link> */}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">College Admission</a>
                </div>
                <div className="navbar-end">
                    {user && <p className="hidden md:block">{user.email}</p>}
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            {user && <img className="w-8 mr-2 rounded-full" src={user.photoURL} alt="" />}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span> */}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
