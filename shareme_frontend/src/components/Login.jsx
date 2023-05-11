import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { client } from "../client";
const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (credentialResponse, res) => {
    console.log(credentialResponse);
    localStorage.setItem("user", JSON.stringify(credentialResponse));

    const doc = {
      _id: credentialResponse.clientId,
      _type: "user",
      credential: credentialResponse.credential,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_API_TOKEN}>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            autoPlay
            muted
            className="w-full h-full object-cover"
          />

          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className="p-5">
              <img src={logo} width="130px" alt="logo" />
            </div>
            <div className="shadow-2xl">
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={() => {
                  console.log("Login Failed");
                }}
                type="button"
                text="Sign up with Google"
                icon={<img src={FcGoogle} />}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
