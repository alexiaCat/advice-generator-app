import React, { useState, useEffect } from "react";
import { useFetchAdvice } from "./hook/useFetchAdvice";
import IconDice from "/images/icon-dice.svg";
import Divider from "/images/pattern-divider-desktop.svg";

export const Home = () => {
  const [dataApi, setDataApi] = useState([]);
  const [callAPI, setCallAPI] = useState(true);
  const [loading, error] = useFetchAdvice('https://api.adviceslip.com/advice', setDataApi, callAPI);

  const handleClick = () => {
    setCallAPI(true)
  }

  useEffect(() => {
    setCallAPI(false);
  }, [callAPI]);

  return (
    <div className="w-screen h-screen font-manrope text-[28px] bg-neutral-dark-blue text-primary-light-cyan flex justify-center items-center">
      <div className="h-auto w-[90%] md:w-[580px] bg-[#323a49] rounded-[15px] px-10">
        <h4 className="text-[14px] tracking-[3px] text-center text-primary-neon-green mt-[50px]">
          {loading ? "ADVICE..." : `ADVICE #${dataApi.slip?.id}`}
        </h4>
        <p className="text-center mt-[23px] leading-[38px]">
          {loading ? "Cargando..." : `"${dataApi.slip?.advice}"`}
        </p>
        <div className="flex justify-center">
           <img src={Divider} alt="Divider" className="mt-[50px]" />
        </div>
       
        <div className="flex flex-col items-center relative top-[30px] justify-center px-[48px]">

          <button
            className="rounded-full bg-primary-neon-green shadow-xl-primary-neon-green hover:shadow-primary-neon-green p-3 "
            onClick={handleClick}
          >
            <img
              src={IconDice}
              className="overflow-clip-margin-content-box overflow-clip-clip"
              alt="IconDice"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
