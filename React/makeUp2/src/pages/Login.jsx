import React from "react";

const Login = () => {
  const [email3, setEmail3] = React.useState("");
  const [password3, setPassword3] = React.useState("");

  const signIn = (e) => {

    e.preventDefault();

    let data = {
      email3,
      password3
    }
    console.log(data);
    clearForm();
  };

  const clearForm = ()=>{
    setEmail3("");
    setPassword3 ("");
  }

  return (
    <>
      <main>
        <div>Login</div>
        <form onSubmit={signIn}>
          <div className="bg-white ">
            <label htmlFor="email3">email3</label>
            <input
              required
              name="email3"
              id="email3"
              className="border my-1 rounded mx-2"
              type="email"
              value={email3}
              onChange={(event) => {
                setEmail3(event.target.value);
              }}
            />
          </div>
          <div className="bg-white ">
            <label htmlFor="password3">Password3</label>
            <input
              required
              name="password3"
              id="password3"
              className="border my-1 rounded mx-2"
              type="password"
              value={password3}
              onChange={(event) => {
                setPassword3(event.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 rounded p-3 text-lg font-semibold "
          >
            Sign In
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
