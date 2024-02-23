import React from "react";
import { request } from "../../config/request";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { saveState } from "../../config/storage";

export const Login = ({ close }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    request.post("/login", data).then((res) => {
      if (res.data) {
        saveState("user", res.data);
        navigate("/user");
        close();
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col mb-3">
        <input
          {...register("email")}
          className="border border-blue-400 p-3 outline-none"
          placeholder="email"
          type="email"
        />
      </div>
      <div className="flex flex-col mb-3">
        <input
          {...register("password")}
          className="border border-blue-400 p-3 outline-none"
          type="password"
          placeholder="Password"
        />
      </div>
      <button className="px-4 py-2 rounded-md text-white bg-blue-400" type="submit">
        Login
      </button>
    </form>
  );
};
