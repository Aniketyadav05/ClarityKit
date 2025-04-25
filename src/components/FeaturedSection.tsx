'use client'
import courseData from "../data/course_data.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
        id: number,
        title: string,
        slug:  string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

const FeaturedSection = () => {
  const featuredCourses = courseData.courses.filter((course:Course) =>course.isFeatured)
  return (
    <div className="py-12 bg-gray-950">
        <div>
          <div className="text-center">
            <h1 className="text-base text-teal-600 font-semibold tracking-wide">Featured Courses</h1>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-normal text-white sm:text-4xl">Learn with the Best</p>
          </div>
        </div>
        <div className="mt-10 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
                  {featuredCourses.slice(0,6).map((course:Course) =>(
                      <div key={course.id} className="flex justify-center ">
                        <BackgroundGradient 
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                          <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow cursor-pointer ">
                            <p className="text-lg sm:text-xl text-black mt-4 mv-2 dark:text-teal-400 font-bold">{course.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow my-4 font-semibold">{course.description}</p>
                            <Link href={`/courses/${course.slug}`} className="px-4 py-2 rounded-lg border text-white border-neutral-600 font-bold bg-teal-600 hover:bg-teal-400 transition duration-200">Learn More</Link>
                          </div>
                        </BackgroundGradient>
                      </div>
                    ))
                  }
              </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={'/courses'}
            className="px-4 py-2 rounded-lg border text-white border-neutral-600 font-bold bg-teal-600 hover:bg-teal-400 transition duration-200">View All Courses</Link>
        </div>
    </div>
  )
}

export default FeaturedSection