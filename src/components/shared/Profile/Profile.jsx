import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Profile = () => {
    const { user, setUser } = useContext(AuthContext);



    return (
        <div>
            <h2>profile </h2>
        </div>
    );
};

export default Profile;