import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;




const Profile = () => {
    const { user } = useContext(AuthContext);
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        console.log(displayName, email, photoURL, emailVerified)

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }




    return (
        <div>
            <div className="card-body border rounded-xl shadow-lg mx-auto max-w-sm my-8 font-fira space-y-2 justify-center items-center text-center ">
                <br />

                <h4 className="card-title text-2xl font-bold divider ">User Profile</h4>
                <br />
                <div id="userProfile space-y-2">
                    <p className="strong text-xl mb-2">Name: {user.displayName} <span id="userName"></span> </p>

                    <p>Email: {user.email} <span id="userEmail"></span> </p>


                    <img className="mt-2" src={user.photoURL} alt="Profile Picture" id="userProfilePicture" />

                </div>
            </div>
        </div>
    );
};

export default Profile;