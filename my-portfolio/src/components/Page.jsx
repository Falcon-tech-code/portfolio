import React from 'react'
import ExampleDoc from '../assets/files/Hasan_Emre_Karabacak_CV.pdf'

function Page() {
    return (
        <section>
            <div className='flex justify-center items-center h-screen'>
                <div>
                    <h1 className='font-mono text-5xl font-bold text-center'>
                        I'm Hasan Emre Karabacak <br />
                        A Front-end Developer
                    </h1>
                    <a className='flex justify-center items-center mt-5' href={ExampleDoc} download>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Download Resume</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Page