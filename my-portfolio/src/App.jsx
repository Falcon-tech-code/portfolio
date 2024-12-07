import './App.css'
import Navbar from './components/Navbar'
import Page from './components/Page'
import MyBioPage from './components/MyBioPage'
import ResumePage from './components/ResumePage'

function App() {


  return (
    <div className='App'>
      <div>
        <Navbar />
        <Page />
        <MyBioPage />
        <ResumePage />
      </div>
    </div >
  )
}

export default App
