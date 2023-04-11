import React from 'react'
import Countries from './Countries';
import Search from './Search';
import NoMatch from './NoMatch';
import { useGlobalContext } from '../context/context';
const Home = () => {
  const { countries } = useGlobalContext();
  return (
    <>
        <Search />
        <main className='dark:bg-neutral-very-dark-blue-dark-bg'>
          <Countries />
        </main>
    </>
  )
}

export default Home