// import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const collegesDetails = useLoaderData();
    console.log(collegesDetails);
    // const [collegesDetails, setCollegesDetails] = useState([])
    // useEffect(() => {
    //     fetch('colleges.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCollegesDetails(data)
    //         })
    // }, [])
    return (
        <div className="md:ms-96 md:mt-12">
            <div className="card md:w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={collegesDetails.iamge} alt="" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title text-3xl">{collegesDetails.name}</h2>
                    <p className="font-bold text-xl">------ {collegesDetails.events[0].id} ------</p>
                    <p className="font-semibold">{collegesDetails.events[0].name}</p>
                    <p className="font-semibold">{collegesDetails.events[0].date}</p>
                    <p className="font-bold text-xl">------ {collegesDetails.events[1].id} ------</p>
                    <p className="font-semibold">{collegesDetails.events[1].name}</p>
                    <p className="font-semibold">{collegesDetails.events[1].date}</p>
                    <p className="font-bold text-xl">------ Research History ------</p>
                    <p className="font-semibold">{collegesDetails.researchHistory}</p>
                    <p className="font-bold text-xl">------ Sports ------</p>
                    <p className="font-semibold">1. {collegesDetails.sports[0]}</p>
                    <p className="font-semibold">2. {collegesDetails.sports[1]}</p>
                    <p className="font-semibold">3. {collegesDetails.sports[2]}</p>
                    <div className="card-actions justify-end">
                        <Link to="/colleges" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;