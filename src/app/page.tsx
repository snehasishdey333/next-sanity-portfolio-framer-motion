import Navbar from "../components/Navbar";
import Header from '../components/Header'
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import { getSocials } from "@/utils/sanity-utis";


export default async function Home() {

  const socialData=await getSocials()
  // console.log(socialData)


  return (
   <div className="h-screen w-full overflow-x-hidden bg-[#F1F6F9]">
    {/* navbar */}
    <Navbar props={socialData}/>
    {/* header */}
    <Header/>
    <Divider/>
    {/* about */}
    <About/>
    <Divider/>
    {/* skills */}
    <Skills/>
    <Divider/>
    {/* projects */}
    <Projects/>
    <Divider/>
    {/* blogs */}
    <Blogs/>
    <Divider/>
    {/* contact */}
    <Contact/>
    {/* footer */}
    <Footer props={socialData}/>
   </div>
  )
}
