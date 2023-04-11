import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/context'
import { useParams, Link } from 'react-router-dom';
import { countryProp, languageProp, currencyProp } from '../context/context';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
const CountryDetail = () => {
  const [countries, setCountries] = useState<countryProp[]>([] as countryProp[])
  const [country, setCountry] = useState<countryProp[]>([] as countryProp[]);
  const {id} = useParams();
  const fetchData = async () => {
    const response = await fetch('../data.json');
    const data: countryProp[] = await response.json();
    setCountries(data)    
  }
  useEffect(() => {
    fetchData();
  }, [])  

  useEffect(() => {
    const data: countryProp[] = countries.filter((item: countryProp) => {
      return item.name === id;
    })
    setCountry(data);
  }, [countries])
  const info: countryProp = country[0]
  const langs: languageProp[] | undefined = info?.languages;
  const curr: currencyProp[] | undefined = info?.currencies;
  const borders: string[] | undefined = info?.borders;
  return (
    <section className='mt-10 w-[90%] mx-auto pb-12'>
      <Link to='/' className='dark:shadow-[2px_2px_4px_rgba(0,_0,_0,_0.3)_,-2px_-2px_4px_rgba(0,_0,_0,_0.3)] rounded-sm myShadow flex p-2 w-[100px] gap-2 items-center'>
        <KeyboardBackspaceOutlinedIcon />
        <p>Back</p>
      </Link>
      <article className='mt-10 md:grid gap-10 grid-cols-2'>
        <section className='h-[240px] md:h-[300px]'>
          <img src={info?.flag} alt="" className='h-full w-full object-cover' />
        </section>
        <section className='md:grid mt-5 grid-cols-2 md:items-start'>
          <ul className='grid gap-3 md:gap-1'>
            <li className='font-bold mb-5 text-2xl'>{info?.name}</li>
            <li className=' font-medium'>
              Native Name:
              <span className='font-thin pl-1'>{info?.nativeName}</span>
            </li>
            <li className=' font-medium'>
              Population:
              <span className='font-thin pl-1'>{info?.population.toLocaleString()}</span>
            </li>
            <li className=' font-medium'>
              Region:
              <span className='font-thin pl-1'>{info?.region}</span>
            </li>
            <li className=' font-medium'>
              Sub Region:
              <span className='font-thin pl-1'>{info?.subregion}</span>
            </li>
            <li className=' font-medium'>
              Capital:
              <span className='font-thin pl-1'>{info?.capital}</span>
            </li>
          </ul>
          <ul className='mt-12 md:mt-2 grid gap-3  md:gap-1'>
            <li className=' font-medium'>
              Top Level Domain:
              <span className='font-thin pl-1'>{info?.topLevelDomain}</span>
            </li>
            <li className=' font-medium'>
              Currencies:
              <span className='font-thin pl-1'>{ curr && curr[0].name}</span>
            </li>
            <li className=' font-medium'>
              Languages:
              <span className='font-thin pl-1'>
                {
                  langs && langs.map((lang: languageProp, index: number) => {
                    return `${lang.name} ${index < langs.length - 1 ? ',' : ""} `
                  })
                }
              </span>
            </li>
          </ul>
          <article className='md:flex gap-10 md:col-span-2 items-start mt-10'>
            <h3 className='font-medium text-xl'>Border Countries:</h3>
            <ul className='flex flex-wrap gap-2 mt-4 md:mt-0'>
              {
                borders && borders.map(item => {
                  return (
                      <li key={item} className='myShadow py-1 px-4 text-center'>{item}</li>
                  )
                })
              }
            </ul>
          </article>
        </section>
      </article>
    </section>
  )
}

export default CountryDetail