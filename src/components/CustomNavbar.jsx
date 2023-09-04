"use client";
import UserContext from "@/context/userContext";
import { logOut } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();
  console.log(context);

  async function doLogOut() {
    try {
      const result = await logOut();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("LogOut Error", {
        position: "top-center",
      });
    }
  }

  return (
    <nav className="bg-blue-600 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {context.user && (
            <>
              <li>
                <Link href={"/"} className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/add-task"} className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href={"/show-tasks"} className="hover:text-blue-200">
                  Show Tasks
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
          {context.user && (
            <>
              <li>
                <Link href={"#!"} className="hover:text-blue-200">
                  {context.user.name}
                </Link>
              </li>
              <li>
                <button onClick={doLogOut} className="hover:text-blue-200">
                  Logout
                </button>
              </li>
            </>
          )}
          {!context.user && (
            <>
              <li>
                <Link href="/login" className="hover:text-blue-200">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-blue-200">
                  SignUp
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
