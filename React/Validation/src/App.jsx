import React from "react";
import { Toaster } from "react-hot-toast";

function App() {



  
  return (
    <>
      <Toaster />
      <form
        className="bg-white mx-auto w-[75%] my-10 p-10 rounded-2xl flex flex-col justify-center"
        
      >
        <header className="bg-yellow-400 text-center text-3xl rounded-md font-medium p-2">
          Coaching Institute Registration Form
        </header>

        <div className="relative border rounded-md p-6 my-10">
          <span className="text-blue-500 absolute left-10 -top-3.5 px-3 bg-white">
            Personal Information
          </span>

          <div className=" flex gap-5 my-4">
            <label htmlFor="name" className="w-[25%]">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>

          <div className=" flex gap-5 my-4">
            <label htmlFor="email" className=" w-[25%]">
              Email Address:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>

          <div className=" flex gap-5 my-4">
            <label htmlFor="number" className=" w-[25%]">
              Mobile Number:
            </label>
            <input
              type="number"
              id="number"
              name="number"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>

          <div className=" flex gap-5 my-4">
            <label htmlFor="DOB" className=" w-[25%]">
              Date of Birth:
            </label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="relative border rounded-md p-6 my-10">
          <span className="text-blue-500 absolute left-10 -top-3.5 px-3 bg-white">
            Academic Details
          </span>

          <div className=" flex gap-5 my-4">
            <label htmlFor="qualification" className="w-[25%]">
              Last Completed Qualification:
            </label>

            <select
              id="qualification"
              name="qualification"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            >
              <option selected disabled>
                --Select an option--
              </option>
              <option value="12">12th</option>
              <option value="11">11th</option>
              <option value="10">10th</option>
              <option value="9">9th</option>
            </select>
          </div>

          <div className=" flex gap-5 my-4">
            <label htmlFor="grade" className=" w-[25%]">
              Percentage/Grade:
            </label>
            <input
              type="number"
              id="grade"
              name="grade"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="relative border rounded-md p-6 my-10">
          <span className="text-blue-500 absolute left-10 -top-3.5 px-3 bg-white">
            Course Info
          </span>

          <div className=" flex gap-5 my-4">
            <label htmlFor="course" className="w-[25%]">
              Preferred Course:
            </label>

            <select
              id="course"
              name="course"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            >
              <option selected disabled>
                --Select an option--
              </option>
              <option value="JEE">IIT-JEE</option>
              <option value="NEET">NEET</option>
              <option value="CLAT">CLAT</option>
              <option value="CUET">CUET</option>
            </select>
          </div>

          <div className=" flex gap-5 my-4">
            <label htmlFor="batch" className=" w-[25%]">
              Batch Timing:
            </label>
            <input
              type="checkbox"
              id="batch"
              name="batch"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="relative border rounded-md p-6 my-10">
          <span className="text-blue-500 absolute left-10 -top-3.5 px-3 bg-white">
            Address
          </span>

          <div className=" flex gap-5 my-4">
            <label htmlFor="address" className="w-[25%]">
              Residential Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>

          <div className=" flex gap-5 my-4">
            <label htmlFor="city" className=" w-[25%]">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>

          <div className=" flex gap-5 my-4">
            <label htmlFor="pin" className=" w-[25%]">
              Pin:
            </label>
            <input
              type="number"
              id="pin"
              name="pin"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="relative border rounded-md p-6 my-10">
          <span className="text-blue-500 absolute left-10 -top-3.5 px-3 bg-white">
            Address
          </span>

          <div className=" flex gap-5 my-4">
            <label htmlFor="guardianName" className="w-[25%]">
              Guardian’s Full Name:
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>

          <div className=" flex gap-5 my-4">
            <label htmlFor="guardianNumber" className=" w-[25%]">
              Guardian’s Contact Number:
            </label>
            <input
              type="text"
              id="guardianNumber"
              name="guardianNumber"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            />
          </div>
        </div>

        <div className="relative border rounded-md p-6 my-10">
          <span className="text-blue-500 absolute left-10 -top-3.5 px-3 bg-white">
            Additional Info
          </span>

          <div className=" flex gap-5 my-4">
            <label htmlFor="course" className="w-[25%]">
              How did you hear about us?
            </label>

            <select
              id="course"
              name="course"
              className="border border-gray-400 rounded-md h-10 w-[75%] focus:outline-blue-500"
            >
              <option selected disabled>
                --Select an option--
              </option>

              <option value="SocialMedia">Social Media</option>
              <option value="Friends">Friends</option>
              <option value="College">College</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-[25%] mx-auto border  border-green-700 text-green-700 hover:bg-green-700 hover:text-white rounded py-1.5"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
