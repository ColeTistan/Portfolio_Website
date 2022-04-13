import React from 'react'
import socialData from '../data'

function Footer() {
  return (
    <div>
      <footer className='bg-gray-200 text-gray-700 mt-8 p-1'>
        <div className='flex justify-center items-center p-3'>
          {
            socialData.socialIcons.map((data) => {
              const Icon = data.icon

              // Wrap icon around react router Link
              return (
                <a href={data.url} target='_blank' key={data.id}>
                  <Icon className='mx-5 text-3xl hover:text-gray-500 duration-300 cursor-pointer' />
                </a>
              )
            })
          }
        </div>
        <div className='text-center text-md p-2 border-t-2 border-gray-300 w-1/4 m-auto'>
          &copy; 2022 Cole Tistan: Copyright
        </div>
      </footer>
    </div>
  )
}

export default Footer