import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
const Nav = () => {
  const {dark, setDark} = useGlobalContext();
  const doc = document.documentElement;
  useEffect(() => {
    dark ? doc.classList.add('dark') : doc.classList.remove('dark');
  }, [dark])  
  return (
    <nav className='w-full shadow-md p-4 py-7 md:py-4  dark:bg-neutral-dark-blue'>
      <ul className='flex justify-between'>
        <li className='font-bold dark:text-neutral-very-light-gray-light-bg'>Where in the world?</li>
        <li onClick={() => setDark(preValue => !preValue)} className='flex gap-3 justify-center items-center cursor-pointer'> 
          {
             dark ? 
             <WbSunnyOutlinedIcon />:
             <DarkModeOutlinedIcon className='dark:text-neutral-very-light-gray-light-bg' />
          }
          {
          <p className=' capitalize font-medium dark:text-neutral-very-light-gray-light-bg'>{dark ? 'Light mode' : 'dark mode'}</p>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Nav