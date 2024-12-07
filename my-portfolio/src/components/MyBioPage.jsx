import React from 'react'
import cvPhoto from '../assets/cv_photo.jpeg'
import '../styles/MyBioPage.css'

function MyBioPage() {
    return (
        <section>
            <div className='bg-section mt-10'>
                {/* mybio section */}
                <div id='content-section' className='flex md:flex-row flex-col justify-center items-center md:items-start md:justify-around gap-16 z-10'>
                    <div>
                        <img className='md:w-[500px] md:h-[500px] w-[350px] h-[400px] rounded-lg shadow-2xl' src={cvPhoto} alt="cv_photo" />
                    </div>
                    <div className='md:w-[500px] w-[350px] shadow-2xl p-5 bg-white rounded-lg'>
                        <div>
                            <h2 className='flex font-sans text-4xl mb-10'>My Bio</h2>
                            <p className='font-mono font-thin text-gray-400 text-left md:text-justify'>I am constantly moving towards my career goal of leaving a significant mark in the world of technology. After discovering my passion for web development, I continued on this path. l have completed college and passion projects as well some work as a freelancer. I am a team player who is open-minded. l look forward to taking this passion into a fulltime role.</p>
                        </div>
                        <div className='mt-14 flex flex-col justify-center gap-2'>
                            <h4 className='font-sans text-xl'>HTML</h4>
                            <div className='md:w-[412px] h-[4px] bg-green-400 rounded-lg'>
                                <div>
                                    <p className='font-sans font-thin mt-2 text-sm'>100%</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 flex flex-col justify-center gap-2'>
                            <h4 className='font-sans text-xl'>CSS</h4>
                            <div className='md:w-[412px] h-[4px] bg-green-400 rounded-lg'>
                                <div>
                                    <p className='font-sans font-thin mt-2 text-sm'>100%</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 flex flex-col justify-center gap-2'>
                            <h4 className='font-sans text-xl'>Javascript</h4>
                            <div className='md:w-[412px] h-[4px] bg-green-400 rounded-lg'>
                                <div>
                                    <p className='font-sans font-thin mt-2 text-sm'>100%</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 flex flex-col justify-center gap-2'>
                            <h4 className='font-sans text-xl'>Tailwind CSS</h4>
                            <div className='md:w-[412px] h-[4px] bg-green-400 rounded-lg'>
                                <div>
                                    <p className='font-sans font-thin mt-2 text-sm'>100%</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 flex flex-col justify-center gap-2'>
                            <h4 className='font-sans text-xl'>React.js</h4>
                            <div className='md:w-[412px] h-[4px] bg-gray-400 rounded-lg'>
                                <div className='w-[280px] md:w-[330px] h-[4px] bg-green-400 absolute rounded-lg'>
                                    <p className='font-sans font-thin mt-2 text-sm'>80%</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 flex flex-col justify-center gap-2'>
                            <h4 className='font-sans text-xl'>Typescript</h4>
                            <div className='md:w-[412px] h-[4px] bg-gray-400 rounded-lg'>
                                <div className='w-[250px] h-[4px] bg-green-400 absolute rounded-lg'>
                                    <p className='font-sans font-thin mt-2 text-sm'>60%</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-14 flex flex-col justify-center gap-2 mb-10'>
                            <h4 className='font-sans text-xl'>Next.js</h4>
                            <div className='md:w-[412px] h-[4px] bg-gray-400 rounded-lg'>
                                <div className='w-[250px] h-[4px] bg-green-400 absolute rounded-lg'>
                                    <p className='font-sans font-thin mt-2 text-sm'>60%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MyBioPage