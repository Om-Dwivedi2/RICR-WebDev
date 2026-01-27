import React from "react";
import { useState } from "react";
import { useAuth } from "../../../context/authContext";

const EditProfileModal = ({ onClose }) => {
  const { user, setUser } = useAuth();

  const [formData, setFormData] = useState({
    fullName: user.fullName,
    mobileNumber: user.mobileNumber,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("From Submitted");

    try {
      const res = await api.put("/user/update", formData);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      // sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
    } catch (error) {
      console.log(error);
    } finally {
      onClose();
    }
  };

  return (
    <>
      {/* here height will be accorting to maximum and witdh is fixed */}
      {/* modal ka z-index will be maximum after header */}
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        <div className="bg-white p-2 pt-5  w-5xl max-h-[85vh] overflow-y-auto relative">
          <div>EditProfileModal</div>

          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" name="fullName">
                Full Name:{" "}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="" name="mobileNumber">
                Phone:{" "}
              </label>
            </div>
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              maxLength="10"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
            />

            <div className="flex gap-4 pt-8 border-t-2 border-gray-200">
              <button
                type="reset"
                className="flex-1 bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-gray-400 transition duration-300 transform hover:scale-105"
              >
                Clear Form
              </button>
              <button
                type="submit"
                className="flex-1 bg-linear-to-r from-indigo-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit
              </button>
            </div>
          </form>

          <button
            className="absolute right-0 top-0 bg-red-500 h-6 w-6 flex items-center justify-center text-white"
            onClick={() => onClose()}
          >
            {" "}
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
