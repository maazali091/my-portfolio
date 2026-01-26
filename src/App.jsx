import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import MyWork from "./components/MyWork/MyWork"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
    </>
  )
}

export default App



//  hab ap chahte ha keh ise git hub ya hostinger par live kare to itne file uplaod krna 
// mushkil ho jata ha to iski lie terminal ma nppm run build command diel kre aor usse ik 
// file ban jate ha jo keh upload krne par sahe hota ha same isi trah