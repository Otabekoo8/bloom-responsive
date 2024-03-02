import './App.css'
import Client from './components/Client/Client'
import Design from './components/Design/Design'
import Flex from './components/Flex/Flex'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Lorem from './components/Lorem/Lorem'
import Portfolio from './components/Portfolio/Portfolio'
import Service from './components/Services/Service'
import Section from './components/Text/Section'

function App() {


  return (
    <div className='container sm:w-[100%]'>
      <Header />
      <Section />
      <Service />
      <Design />
      <Portfolio />
      <Flex />
      <Client />
      <Lorem />
      <Footer />
    </div>
  )
}

export default App
