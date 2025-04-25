'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


const UpComing = () => {
    const projects = [
        {
          title: "Focus Mode",
          description:
            "A distraction-free interface that helps users concentrate on deep work by blocking notifications and minimizing UI clutter.",
          link: "#focus-mode",
        },
        {
          title: "Task Timer",
          description:
            "A Pomodoro-style timer that encourages productivity by breaking work into intervals and reminding users to take breaks.",
          link: "#task-timer",
        },
        {
          title: "Daily Planner",
          description:
            "A visual planner to organize your daily tasks, meetings, and personal goals — keeping your day on track and intentional.",
          link: "#daily-planner",
        },
        {
          title: "Quick Notes",
          description:
            "A lightweight note-taking tool that lets users jot down ideas instantly without switching tabs or losing focus.",
          link: "#quick-notes",
        },
        {
          title: "Productivity Stats",
          description:
            "Visual dashboards showing focus time, task completions, and personal productivity patterns based on usage.",
          link: "#productivity-stats",
        },
        {
          title: "Goal Tracker",
          description:
            "Set, manage, and track long-term goals with visual progress indicators and motivational nudges.",
          link: "#goal-tracker",
        },
      ];
      


  return (
    <div className="p-12 bg-gray-950 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide">Featured Techniques</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-normal text-white sm:text-4xl">Fasten Your Pace of Doing work</p>
        
            </div>
            <div className="m-10">

            <HoverEffect items={projects} />
            </div>
            <div className="mt-10 text-center">
            <Link href={'/courses'}
            className="px-4 py-2 rounded-lg border text-white border-neutral-600 font-bold bg-teal-600 hover:bg-teal-400 transition duration-200">View All Courses</Link>
        </div>
        </div>
    </div>
  )
}

export default UpComing