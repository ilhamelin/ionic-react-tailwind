import React from "react";
import { useHistory } from "react-router-dom";
import { BsBagFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { useInterruptor } from "../Context/InterruptorContext";

const Interruptor: React.FC = () => {
    const { isChecked, setChecked } = useInterruptor();
    const history = useHistory();
  
    const handleCheckboxChange = () => {
      const newValue = !isChecked;
      setChecked(newValue);
      if (newValue) {
        history.push("/mapa");
      } else {
        history.push("/home");
      }
    };
  
    return (
      <>
        <label className="themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1 bg-Gris_muy_claro">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              !isChecked ? "text-Blanco bg-Anochecer" : "text-body-color"
            }`}
          >
            <BsBagFill />
          </span>
          <span
            className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
              isChecked ? "text-Blanco bg-Anochecer" : "text-body-color"
            }`}
          >
            <TbTruckDelivery />
          </span>
        </label>
      </>
    );
  };
  
  export default Interruptor;