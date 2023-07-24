import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Colleges = () => {
    const [colleges, setColleges] = useState([])
    useEffect(() => {
        fetch('https://college-booking-server-psi.vercel.app/colleges')
            .then(res => res.json())
            .then(data => {
                setColleges(data)
            })
    }, [])
    return (
        <>
            <h3 className="text-center font-bold text-4xl mb-2 mt-12 text-blue-800 italic">Some College Details</h3>
            <div className="grid md:grid-cols-3 grid-cols-1 md:ml-10 gap-5 mb-10">
                {
                    colleges.map((item, index) =>
                        <div className="card md:w-96 bg-base-100 shadow-xl" key={index}>
                            <figure className="px-10 pt-10">
                                <img style={{ width: '500px', height: '300px' }} src={item.image} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.name}</h2>
                                <p><span className="font-semibold">Admission Date: </span> {item.admissionDates}</p>
                                <p><span className="font-semibold">Ratting: </span> {item.rating}</p>
                                <div className="card-actions">
                                    <Link to={`/viewdetails/${item._id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Colleges;