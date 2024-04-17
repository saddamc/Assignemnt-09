
import { useEffect, useState } from "react";
import House from "../House/House";


const Houses = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch('House.json')
            .then(res => res.json())
            .then(data => setHouses(data))
    })
    return (
        <div className="font-fira mx-auto max-w-7xl rounded-xl">

            <div className="text-center">
                <h2 className="text-[35px] font-bold my-4">Choose Your Home </h2>
                <p className="mb-6">With a robust selection of popular Houses on hand, as well as leading house from real estate experts.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 ">
                {
                    houses.map(house => <House key={house.id} house={house}></House>)
                }

            </div>


        </div>
    );
};

export default Houses;
