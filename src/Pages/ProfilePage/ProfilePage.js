import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { auth } from "../../confing/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate;

  return (
    <div>
      {user ? (
        <main
          style={{
            background: "#fff",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <div>
            <h3> ProfilePage</h3>
            <h4>Hello {user.displayName}</h4>
            <h5>Your email is {user.email}</h5>
            <p>
              <img
                style={{
                  borderRadius: 50,
                }}
                src={user.photoURL}
                alt={user.displayName}
              />
            </p>
            <p>User Id {user.uid}</p>

            <a
              className="levbitz_source_code"
              href="https://github.com/Levbitz/google-auth-firebase-and-react-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Source Code
            </a>

            <button onClick={async () => signOut(auth)}>Logout</button>
          </div>
        </main>
      ) : null}
    </div>
  );
}

export default ProfilePage;
