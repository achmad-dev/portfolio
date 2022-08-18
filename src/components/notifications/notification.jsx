import React, { memo } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeButton={false}
      toastStyle={{
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        fontSize: "24px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "0.5rem",
        padding: "0.5rem",
        margin: "0.5rem",
        width: "100%",
        textAlign: "center",
        textOverflow: "ellipsis",
        boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.5)",
      }}
      progressStyle={{
        top: "0%",
        backgroundImage: "linear-gradient(to right, #0081A0 , #832A90)",
        marginLeft: 8,
        width: 287,
      }}
      style={{
        fontSize: "24px",
        position: "absolute",
      }}
    />
  );
};
export default memo(Notification);