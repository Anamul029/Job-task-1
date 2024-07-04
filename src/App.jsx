// import Banner from "./Component/Banner"
// import FIfthSection from "./Component/FIfthSection"
// // import FIfthSection from "./Component/FIfthSection"
// import Footer from "./Component/Footer"
// import NavBar from "./Component/NavBar"
// import SecondSection from "./Component/SecondSection"
// import SixSection from "./Component/SixSection"
// import ThirdSection from "./Component/ThirdSection"

import Banner from "./Component/Banner"
import FIfthSection from "./Component/FifthSection"
import Footer from "./Component/Footer"
import FourthSection from "./Component/FourthSection"
import NavBar from "./Component/NavBar"
import SecondSection from "./Component/SecondSection"
import SectionTwo from "./Component/SectionTwo"
import ThirdSection from "./Component/ThirdSection"
import SixSection from "./SixSection"


function App() {

  return (
    <>
      <div className="container font-sans mx-auto w-5/6">
        <NavBar></NavBar>
        <Banner></Banner>
        <SectionTwo></SectionTwo>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FIfthSection></FIfthSection>
        <FourthSection></FourthSection>
        <SixSection></SixSection>
        {/* <Banner></Banner>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FIfthSection></FIfthSection>
        <SixSection></SixSection> */}
      </div>
      {/* <Footer></Footer> */}
      <Footer></Footer>
    </>
  )
}

export default App
