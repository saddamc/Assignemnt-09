import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const House = ({ house }) => {
    const { id, image, segment_name, estate_title } = house;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{segment_name}</h2>
                    <p>{estate_title}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/house/${id}`}>
                            <button className="btn-sm px-2 rounded-md text-white bg-black hover:bg-red-500">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default House;
House.propTypes = {
    house: PropTypes.object
}