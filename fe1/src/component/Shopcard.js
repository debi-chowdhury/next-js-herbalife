import shop from "../../public/GettyImages-1314742668 3shop.png";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import data from "../../public/data/data.json";
import * as React from "react";

const ShopCard = () => {
  const [selectedLevel, setSelectedLevel] = useState(
    data.shop_panel_data[0].data
  );
  const [selectedOption, setSelectedOption] = useState(
    data.shop_panel_data[0].filed
  );

  const handleClick = (ev, index) => {
    setSelectedLevel(data.shop_panel_data[index].data);
    setSelectedOption(ev.target.innerText);
  };

  return (
    <>
      <div className="flow-root float-left ">
        {data.shop_panel_data.map((item, index) => {
          return (
            <button
              className={
                selectedOption === item.filed
                  ? "block p-4 pl-16 text-5xl font-bold  text-emerald-900 "
                  : "block p-4 pl-16 text-5xl font-bold text-green-600"
              }
              onClick={(ev) => handleClick(ev, index)}
            >
              {selectedOption === item.filed ? "-" + item.filed : item.filed}
            </button>
          );
        })}
      </div>

      <div className=" pl-64 inline-block w-1/3 ...">
        <div className="text-xl ... ">
          {selectedLevel &&
            selectedLevel.length !== 0 &&
            selectedLevel.map((item) => {
              return <div className="p-2 ">{item}</div>;
            })}
        </div>
      </div>
      <div className="inline-block pl-24 ...">
        <Image src={shop} />
      </div>
    </>
  );
};
export default ShopCard;
