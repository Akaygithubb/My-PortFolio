import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline"
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer"
import { useEffect, useState } from "react";

function App() {

  const [menuopen,setmenuopen]=useState(false);
  const[ratio,setratio]=useState(window.innerWidth/window.innerHeight)

  useEffect(() => {
    const resizeratio=()=>{
    setratio(window.innerWidth/window.innerHeight);
    }
    window.addEventListener("resize",resizeratio)
  
    return () => {
      window.removeEventListener("resize",resizeratio);
    }
  }, [ratio])
  

  return ratio<2?(
    <>
    <HeaderPhone menuopen={menuopen} setmenuopen={setmenuopen}/>
    <Header menuopen={menuopen} setmenuopen={setmenuopen}/>
    <Home ratio={ratio}/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Toaster/>
  
    </>
  ) : <em id="customMessage">
    Please Change the Ratio to View!

  </em>
}

export default App;
