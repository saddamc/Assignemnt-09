import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto text-center items-center mt-12 ">
            <h2 className="text-5xl font-bold mb-6 text-red-500">Oops!!! something went wrong</h2>
            <p className="text-xl font-light mb-6">Sorry, we couldn't find your page</p>
            <Link to="/"><button className="btn bg-slate-300  text-2xl font-bold">Back to Homepage</button></Link>
        </div>
    );
};

export default ErrorPage;