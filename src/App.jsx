import React from 'react';
import { RxTriangleRight } from "react-icons/rx";
import { FaCircle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaChess } from "react-icons/fa";
import { GiGrandPiano } from "react-icons/gi";
import { BiCycling } from "react-icons/bi";
function App() {


    return (
        <div className='md:flex'>
            <aside className='md:fixed md:flex md:flex-col md:w-[300px] md:h-screen md:bg-gray-900 py-5'>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <div className='flex justify-center items-center'>
                        <img className='transition duration-300 ease-in-out w-[200px] hover:shadow-lg shadow-amber-200 hover:scale-110 h-[200px] rounded-full border-3 border-amber-400' src="/images/cv_photo.jpg" alt="cv_photo" />
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
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#blog">
                        Blog
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
                    <a className='p-2 px-4 group hover:bg-pink-800 rounded-xl transition duration-500' href="#hobbies">
                        Hobbies
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
                        <h3 className='text-amber-200'>1 Years Experience Typescript | React.js | React Native</h3>
                    </div>
                    <div className='bg-gray-900 p-4 rounded-2xl'>
                        <h3 className='text-amber-200'>4+ Projects | 70+ Github Commits | 150+ Hours Coding</h3>
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
                    <h1 className='text-amber-400 text-3xl font-bold'>Projects</h1>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>Easy Recipe</h2>
                        <h3 className='text-amber-200 text-lg font-thin'>Modern Recipe Discover Platform</h3>
                        <p className='text-gray-400 text-md'>Mar 2025 - Mar 2025</p>
                        <p className='text-gray-400 text-md'> Easy Recipe! A modern and responsive web application designed to help users discover, save, and explore a vast collection of recipes from around the world. Built with React.js, Redux Toolkit, Tailwind CSS, Framer Motion, and optimized for performance and user experience.</p>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>React.js</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Redux Toolkit</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>TailwindCSS</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Framer Motion</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Vite</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Git</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://easyrecipebook.netlify.app/">View Easy Recipe Demo</a>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://github.com/Falcon-tech-code/EasyRecipe">View Easy Recipe Github</a>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <img src="/images/easy_recipe.png" alt="easy_recipe" />
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>Filmflix+</h2>
                        <h3 className='text-amber-200 text-lg font-thin'>Modern Movie Discover Platform</h3>
                        <p className='text-gray-400 text-md'>Mar 2025 - Mar 2025</p>
                        <p className='text-gray-400 text-md'> I’ve built a movie favorite saving and tracking website using React.js, Fetch API, and LocalStorage. This project allows users to search for movies, add them to their favorites, and manage their list effortlessly.</p>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>React.js</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Fetch Api</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Local Storage</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>TailwindCSS</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Vite</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Git</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://filmflixplus.netlify.app/">View Filmflix+ Demo</a>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://github.com/Falcon-tech-code/filmflixplus">View Filmflix+ Github</a>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <img src="/images/filmflixplus.png" alt="filmflixplus" />
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>Iphone 15 Pro Website Clone</h2>
                        <h3 className='text-amber-200 text-lg font-thin'>Iphone 15 Pro Page</h3>
                        <p className='text-gray-400 text-md'>Mar 2025 - Mar 2025</p>
                        <p className='text-gray-400 text-md'> I’ve created a clone of Apple’s iPhone 15 Pro website using React.js and TailwindCSS. This project highlights the use of GSAP animations and Three.js to showcase the iPhone 15 Pro models in various colors and sizes, with a focus on dynamic 3D rendering and seamless user experience.</p>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>React.js</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Three.js</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>React Three Fiber</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>React Three Drei</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>GSAP</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Vite</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>TailwindCSS</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://iphone15prowebsitee.netlify.app/">View Iphone 15 Pro Page Demo</a>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://github.com/Falcon-tech-code/apple_website">View Iphone 15 Pro Page Github</a>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <img src="/images/iphone15pro.png" alt="iphone15pro" />
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>Hepsiburada E-commerce clone</h2>
                        <h3 className='text-amber-200 text-lg font-thin'>Hepsiburada E-commerce page</h3>
                        <p className='text-gray-400 text-md'>Mar 2025 - Mar 2025</p>
                        <p className='text-gray-400 text-md'>This is a project that includes placing products purchased with fakestoreapi, which clones the hepsiburada e-commerce page, on the page and including the detail pages of these products to add to cart features. I created this project to improve my react knowledge during my internship at SrcTech</p>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>React.js</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>TailwindCSS</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Redux Toolkit</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Axios</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Vite</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>Git</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://hepsiburadaclone.netlify.app/">View Hepsiburada Clone Page Demo</a>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://github.com/Falcon-tech-code/e-commerce">View Hepsiburada Clone Page Github</a>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <img src="/images/hepsiburadaclone.png" alt="hepsiburadaclone" />
                        </div>
                    </div>
                </div>
                <div id='blog' className='flex flex-col gap-6 mt-6'>
                    <h1 className='text-amber-400 text-3xl font-bold'>Blog</h1>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>
                            Keep Your Private Key Safe, Don't Let the World Know: .env, API Key, and Netlify Security</h2>
                        <p className='text-gray-400 text-md'>Mar 2025 - Mar 2025</p>
                        <p className='text-gray-400 text-md'>Storing API keys in .env files across your projects is the first step to managing them securely, but if these files are accidentally uploaded to open platforms like GitHub, the keys can be compromised by malicious actors.</p>
                        <p className='text-gray-400 text-md'>In this article;</p>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>How .env protectors work,</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                Why you should not use API keys directly in the frontend,</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>How environmental variables are defined on platforms like Netlify,</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                How to clean sensitive data from Git history (e.g. with git filter-branch, BFG Repo-Cleaner),</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                And in general, I explained in detail the best practices on "security in frontend projects".</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://medium.com/@hsn.dev/gizli-anahtar%C4%B1n%C4%B1-sakla-d%C3%BCnya-duymas%C4%B1n-env-api-key-ve-netlify-g%C3%BCvenli%C4%9Fi-d1bba2eb17dc">Read More...</a>
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>
                            Creating Impressive Animations with GSAP: A Beginner's Guide</h2>
                        <p className='text-gray-400 text-md'>Mar 2025 - Mar 2025</p>
                        <p className='text-gray-400 text-md'>Animation is one of the most powerful tools that takes user experience to the next level. GSAP (GreenSock Animation Platform) is a JavaScript library that offers you professional and flexible solutions in this regard.</p>
                        <p className='text-gray-400 text-md'>In this article;</p>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>What is GSAP and why should you use it?</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                Basic syntax and animation definitions (e.g. gsap.to, gsap.from, timeline),</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                Using ScrollTrigger for scroll-based animations,</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                How you can add movement to your design with small but impressive micro animation examples,</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                And I explained the tricks of creating performance-friendly animations.</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://medium.com/@hsn.dev/gsap-ile-etkileyici-animasyonlar-olu%C5%9Fturma-ba%C5%9Flang%C4%B1%C3%A7-rehberi-1c41ee1e8b06">Read More...</a>
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>
                            Diving Deep into React’s useEffect Hook</h2>
                        <p className='text-gray-400 text-md'>Mar 2025 - Mar 2025</p>
                        <p className='text-gray-400 text-md'>Managing side effects in React components starts with a solid understanding of the useEffect hook. However, for many developers especially beginners it can be a bit tricky to fully grasp.</p>
                        <p className='text-gray-400 text-md'>In this article;</p>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>What useEffect is and when it runs</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                How to properly use the dependency array</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                Common mistakes that lead to infinite re-renders</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                The purpose of the cleanup function and when to use it</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                Practical tips for using useEffect effectively in real-world projects</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://medium.com/@hsn.dev/reacttaki-useeffect-hook-unun-derinliklerine-i%CC%87niyoruz-2d7daaf02d77">Read More...</a>
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-900 p-4 rounded-2xl'>
                        <h2 className='text-amber-400 text-xl font-bold'>
                            Asynchronous Programming in JavaScript: Callbacks, Promises & Async/Await</h2>
                        <p className='text-gray-400 text-md'>Mar 2025 - Mar 2025</p>
                        <p className='text-gray-400 text-md'>JavaScript is single-threaded, yet it handles asynchronous tasks remarkably well—thanks to callbacks, promises, and async/await. Understanding these tools is key to writing efficient, non-blocking code.</p>
                        <p className='text-gray-400 text-md'>In this article;</p>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>What asynchronous programming means in JavaScript</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                How callbacks work and their limitations (hello, callback hell!)</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                The evolution to promises and how they simplify flow control</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                The modern async/await syntax and how it makes async code look synchronous</p>
                        </div>
                        <div className='flex flex-row'>
                            <RxTriangleRight className='mt-2' />
                            <p className='text-gray-400 text-lg'>
                                Real-world examples to help you apply each concept with confidence</p>
                        </div>
                        <div className='mt-2 flex flex-row'>
                            <RxTriangleRight className='mt-1' />
                            <a target='_blank' href="https://medium.com/@hsn.dev/javascriptte-asenkron-programlama-callbacks-promises-ve-async-await-b1a851e0deb2">Read More...</a>
                        </div>
                    </div>
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
                <div id='hobbies' className='flex flex-col mt-6 gap-6'>
                    <h1 className='text-amber-400 text-3xl font-bold'>Hobbies</h1>
                    <div className='md:flex md:flex-row md:flex-wrap gap-5 flex flex-col flex-nowrap'>
                        <div className='md:flex md:flex-row md:flex-wrap gap-5 flex flex-col flex-nowrap'>
                            <div className='flex flex-row gap-2 bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                                <FaChess className='mt-[7px] text-amber-200' />
                                <h2 className='text-amber-200 text-lg rounded-2xl font-thin'>Online Chess Tournaments</h2>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <GiGrandPiano className='mt-[7px] text-amber-200' />
                            <h2 className='text-amber-200 text-lg rounded-2xl font-thin'>Hobby Orchestra Pianist</h2>
                        </div>
                        <div className='flex flex-row gap-2 bg-gray-900 p-4 rounded-2xl hover:scale-105 transition duration-300 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-400 sm:w-full md:w-[400px] lg:w-[300px] xl:w-[200px] 2xl:w-[200px]'>
                            <BiCycling className='mt-[7px] text-amber-200' />
                            <h2 className='text-amber-200 text-lg rounded-2xl font-thin'>
                                Group Bike Rides</h2>
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
