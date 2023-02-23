import React from "react";

import { Link } from "react-router-dom";
import { auth, GoogleAuthProvider } from "../../confing/firebase";
import { useNavigate } from "react-router-dom";
import GImg from "../../confing/gImg.png";
import { signInWithPopup } from "firebase/auth";

function LoginPage() {
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
    <div
      style={{
        background: "#fff",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <p
        style={{
          textAlign: "center",
        }}
      >
        <img width={36} src={GImg} alt="" />
      </p>
      <h3>Login with Google</h3>

      <div
        style={{
          alignItems: "center",
          margin: "auto",
        }}
      >
        <button onClick={signInWithGoogle}>Continue with Google</button>

        <Link className="levbitz_home_link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
