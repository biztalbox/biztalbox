"use client";
import React from "react";
import Image from "next/image";
import Model3D from '../3d-model';

// award images
import a_1 from "@/assets/img/home-01/award/award-1.png";
import a_2 from "@/assets/img/home-01/award/award-2.png";
import a_3 from "@/assets/img/home-01/award/award-3.png";
import a_4 from "@/assets/img/home-01/award/award-4.png";
import a_5 from "@/assets/img/home-01/award/award-5.png";
import a_6 from "@/assets/img/home-01/award/award-6.png";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    modelPath: "/models/MILAN .obj",
    subtitle: "x2",
    title: "Business has only two functions- marketing and innovation.",
    Author: "Milan Kundera",
  },
  {
    id: 2,
    modelPath: "/models/TOM.obj",
    subtitle: "x3",
    title: "The best marketing doesn't feel like marketing.",
    Author: "Tom Fishburne",
  },
  {
    id: 3,
    modelPath: "/models/CHET.obj",
    subtitle: "x1",
    title: "Advertising brings in the customers, but it is your job to keep them buying from you.",
    Author: "Chet Holmes",
  },
  {
    id: 4,
    modelPath: "/models/JOHNATHAN.obj",
    subtitle: "x1",
    title: "As marketers, we should be changing the mantra from always be closing to always be helping.",
    Author: "Jonathan Lister",
  },
  {
    id: 5,
    modelPath: "/models/MATT CUTTS.obj",
    subtitle: "x2",
    title: "Think about what the user is going to type",
    Author: "Matt Cutts",
  },
  {
    id: 6,
    modelPath: "/models/PETER DUCKER.obj",
    subtitle: "x1",
    title: "The aim of marketing is to know and understand the customer so well the product or service fits him and sells itself.",
    Author: "Peter Drucker",
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({cls="pt-125 pb-125",abStyle=false}: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls} black-bg`}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation \">
                Our Thoughts
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Our Thoughts
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative" style={{ height: '500px' }}>
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
                style={{ width: '100%', height: '100%' }}
              >
                {award_data.map((item) => (
                  <Model3D
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    modelPath={item.modelPath || "/models/default.glb"}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 person_3d">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  <div className="tp-award-list-content-left d-flex align-items-end" style={{justifyContent: 'space-between', gap: '20px'}}>
                    <p className="text-white">{item.title}</p>
                    <span style={{whiteSpace: 'nowrap'}}>{item.Author}</span>
                  </div>
                  {/* <div className="tp-award-list-content-right">
                    <span>{item.Author}</span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardOne;
