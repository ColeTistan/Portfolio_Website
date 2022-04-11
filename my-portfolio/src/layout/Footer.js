import React from 'react'
import socialData from '../data'

function Footer() {
  return (
    <div>
      <footer className='bg-gray-200 text-gray-700 md:px-10 px-7 py-4 mt-8'>
        <div className='flex justify-center items-center'>
          {
            socialData.socialIcons.map((data, id) => {
              const Icon = data

              // Wrap icon around react router Link
              return (
                <Icon className='mx-5 text-3xl hover:text-sky-600 duration-300 cursor-pointer' key={id} />
              )
            })
          }
        </div>
        <div className='text-center text-md pt-4'>
          &copy; 2022 Cole Tistan: Copyright
        </div>
      </footer>
    </div>
  )
}

export default Footer