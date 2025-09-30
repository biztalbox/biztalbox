import React from "react";
import Marquee from "react-fast-marquee";



export default function LineTextTwo({title}: {title: string}) {
  // marquee text
  const marquee_text = [
    " Every step designed. ",
"Every result delivered. "
    // title
  ];
  return (
    <div
      className="tp-line-text-wrap pb-30"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="tp-line-text-slide">
        <Marquee direction="left" speed={100} autoFill={true}>
          {marquee_text.map((text, index) => (
            <div key={index} className="tp-line-content mr-50">
              <span style={{textTransform: 'capitalize'}}>{text}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
