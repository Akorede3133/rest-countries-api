import React from 'react'
import { countryProp } from '../context/context'
const CountryCard = ({name, population, region, capital, flag}: countryProp) => {
  return (
    <section className='rounded-xl dark:bg-neutral-very-dark-blue-dark-bg'>
      <article className='h-[200px] w-full'>
        <img src={flag} alt=""  className='w-full object-cover h-full rounded-t-lg'/>
      </article>
      <article className=' shadow-lg w-full p-6 rounded-b-lg  dark:bg-neutral-dark-blue'>
        <h3 className='font-bold text-xl py-4'>{name}</h3>
        <section className='grid gap-2'>
        <p className='font-bold'>
          Population:
          <span className='font-normal pl-2'>{population.toLocaleString()}</span>
        </p>
        <p className='font-bold'>
          Region:
          <span className='font-normal pl-2'>{region}</span>
        </p>
        <p className='font-bold'>
          Capital:
          <span className='font-normal pl-2'>{capital}</span>
        </p>
        </section>
      </article>
    </section>
  )
}

export default CountryCard