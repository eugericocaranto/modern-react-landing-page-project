import './App.css'
import AboutSection from './components/AboutSection'
import CompanyLogo from './components/CompanyLogo'
import CustomerSection from './components/CustomerSection'
import DesignSection from './components/DesignSection'
import FeaturesSection from './components/FeaturesSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TryNow from './components/TryNow'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <CompanyLogo/>
    <FeaturesSection/>
    <DesignSection/>
    <CustomerSection/>
    <AboutSection/>
    <TryNow/>
    </>
  )
}

export default App
