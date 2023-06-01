import React from "react"
//import { Routes, Route} from "react-router-dom"
// import HomePage from "./Pages/HomePage"
import Footer from "./components/Footer"
import  Header  from "./components/Header"
import Second from "./Pages/Second"
import Third from "./Pages/Third"
import "../src/App.css"

function App() {
  return (
    <> 
    <Header/>
    <Second/>
    <Third/>
    <Footer/> 
      {/* <Routes>      
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register /> } />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/CreateIt' element={<CreateIt />} />
        <Route path="*" element={<Pagenotfound />} />

      </Routes>*/}
      

    </>
  );
}

export default App;











































































































































	// title: "",
	// name: "",
	// phone:"",
	// email: "",
	// password: "",
	// address:""
