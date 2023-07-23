import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    // const collegesDetails = useLoaderData();
    const [collegesDetails, setCollegesDetails] = useState([])
    useEffect(() => {
        fetch('colleges.json')
            .then(res => res.json())
            .then(data => {
                setCollegesDetails(data)
            })
    }, [])
    return (
        <div>
            {
                collegesDetails.map((item, index) =>
                    <div className="card w-96 bg-base-100 shadow-xl image-full" key={index}>
                        <figure><img src={item.iamge} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ViewDetails;