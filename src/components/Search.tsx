import React, { useEffect, useState } from 'react'
import continentsData from '../../utils/continents';
import { countryProp, useGlobalContext } from '../context/context';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const Search = () => {
  const {countries, setCountries, text, setText, setSearching} = useGlobalContext();
  const [tempData, setTempData] = useState<countryProp[]>([] as countryProp[]);
  const [showDropDown, setShowDropown] = useState<boolean>(false)
  // const [text, setText] = useState<string>('');
  const [selectedContinent, setSelectedContinent] = useState<string>('Filter by Region');
  const selectContinent = (name: string) => {
    setSelectedContinent(name);
    setShowDropown(false);
  }
  const fetchData = async () => {
    const response = await fetch('../../utils/data.json');
    const data: countryProp[] = await response.json();
    setTempData(data)    
  }
  useEffect(()=> {
    fetchData();
  }, [])
  useEffect(()=> {
    const data = tempData.filter((item: countryProp) => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    })
    setCountries(data);
    setSearching(true);
  }, [text])  
  useEffect(() => {
    const data = tempData.filter((item: countryProp) => {      
      return item.region.toLowerCase() === selectedContinent.toLowerCase();
    })
    setCountries(data); 
  }, [selectedContinent])
  
  return (
    <section className=' dark:bg-neutral-very-dark-blue-dark-bg md:mt-10 mt-4 w-[90%] mx-auto md:flex justify-between items-center'>
      <form action="" className='  dark:bg-neutral-dark-blue md:self-start flex gap-5 md:py-3 p-4 myShadow  rounded-md md:w-[40%]'>
        <SearchOutlinedIcon className='mt-1 ' />
        <input onChange={(e)=> setText(e.target.value)} type="text" value={text} placeholder='Search for a country...' className='  dark:bg-neutral-dark-blue px-2 outline-none w-full' />
      </form>
      <article className='w-60 md:w-[200px] mt-16 md:mt-0 relative'>
        <p onClick={()=> setShowDropown(prevValue => !prevValue)} className='  dark:bg-neutral-dark-blue cursor-pointer w-full myShadow flex justify-between px-3 py-2 rounded-sm'>
          <span>{selectedContinent}</span>
          {showDropDown ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
        </p>
        <section className=' absolute top-full w-full'>
          {
            showDropDown && 
            <ul className='mt-2 rounded-sm myShadow bg-white'>
              {
                continentsData.map(item => {
                  return (
                   <li key={item} className='   dark:bg-neutral-dark-blue py-2 px-6 cursor-pointer dark:hover:bg-white dark:hover:text-neutral-dark-blue hover:bg-gray-500' onClick={()=> selectContinent(item)}>{item}</li>
                  )
                })
              }
            </ul>
          }
        </section>
      </article>
    </section>
  )
}

export default Search