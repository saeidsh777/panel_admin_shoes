import React from 'react'

export default function ProfileInformation() {
  return (
      <div className="p-4">
          <h3 className="font-semibold">Information:</h3>
          <ul className='mt-8 flex flex-col gap-4'>
              <li>
                  <p className='font-semibold'>Email Address</p>
                  <p className='text-zinc-400'>Saeid@gmail.com</p>
              </li>
              <li>
                  <p className='font-semibold'>Phone Number</p>
                  <p className='text-zinc-400'>09126758409</p>
              </li>
              <li>
                  <p className='font-semibold'>Join</p>
                  <p className='text-zinc-400'>2024/5/8</p>
              </li>
              <li>
                  <p className='font-semibold'>Status</p>
                  <p className='text-zinc-400'>Active</p>
              </li>
          </ul>
      </div>
  );
}
