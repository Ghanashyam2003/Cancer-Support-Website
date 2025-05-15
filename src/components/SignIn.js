import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ FIXED

const SignIn = () => {
  const [user, setUser] = useState(null);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {!user ? (
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential); // ✅ FIXED
            console.log("User Info:", decoded);
            setUser(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <button onClick={() => setUser(null)}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
