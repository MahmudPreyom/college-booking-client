import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from "../../providers/AuthProvider";

const GoogleLogin = () => {
    const  {googleSignIn}  = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-info gap-2">
                    <FcGoogle></FcGoogle> Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;