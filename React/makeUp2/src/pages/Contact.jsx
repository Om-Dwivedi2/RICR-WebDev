import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // isse submit karte time data jo submit kiya ja raha hai vo link me dikhana band hon  jayega.

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );

      const data = {
        fullName,
        email,
        message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center text-xl">
        <h1>Contact US</h1>
      </div>

      <form
        className="p-5 text-center"
        onReset={handleClearForm}
        onSubmit={handleSubmitForm}
      >
        <div className="my-2">
          <label htmlFor="fullName" className="w-20%">
            Full Name:
          </label>
          <input
            required
            className="border text-fuchsia-700"
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Enter your Name"
          />
        </div>
        <div className="my-2">
          <label htmlFor="email" className="w-20%">
            Email:
          </label>
          <input
            required
            className="border "
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="my-2">
          <label htmlFor="email" className="w-20%">
            Email:
          </label>
          <input
            required
            className="border "
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="my-2">
          <label htmlFor="message" className="w-20%">
            Message
          </label>
          <textarea
            className="border "
            name="message"
            id=""
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div>
          <button type="reset" className=" border rounded mx-2 p-1">
            Clear
          </button>
          <button type="submit" className=" border rounded mx-2 p-1">
            {isLoading ? "Loading" : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
