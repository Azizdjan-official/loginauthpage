import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { saveState } from "../../config/storage";

export const Register = ({ closeModal }) => {
  const { register, reset, handleSubmit } = useForm();
  const submit = (data) => {
    request.post("/register", data).then((res) => {
      if (res.data) {
        console.log(res.data);
        saveState("user", res.data);
        closeModal();
      }
    });
  };
  return (
    <form  onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col mb-3">
        <input
          {...register("name")}
          placeholder="Name"
          className="border border-blue-400 p-3 outline-none"
          type="text"
        />
      </div>
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
        Register
      </button>
    </form>
  );
};
