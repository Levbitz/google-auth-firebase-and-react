import React, { useState, useEffect } from "react";

import { auth, GoogleAuthProvider, db } from "../../confing/firebase";
import { useNavigate } from "react-router-dom";
import GImg from "../../confing/gImg.png";
import { signInWithPopup } from "firebase/auth";
import { Timestamp, doc, setDoc } from "firebase/firestore";

function HomePage() {
  let navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const [ipDetails, setIpDetails] = useState([]);
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        response.json().then((jsonData) => {
          setIpDetails(jsonData);
          // console.log(jsonData);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [""]);

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      console.log(user);
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,

        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
        isBlocked: false,
        privateData: ipDetails,
      });

      await navigate("/profile", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <main
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
        <h3>Google Auth with Firebase And React</h3>

        <div className="levbitz_home_auth_btn">
          <span
            style={{
              textAlign: "center",
            }}
          >
            <button onClick={signInWithGoogle}>Continue With Google</button>
          </span>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
