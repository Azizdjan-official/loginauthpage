import React from "react";
import { Modal } from "../../components/ui/modal";
import { loadState, saveState } from "../../config/storage";
import { useModal } from "../../hook/useModal";
import { Login } from "./login";
import { Link } from "react-router-dom";
import { Register } from './register';

export const Header = () => {
  const { isOpen, close, open } = useModal();
  const { isOpen: isOpen2, toggle } = useModal();
  const user = loadState("user");

  return (
      <div className="flex justify-between items-center bg-cyan-700 px-4 py-3">
          <h1 className='font-bold text-xl'>HOUSES of AZ CAPITAL</h1>
          <input className='w-[50%] rounded-md outline-none p-3' type="text" placeholder='Search here...' />      
      <Modal  isOpen={isOpen} close={close}>
        {!isOpen2 ? (
          <Register changeModal={toggle} closeModal={close} />
        ) : (
          <Login close={close} />
        )}

        <button className=" text-cyan-500 mt-6 " onClick={toggle}>
          {isOpen2 ? "Don't have an account ? Register here" : "Already Registered ? Login here"}
        </button>
      </Modal>
      {!user ? (
        <button onClick={open} className="mt-5 bg-cyan-300 px-4 py-2 rounded-md text-black font-bold">
          Kirish
        </button>
      ) : (
        <Link to="/user">Profile</Link>
      )}
      </div>
  );
};
