import React from 'react';
import { RxTriangleRight } from "react-icons/rx";
import { FaCircle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function App() {


    return (
        <div className='md:flex'>
            <aside className='md:fixed md:flex md:flex-col md:w-[300px] md:h-screen md:bg-gray-900 py-5'>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <div className='flex justify-center items-center'>
                        <img className='transition duration-300 ease-in-out w-[200px] hover:shadow-lg shadow-amber-200 hover:scale-110 h-[200px] rounded-full border-3 border-amber-400' src="../src/assets/cv_photo.jpg" alt="cv_photo" />
                    </div>
                    <div className='text-amber-400 flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold'>Hasan Emre Karabacak</h1>
                        <h2 className='text-xl font-thin text-amber-100'>Software Developer</h2>
                    </div>
                </div>
                <nav className='flex flex-col text-2xl font-bold text-amber-400 gap-6 rounded-xl p-4'>
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#about">
                        About
                        <div className='bg-amber-200 h-[2px] w-0 group-hover:w-full hover:bg-gray-200 transition-all duration-500'>
                        </div>
                    </a>
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#experience">
                        Experience
                        <div className='bg-amber-200 h-[2px] w-0 group-hover:w-full hover:bg-gray-200 transition-all duration-500'>
                        </div>
                    </a>
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#projects">
                        Projects
                        <div className='bg-amber-200 h-[2px] w-0 group-hover:w-full hover:bg-gray-200 transition-all duration-500'>
                        </div>
                    </a>
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#education">
                        Education
                        <div className='bg-amber-200 h-[2px] w-0 group-hover:w-full hover:bg-gray-200 transition-all duration-500'>
                        </div>
                    </a>
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#languages">
                        Languages
                        <div className='bg-amber-200 h-[2px] w-0 group-hover:w-full hover:bg-gray-200 transition-all duration-500'>
                        </div>
                    </a>
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#tech_skills">
                        Tech Skills
                        <div className='bg-amber-200 h-[2px] w-0 group-hover:w-full hover:bg-gray-200 transition-all duration-500'>
                        </div>
                    </a>
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#contact">
                        Contact
                        <div className='bg-amber-200 h-[2px] w-0 group-hover:w-full hover:bg-gray-200 transition-all duration-500'>
                        </div>
                    </a>
                </nav>
            </aside>
            <section className='md:flex-1 text-white ml-8 md:ml-80 mt-8 mr-8 mb-8'>
                <div id='about' className='flex flex-col gap-6'>
                    <h1 className='text-amber-400 text-3xl font-bold'>About</h1>
                    <div className='bg-gray-900 p-4 rounded-2xl'>
                        <h3 className='text-amber-200'>Software Developer</h3>
                    </div>
                    <div className='bg-gray-900 p-4 rounded-2xl'>
                        <h3 className='text-amber-200'>1 Years Experience Typescript | React.js, React Native | Node.js</h3>
                    </div>
                    <p className='text-gray-400'>I am continuously progressing toward my career goal of making a significant impact in the tech industry. After discovering my passion for web development, I decided to pursue this path and have been dedicated to improving my skills ever since. In addition to university and personal projects, I have successfully completed various freelance projects. I am an open-minded team player who thrives in collaborative environments. I am eager to turn this passion into a full-time opportunity and contribute to a dynamic team.</p>
                </div>
                <div id='experience' className='flex flex-col gap-6 mt-6'>
                    <h1 className='text-amber-400 text-3xl font-bold'>Experience</h1>
                    <div className='flex flex-row gap-3'>
                        <FaCircle className='mt-5 text-xl' />
                        <div className='bg-gray-900 p-4 rounded-2xl'>
                            <h2 className='text-amber-400 font-bold text-xl'>Freelance Frontend Developer</h2>
                            <h3 className='text-amber-200 font-thin text-lg'>DesignStorm Software</h3>
                            <h4 className='text-gray-400 text-md font-thin'>Dec 2024 - Present</h4>
                            <h4 className='text-gray-400 text-md font-thin'>Ankara, Türkiye</h4>
                            <div className='flex flex-col gap-6'>
                                <p className='text-gray-400 text-lg'>Design Storm Software is an organization where I can work as a freelancer and entrepreneur. The company provides web development, web design, SEO optimization, and Google advertising services to its clients. As a freelance team, we deliver these services using modern web development technologies.</p>
                                <div className='flex flex-row'>
                                    <RxTriangleRight className='mt-2' />
                                    <p className='text-gray-400 text-lg'>Google Advertising</p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>Web Design</p>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>Web Development</p>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>SEO optimization</p>
                            </div>
                            <div className='mt-2 flex flex-row'>
                                <RxTriangleRight className='mt-1' />
                                <a target='_blank' href="https://designstormyazilim.com/">View DesignStorm Web Site</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <FaCircle className='mt-5 text-2xl' />
                        <div className='bg-gray-900 p-4 rounded-2xl'>
                            <h2 className='text-amber-400 font-bold text-xl'>Intern Frontend Developer</h2>
                            <h3 className='text-amber-200 font-thin text-lg'>Srce Tech</h3>
                            <h4 className='text-gray-400 text-md font-thin'>July 2024 - Sept 2024</h4>
                            <h4 className='text-gray-400 text-md font-thin'>Ankara, Türkiye</h4>
                            <div className='flex flex-col gap-6'>
                                <p className='text-gray-400 text-lg'>During my internship, I worked on the e12 education platform’s landing page, education page, and upcoming projects. I successfully developed two landing pages in alignment with the UI/UX design team’s guidelines.I utilized HTML,CSS, JS, TailwindCSS, React, and TypeScript. To further enhance my React development skills, I also completed a Hepsiburada clone project.</p>
                                <div className='flex flex-row'>
                                    <RxTriangleRight className='mt-2' />
                                    <p className='text-gray-400 text-lg'>React.js</p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>Javascript - Typescript</p>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>TailwindCSS</p>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>Web Development</p>
                            </div>
                            <div className='flex flex-col mt-2'>
                                <div className='flex flex-row'>
                                    <RxTriangleRight className='mt-1' />
                                    <a target='_blank' href="https://www.e12.com.tr/">View e12 landing page</a>
                                </div>
                                <div className='flex flex-row'>
                                    <RxTriangleRight className='mt-1' />
                                    <a target='_blank' href="https://hepsiburadaclone.netlify.app/">View Hepsiburada clone project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <FaCircle className='mt-5 text-xl' />
                        <div className='bg-gray-900 p-4 rounded-2xl'>
                            <h2 className='text-amber-400 font-bold text-xl'>Frontend Developer</h2>
                            <h3 className='text-amber-200 font-thin text-lg'>Minstrel Art Center</h3>
                            <h4 className='text-gray-400 text-md font-thin'>June 2024 - July 2024</h4>
                            <h4 className='text-gray-400 text-md font-thin'>Ankara, Türkiye</h4>
                            <div className='flex flex-col gap-6'>
                                <p className='text-gray-400 text-lg'>Minstrel Art Center is an institution that provides music education. I developed the institution’s website using HTML, CSS, JS, React, TailwindCSS and TypeScript. The website was deployed using Hostinger’s hosting services. I completed SEO optimizations and continue working on Google Ads advertising.</p>
                                <div className='flex flex-row'>
                                    <RxTriangleRight className='mt-2' />
                                    <p className='text-gray-400 text-lg'>React.js</p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>Javascript - Typescript</p>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>TailwindCSS</p>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>Web Development</p>
                            </div>
                            <div className='flex flex-row'>
                                <RxTriangleRight className='mt-2' />
                                <p className='text-gray-400 text-lg'>SEO Optimization</p>
                            </div>
                            <div className='mt-2 flex flex-row'>
                                <RxTriangleRight className='mt-1' />
                                <a target='_blank' href="https://minstrelsanat.com/">View Minstrel Art Center Web Site</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='projects' className='flex flex-col gap-6 mt-6'>
                    
                </div>
                <div id='education' className='flex flex-col gap-6 mt-6'>
                    <h1 className='text-amber-400 text-3xl font-bold'>Education</h1>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>Kütahya Dumlupınar University</h2>
                        <h3 className='text-amber-200 text-lg font-thin'>Computer Engineering</h3>
                        <p className='text-gray-400 text-md'>2019 - 2025</p>
                        <p className='text-gray-400 text-md'>GPA : 2.76</p>
                    </div>
                </div>
                <div id='languages' className='flex flex-col gap-6 mt-6'>
                    <h1 className='text-amber-400 text-3xl font-bold'>Languages</h1>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl gap-1'>
                        <h2 className='text-amber-400 font-bold text-xl'>English</h2>
                        <h3 className='text-amber-200 font-thin text-md'>B1 Level</h3>
                    </div>
                </div>
                <div id='tech_skills' className='flex flex-col gap-6 mt-6'>
                    <h1 className='text-amber-400 text-3xl font-bold'>Tech Skills</h1>
                    <div className='md:flex md:flex-row md:flex-wrap gap-5 flex flex-col flex-nowrap'>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl font-bold'>Typescript</h2>
                        </div>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl rounded-2xl font-bold'>Redux</h2>
                        </div>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl rounded-2xl font-bold'>React.js</h2>
                        </div>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl rounded-2xl font-bold'>TailwindCSS</h2>
                        </div>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl rounded-2xl font-bold'>Javascript</h2>
                        </div>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl rounded-2xl font-bold'>Bootstrap</h2>
                        </div>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl rounded-2xl font-bold'>SEO Optimization</h2>
                        </div>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl rounded-2xl font-bold'>Google Advertising</h2>
                        </div>
                        <div className='bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <h2 className='text-amber-400 text-xl rounded-2xl font-bold'>Web Development</h2>
                        </div>
                    </div>
                </div>
                <div id='contact' className='flex flex-col mt-6 gap-6'>
                    <h1 className='text-amber-400 text-3xl font-bold'>Contact</h1>
                    <div className='md:flex md:flex-row md:flex-wrap gap-5 flex flex-col flex-nowrap'>
                        <div className='md:flex md:flex-row md:flex-wrap gap-5 flex flex-col flex-nowrap'>
                            <div className='flex flex-row gap-2 bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                                <IoMdMail className='mt-[7px] text-amber-200' />
                                <h2 className='text-amber-200 text-lg rounded-2xl font-thin'>hsn.dev@hotmail.com</h2>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <FaPhoneAlt className='mt-[7px] text-amber-200' />
                            <h2 className='text-amber-200 text-lg rounded-2xl font-thin'>(+90) 538 092 92 17</h2>
                        </div>

                        <div className='md:flex md:flex-row md:flex-wrap gap-5 flex flex-col flex-nowrap'>
                            <a target='_blank' href='https://www.linkedin.com/in/hasan-emre-karabacak-10155522a/' className='flex flex-row gap-3 bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                                <FaLinkedin className='mt-[7px] text-amber-200' />
                                <a target='_blank' href='https://www.linkedin.com/in/hasan-emre-karabacak-10155522a/' className='text-amber-200 text-lg rounded-2xl font-thin'>LinkedIn</a>
                            </a>
                            <a target='_blank' href='https://github.com/Falcon-tech-code' className='flex flex-row gap-3 bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                                <FaGithub className='mt-[7px] text-amber-200' />
                                <a target='_blank' href='https://github.com/Falcon-tech-code' className='text-amber-200 text-lg rounded-2xl font-thin'>Github</a>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App
