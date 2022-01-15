import type { NextPage } from 'next'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Services } from '../components/Services'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />

      <Services />
    </>
  )
}

export default Home
