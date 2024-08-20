import '../App.css';
import { gapi } from 'gapi-script';

const signOut = () => {
    console.log("running...");
    gapi.auth2.getAuthInstance().signOut()
        .then(() => {
            console.log("User signed out.");
            window.location.href = "https://infiniti-suit.vercel.app/"
        })
        .catch((error) => {
            console.error("Error signing out: ", error);
        });
};

export { signOut };