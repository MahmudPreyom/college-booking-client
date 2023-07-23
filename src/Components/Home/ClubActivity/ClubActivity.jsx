/* eslint-disable react/no-unescaped-entities */
import "./ClubActivity.css"
import g1 from "../../../assets/g1.jpeg"
import g2 from "../../../assets/g2.jpeg"
import g3 from "../../../assets/g3.jpg"
import g4 from "../../../assets/g4.jpg"
import g5 from "../../../assets/g5.jpg"
import g6 from "../../../assets/g6.jpg"
import g7 from "../../../assets/g7.jpg"
import g8 from "../../../assets/g8.jpg"
import g9 from "../../../assets/g9.jpg"

const ClubActivity = () => {

    const data = [
        {
            id: 1,
            imgSrc: g1,
        },
        {
            id: 2,
            imgSrc: g7,
        },
        {
            id: 3,
            imgSrc: g3,
        },
        {
            id: 4,
            imgSrc: g4,
        },
        {
            id: 5,
            imgSrc: g5,
        },
        {
            id: 6,
            imgSrc: g6,
        },
        {
            id: 7,
            imgSrc: g2,
        },
        {
            id: 8,
            imgSrc: g8,
        },
        {
            id: 9,
            imgSrc: g9,
        }
    ]

    return (
        <div>
            <h3 className="text-center font-bold text-4xl mb-2 mt-12 text-blue-800 italic">Club Activities</h3>
            <p className="text-center mb-10 font-semibold">"Determination is doing what needs to be done even when you don't feel like doing it."</p>
            <div className="gallery">
                {
                    data.map((item, index) => {
                        return (
                            <div className="pics" key={index}>
                                <img src={item.imgSrc} style={{ width: '100%' }} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ClubActivity;