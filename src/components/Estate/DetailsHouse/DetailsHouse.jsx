import { useLoaderData, useParams } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import { FiMapPin } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";


const DetailsHouse = () => {
    const houses = useLoaderData();
    const { id } = useParams()
    // const idInt = parseInt(id);
    const house = houses.find(house => house.id == id);
    console.log(house);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:p-12 my-24 font-fira max-w-7xl mx-auto gap-6">
            <div className="bg-slate-400 card text-[333] shadow-black/88*/-9+ shadow-xl  col-span-2 space-y-3 p-4">
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

            <div className="col-span-1 space-y-2  mx-auto">
                <h2 className="text-xl font-bold mb-6 mx-auto text-center">Client</h2>
                <hr />
                <img className=" rounded-full w-[150px] h-[150px] " src="https://demo4.listivotheme.com/wp-content/uploads/2022/10/team_4-300x300.jpg" alt="" />
                <p className="font-bold mt-2">Sophia Doe </p>
                <div>
                    <p className="flex items-center"><FiMapPin></FiMapPin>
                        <span className="ml-2">70 Washington Street</span> </p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-4 bg-blue-600 rounded-md flex items-center">
                        <FaRegMessage className="text-white"></FaRegMessage>
                        <span className="text-xl font-bold text-white ml-2">Chat</span>
                    </button>
                    <button className="px-6 py-4 bg-blue-600 rounded-md flex items-center">
                        <AiOutlineMail className="text-white"></AiOutlineMail>
                        <span className="text-xl font-bold text-white ml-2">Email</span>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default DetailsHouse;