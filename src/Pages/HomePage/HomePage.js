import React from "react";
import { Link } from "react-router-dom";
import { auth, GoogleAuthProvider } from "../../confing/firebase";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function HomePage() {
  let navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      await navigate("/profile", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <main>
        <h3>Google Auth with Firebase And React</h3>

        <div className="levbitz_home_auth_btn">
          <span>
            <button onClick={signInWithGoogle}>Cintinue With Google</button>
          </span>

          <span>
            <Link to="/profile">Profile</Link>
          </span>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
