

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
                        <button className="btn-sm rounded-md text-white bg-black">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default House;