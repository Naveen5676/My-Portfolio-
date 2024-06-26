import React from "react"
import coding from '../Assets/coding.svg'

export default function About(){
    return (
        <section id='about'>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi , I'm Naveen Wali.
                        <br className="hidden lg:inline-block"/>
                        I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Hardworking and passionate job seeker with strong organizational skills
                    eager to secure entry-level Frontend developer position. Ready to help
                    team achieve company goals.
                    </p>
                    <div>
                        <a href="#contact"
                           className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg ">
                            Work With Me
                        </a>
                        <a href='#projects'
                           className="ml-4 inline-flex text-grey-400 bg-grey-800 border-0 py-2 px-6 focus:outline-none hover:bg-grey-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div>
                    <img
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                    alt='image'
                    src={coding}/>
                </div>
            </div>
        </section>
      
    )
}