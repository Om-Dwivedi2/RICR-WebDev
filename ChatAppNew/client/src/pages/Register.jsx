import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../config/Api";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email,
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-base-200 flex items-center px-4">
        <div className="max-w-xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-base-content">
              Registration
            </h1>
            <p className="text-sm text-base-content/70">
              You are 1 step away to stop your Cavings
            </p>
          </div>

          {/* Form Container */}
          <div className="card bg-base-100 shadow">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="card-body gap-4"
            >
              {/* Personal Information */}
              <div>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="input input-bordered w-full disabled:cursor-not-allowed"
                    />
                    {validationError.fullName && (
                      <span className="text-xs text-error">
                        {validationError.fullName}
                      </span>
                    )}
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="input input-bordered w-full disabled:cursor-not-allowed"
                  />

                  <input
                    type="tel" 
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="input input-bordered w-full disabled:cursor-not-allowed"
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Create Password"
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="input input-bordered w-full disabled:cursor-not-allowed"
                  />

                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="input input-bordered w-full disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4 border-t border-base-300">
                <button
                  type="reset"
                  disabled={isLoading}
                  className="btn flex-1 disabled:cursor-not-allowed"
                >
                  Clear Form
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary flex-1 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting" : "Submit"}
                </button>
              </div>
            </form>
          </div>

          {/* Footer Note */}
          <p className="text-center text-xs text-base-content/60 mt-4">
            All fields marked are mandatory. We respect your privacy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
