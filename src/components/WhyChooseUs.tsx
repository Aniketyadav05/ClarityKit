'use client'
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal"
import timer from "../images/timer.jpeg"
const content = [
    {
      title: "Focus Mode",
      description:
        "Minimize distractions with our built-in Focus Mode. It blocks notifications, dims unnecessary UI elements, and helps you concentrate on deep work sessions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--violet-500),var(--fuchsia-500))] text-white">
          Focus Mode
        </div>
      ),
    },
    {
      title: "Task Timer",
      description:
        "Use the Pomodoro-style task timer to break your work into focused intervals. Get reminded to take breaks and stay energized throughout the day.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src={timer} 
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="task timer"
          />
        </div>
      ),
    },
    {
      title: "Daily Planner",
      description:
        "Organize your day efficiently using our visual daily planner. Plan tasks, meetings, and breaks so your day flows smoothly and predictably.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--sky-500),var(--indigo-500))] text-white">
          Daily Planner
        </div>
      ),
    },
    {
      title: "Quick Notes",
      description:
        "Capture ideas instantly with Quick Notes. No more forgetting thoughts — jot them down in seconds and revisit them anytime.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--rose-500))] text-white">
          Quick Notes
        </div>
      ),
    },
    {
      title: "Productivity Stats",
      description:
        "Track your progress with visual stats. Know how much you worked, your focus score, and identify your most productive hours.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] text-white">
          Productivity Stats
        </div>
      ),
    },
    {
        title: "",
        description: "",
        content:(
            <></>
        )
    },
  ];
  

const WhyChooseUs = () => {
  return (
    <div >
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs