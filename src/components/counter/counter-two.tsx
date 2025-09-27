import React from "react";
import CounterItem from "./counter-item";

const counter_data = [
  {
    id: 1,
    title: "Experts",
    count: 20,
    suffix: "+",
  },
  {
    id: 2,
    title: "Projects",
    count: 5,
    suffix: "k+",
  },
  {
    id: 3,
    title: "Years in business",
    count: 8,
    suffix: "",
  }
];
export default function CounterTwo() {
  return (
    <div className="row gx-0">
      {counter_data.map((item) => (
        <div key={item.id} className="col-xl col-lg col-md col-sm-4 col-6">
          <div className="tp-studio-funfact-item text-start text-md-center">
            <h4 className="tp-studio-funfact-title">
              <CounterItem min={0} max={item.count} suffix={item.suffix} />
              {/* <span>{item.suffix}</span> */}
            </h4>
            <span>{item.title}</span>
          </div>
        </div>
      ))}
      <div className="col-xl col-lg col-md col-sm-4 col-6">
        <div className="tp-studio-funfact-item text-start text-md-center">
          <h4 className="tp-studio-funfact-title text-white"><i style={{fontSize: "120px",lineHeight: "0.1"}}>∞</i></h4>
          <span>Coffee Beans Roasted</span>
        </div>
      </div>
    </div>
  );
}
