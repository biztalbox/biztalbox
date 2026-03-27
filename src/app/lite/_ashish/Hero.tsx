"use client" 

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import MyCanvas from "./MyCanvas"
import { Canvas } from "@react-three/fiber"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Hero = () => {

    // gsap.registerPlugin(useGSAP);
    // gsap.registerPlugin(ScrollTrigger)


    return (
        <div className="relative">
            <section id="section0" className="h-screen relative">
                <Canvas className="!fixed top-0 h-full w-full inset-0" camera={{ position: [-4, 303, 622], fov: 70 }}>
                    <MyCanvas />
                </Canvas>
               <div className="flex justify-btween">
                
               </div>
            </section>

            <section id="section1" className="h-screen bg-red-500 border-2 border-red-500"></section>
            <section id="section2" className="h-screen bg-orange-500 border-2 border-red-500"></section>
            <section id="section3" className="h-screen bg-blue-500 border-2 border-red-500"></section>
            <section id="section4" className="h-screen bg-green-500 border-2 border-red-500"></section>
        </div>
    )
}

export default Hero