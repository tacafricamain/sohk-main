/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Testimonials from '../components/newsletterr'

export default function Aboutus() {
  return (
    <div id='aboutus'>
      <div className="bg-gray-100 leading-normal tracking-normal">
    <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily: "Georgia,serif"}}>
            <div className="">
                <h1 className="font-bold  break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">A RADICAL APPROACH TO 21st CENTURY EDUCATION </h1>
                <p className="text-sm md:text-base font-normal text-gray-600">- Dr. JERRY AKUBO, CEO, TAC Africa. </p>
            </div>
            <div className="py-6 ">
            {`At its core, the School of Hard knocks curriculum is an innovative approach to education that's designed to equip students with the skills they'll need to tackle the challenges and opportunities of the 21st century. It's a radical departure from the traditional model of education that emphasises rote memorisation, standardised testing, and a one-size-fits-all approach to teaching and learning`}

            <p className="py-6 ">
            {`So what makes the School of Hardknocks different? For starters, it's characterised by a number of key features that set it apart from traditional schools:`}
            </p>

              <ol className='list-decimal'>
                <li className="py-2">
                Digital Learning: Think online classes, interactive apps, and educational games that use technology to enhance the learning experience.
                </li>
                <li className="py-2">
                Project-Based Learning: A teaching method that has students working on real-world projects to develop practical skills and knowledge.
                </li>
                <li className="py-2">
                Personalised Learning: An approach to education that considers each student`s unique strengths, weaknesses, interests, and learning style.
                </li>
                <li className="py-2">
                Global Learning: A focus on global citizenship, cultural awareness, and understanding of different perspectives.
                </li>
                <li className="py-2">
                STEAM Education: A curriculum that integrates science, technology, engineering, arts, and math to prepare students for careers in these fields.
                </li>
              </ol>


            <p className="py-6 " >
            At the School of Hardknocks, students are not just passive learners. They`re active participants in their own education. They`re encouraged to explore, experiment, and collaborate with their peers and teachers to develop the critical thinking, problem-solving, creativity, and communication skills that are essential for success in the modern world.
            </p>


            {/* <h2 className="font-bold  break-normal text-gray-900 pt-8 pb-2 text-xl md:text-2xl" ></h2> */}

            <p className="py-6 ">
            But here`s the best part: the School of Hard Knocks isn`t a rigid, one-size-fits-all model. It`s flexible and adaptable, and can be customized to meet the needs and goals of each individual school and community. Whether you`re in a small rural school or a large urban district, you can apply the principles of the School of Hard Knocks to create a learning environment that`s engaging, effective, and empowering for all students.
            </p>


            {/* <p className="py-6 ">

            </p>

            <h2 className="font-bold  break-normal text-gray-900 pt-8 pb-2 text-xl md:text-2xl" ></h2>

            <p className="py-6 ">

            </p> */}

        </div>
        </div>
    </div>
</div>
      {/* <Testimonials  /> */}
    </div>
  )
}
