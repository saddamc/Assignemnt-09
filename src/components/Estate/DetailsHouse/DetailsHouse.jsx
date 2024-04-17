import { useLoaderData, useParams } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";


const DetailsHouse = () => {
    const houses = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);
    const house = houses.find(house => house.id == id);
    console.log(house);

    return (
        <div className="grid grid-cols-3 font-fira max-w-7xl mx-auto">
            <div className="bg-slate-400 card text-[333] shadow-xl my-24 col-span-2 space-y-3 p-4">
                <h2 className="text-4xl font-bold my-4 mx-auto text-[#45f045] underline ">{house.segment_name} </h2>
                <figure><img src={house.image} alt="Album" /></figure>
                <div className="card-body">
                    <div className="bg-slate-200 p-2 ">
                        <p className="text-2xl font-bold mb-1"> Description </p>
                        <p> {house.description} </p>
                    </div>
                    <div className="bg-slate-200 p-2">
                        <h4 className="font-bold flex items-center "><FiMapPin></FiMapPin> <span className="ml-2">{house.location}</span> </h4>
                    </div>
                    <div className="bg-slate-200 p-2">
                        <p className="text-lg font-semibold">Facilities</p>
                        <p className="flex items-center font-medium"> <GrStatusGood className="text-[#30bd30] font-bold"></GrStatusGood> <span className="ml-2">{house.facilities[0]}</span> </p>
                        <p className="flex items-center font-medium"> <GrStatusGood className="text-[#30bd30] font-bold"></GrStatusGood> <span className="ml-2">{house.facilities[1]}</span> </p>
                        <p className="flex items-center font-medium"> <GrStatusGood className="text-[#30bd30] font-bold"></GrStatusGood> <span className="ml-2">{house.facilities[2]}</span> </p>

                    </div>
                    <div className="card-actions justify-between bg-slate-200 p-2 font-bold ">

                        <p className="text-red-400">Price: {house.price} </p>
                        <p className="text-yellow-500">Status: {house.status} </p>


                    </div>
                </div>
            </div>
            <div className="col-span-1">

            </div>

        </div>
    );
};

export default DetailsHouse;