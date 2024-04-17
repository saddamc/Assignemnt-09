import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto min-h-[1600px] font-fira text-center items-center  bg-slate-400 ">
            <div>
                <h2 className="text-5xl font-bold mb-6 text-red-500 pt-[200px] ">Oops!!! something went wrong</h2>
                <p className="text-xl font-light mb-6">Sorry, We couldn't find your page</p>
                <Link to="/"><button className="btn bg-slate-200 text-2xl font-bold">Back to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;