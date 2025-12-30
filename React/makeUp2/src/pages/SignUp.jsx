import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const submitForm = (e) => {
    try {
      console.log("hello");
      if (password != password2) {
        console.error("password and new password is not same");
        return;
        
      }
      e.preventDefault();
      const data = {
        name,
        email2,
        phone,
        password,
      };
      console.log(data);
      clearForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  const clearForm = ()=>{
    setName("");
    setPhone("");
    setEmail2("");
    setPassword ("");
    setPassword2 ("");

  }


  return (
    <>
      <div>
        <main className="text-center bg-pink-200">
          <div>Welcome to Sugar Beauty</div>
          <div>Create your account here</div>

          <form onSubmit={submitForm}>
            <div className="bg-white ">
              <label htmlFor="name">Name</label>
              <input
                required
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border my-1 rounded mx-2"
                type="text"
              />
            </div>
            <div className="bg-white ">
              <label htmlFor="email2">email2</label>
              <input
                required
                name="email2"
                id="email2"
                className="border my-1 rounded mx-2"
                type="email2"
                value={email2}
                onChange={(event) => {
                  setEmail2(event.target.value);
                }}
              />
            </div>
            <div className="bg-white ">
              <label htmlFor="phone">Phone</label>
              <input
                required
                name="phone"
                id="phone"
                className="border my-1 rounded mx-2"
                type="number"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </div>
            <div className="bg-white ">
              <label htmlFor="password">Create Password</label>
              <input
                required
                name="password"
                id="password"
                className="border my-1 rounded mx-2"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="bg-white ">
              <label htmlFor="password2">Confirm Password</label>
              <input
                required
                name="password2"
                id="password2"
                className="border my-1 rounded mx-2"
                type="password"
                value={password2}
                onChange={(event) => setPassword2(event.target.value)}
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
