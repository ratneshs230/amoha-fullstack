
import Navbar from '../components/Navbar'
import SDEPreparationPage from '../components/tutorial/SdePreparationComponent'
import ComputerSciencePage from '../components/tutorial/ComputerScienceCoreSubjects'
// import Footer from '../components/Footer'

const SdePreparationPage = () => {
  return (
    <div>
      <Navbar darkMode={false} setDarkMode={function (): void {
              throw new Error('Function not implemented.')
          } }/>
    
    <SDEPreparationPage darkMode={false}/>
    <ComputerSciencePage/>
      
    </div>
  )
}

export default SdePreparationPage
