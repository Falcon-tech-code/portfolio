import React from 'react';

function App() {


    return (
        <div>
            <aside className='md:max-w-[300px] md:max-h-fit md:bg-gray-900 py-5 md:relative'>
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
            <section className='text-white'>
                <div>
                    <h1>About</h1>
                </div>
            </section>
        </div>
    )
}

export default App
