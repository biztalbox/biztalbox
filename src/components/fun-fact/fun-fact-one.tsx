import React from "react";
import CounterItem from "../counter/counter-item";
import { Leaf } from "../svg";

const counter_data = [
  {
    id: 1,
    title: "PROJECTS COMPLETED",
    count: 2,
    text: "k+",
  },
  {
    id: 2,
    title: "YEARS OF EXPERIENCE",
    count: 7,
    text: "+",
  },
  {
    id: 3,
    title: "TEAM MEMBERS",
    count: 20,
    text: "+",
  },
  {
    id: 4,
    title: "Coffee Beans Roasted",
    count: "∞",
    text: "%",
  },
];
export default function FunFactOne() {
  return (
    <div className="ab-funfact-area pb-40 pt-90">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-4">
            <div className="ab-funfact-title-box">
              <span className="ab-inner-subtitle mb-25">
                <Leaf />
                Fun Facts
              </span>
              <h4 className="ab-inner-funfact-title tp_title_anim">
                Agency <br /> Snapshots
              </h4>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="ab-funfact-wrap">
              <div className="row">
                {counter_data.map((item) => (
                  <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="ab-funfact-item mb-90">
                      <span>
                        {item.id === 4 ? (
                          <i>{item.count}</i>
                        ) : (
                          <>
                            <CounterItem min={0} max={typeof item.count === 'number' ? item.count : 0} suffix={item.text} />
                          </>
                        )}
                      </span>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
