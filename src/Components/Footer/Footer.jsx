import { Link } from "react-router-dom";
import img from "../../assets/icon.avif"
import { FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img className="rounded-lg" style={{width: "70px", height: "70px"}} src={img} alt="" />
                    <p>ACME Industries Ltd. <br />Providing reliable tech since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link><FaFacebook style={{fontSize: "1.5rem"}}></FaFacebook></Link>
                        <Link><FaYoutube style={{fontSize: "1.5rem"}}></FaYoutube></Link>
                        <Link><FaGoogle style={{fontSize: "1.5rem"}}></FaGoogle> </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;