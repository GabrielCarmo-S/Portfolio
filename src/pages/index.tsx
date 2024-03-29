import type { NextPage } from 'next'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Services } from '../components/Services'
import { Skills } from '../components/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />

      <Services />
      <Skills />
      <Footer />
    </>
  )
}

export default Home
