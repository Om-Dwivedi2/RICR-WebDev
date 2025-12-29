import React, { useState } from "react";

const SignUp = () => {

    const [name, setName] = useState(""); 
    const [email2, setEmail2] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");




  return (
    <>
      <div>
        <main className="text-center bg-pink-200">
          <div>Welcome to Sugar Beauty</div>
          <div>Create your account here</div>

          <form>
            <div className="bg-white ">
              <label htmlFor="">Name</label>
              <input
                name="name"
                id="name"
                value={name}
                onChange={(e) =>(set)}

                className="border-1 my-1 rounded mx-2"
                type="text"
              />
            </div>
            <div className="bg-white ">
              <label htmlFor="email2">email</label>
              <input
                name="email2"
                id="email2"
                className="border-1 my-1 rounded mx-2"
                type="email"
              />
            </div>
            <div className="bg-white ">
              <label htmlFor="phone">Phone</label>
              <input
                name="phone"
                id="phone"
                className="border-1 my-1 rounded mx-2"
                type="number"
              />
            </div>
            <div className="bg-white ">
              <label htmlFor="password">Create Password</label>
              <input
                name="password"
                id="password"
                className="border-1 my-1 rounded mx-2"
                type="password"
              />
            </div>

            <div className="bg-white ">
              <label htmlFor="password2">Confirm Password</label>
              <input
                name="password2"
                id="password2"
                className="border-1 my-1 rounded mx-2"
                type="password"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 rounded p-3 text-lg font-semibold "
            >
              Sign Up
            </button>
            <div>Already have an account? </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default SignUp;
