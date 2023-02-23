import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      ProfilePage
      {user ? (
        <main>
          <div>
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
          </div>
        </main>
      ) : null}
    </div>
  );
}

export default ProfilePage;
