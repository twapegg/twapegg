"use client";

import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [full_name, setFullName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // show error toast

      toast.error("Invalid email address!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // post request to /api/newsletter
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message, full_name }),
    });

    setFullName("");
    setEmail("");
    setMessage("");

    // show success toast
    toast.success("Message sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-10 bg-grey/10 border rounded-3xl border-white/50 backdrop-filter backdrop-blur-[1.25px] px-12 py-16"
      >
        <h2 className="text-3xl font-bold text-white">Drop a line</h2>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="full_name"
            id="full_name"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-navy focus:outline-none focus:ring-0 focus:border-navy peer"
            placeholder=" "
            required
            onChange={(e) => setFullName(e.target.value)}
            value={full_name}
          />
          <label
            htmlFor="full_name"
            className="peer-focus:font-medium absolute text-sm bg-clip-text text-transparent bg-slate-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-navy peer-focus:dark:text-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-navy focus:outline-none focus:ring-0 focus:border-navy peer"
            placeholder=" "
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm bg-clip-text text-transparent bg-slate-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-navy peer-focus:dark:text-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="text"
            name="message"
            id="message"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-navy focus:outline-none focus:ring-0 focus:border-navy peer"
            placeholder=" "
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm bg-clip-text text-transparent bg-slate-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-navy peer-focus:dark:text-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message
          </label>
        </div>
        <button
          type="submit"
          className="bg-grey/10 border border-white/50 backdrop-filter backdrop-blur-[1.25px] rounded-3xl py-4 w-full text-lg text-white hover:border-navy hover:bg-navy/10 hover:text-navy hover:font-bold transition-all duration-500"
        >
          submit
        </button>
      </form>
    </>
  );
}
