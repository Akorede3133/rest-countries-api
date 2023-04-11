import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import { countryProp } from '../context/context'
import NoMatch from './NoMatch'
import Loading from './Loading'
const Countries = () => {  
  const {countries, loading, searching, setLoading, setSearching, setCountries} = useGlobalContext();
  const fetchData = async () => {
    setLoading(true);
    setSearching(false);
    const response = await fetch('./data.json');
    const data: countryProp[] = await response.json();
    setCountries(data) 
    setLoading(false);   
  }
  useEffect(()=> {
    fetchData();
  }, [])
  
  return (
    <main className='dark:bg-neutral-very-dark-blue-dark-bg w-[70%] py-4 md:w-[90%] mx-auto mt-4 grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-12'>
      {(loading && !searching) && <Loading />}
      { countries.length > 0 &&
        countries.map((country: countryProp, index) => {
          const {name, population, region, capital, flag, area} = country;
          return (
            <Link to={`/countrydetail/${name}`} key={index}>
              <CountryCard name={name} population={population} region={region} capital={capital} flag={flag} />
            </Link>
          )
        })
      }
      {(countries.length == 0 && searching) && <NoMatch />}
    </main>
  )
}

export default Countries