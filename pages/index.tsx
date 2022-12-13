import Head from 'next/head'
import React, { useEffect } from 'react'
import FrontPage from '../src/pages/LandingPage'
import { FilterOptionProvider } from '../src/store/FilterOption';
import { FilterCategoryProvider } from '../src/store/FilterCategory';
import { getTheme, setTheme, toggleTheme } from '../src/utils/switchTheme'

export default function Home() {
  useEffect(() => {
    setTheme(getTheme());
  }, []);

  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FilterCategoryProvider>
        <FilterOptionProvider>
          <FrontPage />
        </FilterOptionProvider>
      </FilterCategoryProvider>

      <button onClick={toggleTheme}>Toggle Light/Dark mode</button>
    </div>
  )
}