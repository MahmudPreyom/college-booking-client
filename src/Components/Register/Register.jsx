import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import GoogleLogin from "../googleLogin/GoogleLogin";
import { AuthContext } from "../../providers/AuthProvider.jsx";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value; // Get the confirmPassword value

        // Perform password validation
        if (password !== confirmPassword) {
            setError("Passwords do not match"); // Set error state
            return;
        }

        createUser (email, password, name, photo)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="w-full max-w-md mx-auto mt-8 mb-8">
            <form onSubmit={handleRegister} className="bg-sky-100 shadow-md rounded px-8 pt-6 pb-8">
                <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
                 {/* Display error message if there's an error */}
                 {error && (
                    <div className="mb-4 text-red-500">
                        {error}
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                        className="form-control w-full"
                        type="text"
                        name="name"
                        placeholder="Enter your name" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                        className="form-control w-full"
                        type="email"
                        name="email"
                        placeholder="Enter your email address" required />
                </div>

                <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                        <input
                            className="form-control w-full"
                            type="text"
                            name="photo"
                            placeholder="Enter your photo URL" required />
                    </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        className="form-control w-full"
                        type="password"
                        name="password"
                        placeholder="Enter your password" required />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    <input
                        className="form-control w-full"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        required
                    />
                </div>


                <div className="mb-4">
                    <button
                        className="btn btn-primary w-full"
                        type="submit">Register
                    </button>
                </div>

                <div className="text-center text-gray-700">
                    Already have an account? <Link to="/login" className="text-primary">Login</Link>
                </div>

            </form>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;