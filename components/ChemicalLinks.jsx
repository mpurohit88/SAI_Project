import React from 'react'

const ChemicalLinks = () => {
  return (
    <section>
    <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-2">
      <div>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                  <a href="#" class="hover:underline flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                  Materials
              </a>
              </li>
          </ul>
      </div>
      <div>
          <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                  <a href="#" class="hover:underline flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              Energy</a>
              </li>
          </ul>
      </div>
      <div>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                  <a href="#" class="hover:underline flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              Chemicals
               </a>
              </li>
          </ul>
      </div>
    </div>  
</section>
  )
}

export default ChemicalLinks