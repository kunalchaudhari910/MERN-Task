import React from 'react'

const Spinner = () => {
  return (
    // <div className='animate-ping w-16 h-16 m-8 items-center rounded-full bg-sky-900'></div>
    <div class="flex justify-center">
  <span class="relative flex h-16 w-16">
    <span
      class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-900 opacity-75"
    ></span>
    <span
      class="relative inline-flex h-16 w-16 rounded-full bg-blue-500"
    ></span>
  </span>
</div>
  )
}

export default Spinner