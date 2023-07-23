/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import img from "../../assets/icon.avif"
import { Link } from "react-router-dom";

const Admission = () => {
    const [collegesName, setCollegesName] = useState([])
    useEffect(() => {
        fetch('collegesName.json')
            .then(res => res.json())
            .then(data => {
                setCollegesName(data)
            })
    }, [])
    return (
        <>
        <h3 className="text-center font-bold text-4xl mb-2 mt-12 text-blue-800 italic">Colleges Name</h3>
            <p className="text-center mb-10 font-semibold">"Each of us has an inner dream that we can unfold if we will just have the courage to admit what it is. And the faith to trust our own admission.."</p>
            <div className="grid md:grid-cols-3 grid-cols-1 md:ml-10 gap-5 mb-10">
                {
                    collegesName.map((item, index) =>
                        <div className="card md:w-96 bg-base-100 shadow-xl" key={index}>
                            <div className="card md:w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src={img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.college_name}</h2>
                                    <p className="font-semibold">Admission Date: {item.admission_date}</p>
                                    <div className="card-actions justify-end">
                                        <Link className="btn btn-primary" to="/admissionapply">Apply For Admission</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Admission;