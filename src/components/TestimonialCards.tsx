"use client"
import { cn } from "@/utils/cn";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const testimonials = [
    {
      quote:
        "ClarityKit completely changed how I organize my day. Focus Mode alone has doubled my productivity!",
      name: "Ananya Sharma",
      title: "Freelance Designer",
    },
    {
      quote:
        "The Task Timer keeps me disciplined without burning out. I finally found a tool that respects my workflow.",
      name: "Rahul Mehra",
      title: "Software Developer",
    },
    {
      quote:
        "I love the Daily Planner feature! My mornings feel so much lighter knowing I have a clear plan ahead.",
      name: "Sara Thomas",
      title: "Project Manager",
    },
    {
      quote:
        "Quick Notes is a game-changer. Whenever an idea pops up during meetings, I capture it instantly.",
      name: "Vikram Patel",
      title: "Marketing Strategist",
    },
    {
      quote:
        "ClarityKit’s Productivity Stats helped me realize I was most productive in the evenings — completely transformed my schedule!",
      name: "Neha Verma",
      title: "Content Writer",
    },
  ];
  
const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black  bg-white dark:bg-grid-white/[1.2] bg-grid-black/[0.5] relative overflow-hidden flex flex-col  items-center justify-center ">
       <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
       <h1 className="text-3xl font-bold text-center mb-8 z-10">What our Users say</h1>
       
       <div className="flex justify-center w-full overflow-hidden">
       <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
       </div>
       
    </div>
  )
}

export default TestimonialCards