import React from "react";
import CountryData from "../assets/CountryData.json";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { TbArrowsExchange } from "react-icons/tb";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");


  const swap = () =>{
    let temp = from;
    setFrom(to);
    setTo(temp);
  }

  const calculate = async () => {
    if (!to || !from || !fromAmount) {
      toast.error("Fill all details");
    }

    try {
      const response = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from
          .split(" ")[0]
          .toLowerCase()}.json`
      );

      const rate =
        response.data[from.split(" ")[0].toLowerCase()][
          to.split(" ")[0].toLowerCase()
        ];

      setToAmount(fromAmount * rate);
      
    } catch (error) {
      error.message;
    }
  };

  return (
    <>
      <div className="bg-blue-600 h-screen py-30">
        <div className="bg-white  mx-auto w-[55%] rounded-lg p-5">
          <div className="text-center font-semibold text-2xl pb-5">CURRENCY CONVERTER</div>

          <div className="flex flex-col gap-1 my-5">
            <label htmlFor="unit" className="text-amber-950 text-lg">Enter Amount:</label>
            <input
              type="number"
              name="unit"
              id="unit"
              className=" rounded-md h-12 bg-amber-50 shadow "
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 justify-center items-center">
            <div className="flex gap-2 border-2 rounded-lg px-3 bg-amber-50 shadow border-amber-100">
              <img
                src={`https://flagsapi.com/${from.split(" ")[1]}/flat/48.png`}
                alt=""
              />

              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className=" h-12 rounded-lg focus: outline-none  "
              >
                <option value="" disabled>
                  --Select Country--
                </option>
                {CountryData.map((Country, i) => (
                  <option
                    value={Country.currency_code + " " + Country.country_code}
                    key={i}
                  >
                    {Country.country_name}
                  </option>
                ))}
              </select>
            </div>

            <TbArrowsExchange className="text-5xl p-2 hover:bg-green-400 rounded-full active:text-white" onClick={swap} />

            <div className="flex gap-2 border-2 rounded-lg px-3 bg-amber-50 shadow border-amber-100">
              <img
                src={`https://flagsapi.com/${to.split(" ")[1]}/flat/48.png`}
                alt=""
              />
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className=" h-12 rounded-lg focus: outline-none  "
              >
                <option value="" disabled>
                  --Select the Country--
                </option>

                {CountryData.map((country, i) => (
                  <option
                    value={country.currency_code + " " + country.country_code}
                    key={i}
                  >
                    {country.country_name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          

          <div
            onClick={calculate}
            className="mx-auto w-[30%] text-center border rounded-md my-7 text-2xl pt-1.5 h-12 hover:bg-green-500 hover:text-white"
          >
            CALCULATE
          </div>

          <div className="flex justify-center">
            <label htmlFor="" className="text-xl">
            {toAmount ? fromAmount +" " +  from.split(" ")[0] + " = " + toAmount.toFixed(1) + " " + to.split(" ")[0] : "XXXX"}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
