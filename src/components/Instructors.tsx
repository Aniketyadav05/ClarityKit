'use client'

import { AnimatedTooltip } from "./ui/animated-tooltip";
import timer from "../images/timer.jpeg"
import { WavyBackground } from "./ui/wavy-background";

const Instructors = () => {
    const people = [
        {
          id: 1,
          name: "John Doe",
          designation: "Software Engineer",
          image:
            timer,
        },
        {
          id: 2,
          name: "Robert Johnson",
          designation: "Product Manager",
          image:
            timer
        },
        {
          id: 3,
          name: "Jane Smith",
          designation: "Data Scientist",
          image:
            timer
        },
        {
          id: 4,
          name: "Emily Davis",
          designation: "UX Designer",
          image:
            timer,
        },
       
      ];
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet our instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your clarity journey</p>        
        <div className="flex flex-row items-center justify-center mt-20 w-full">
        <AnimatedTooltip  items={people}  />
        </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors