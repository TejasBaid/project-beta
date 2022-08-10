import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Table } from './components/table/Table';
import { Testimonials } from './components/testimonials/Testimonials';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from './components/aboutus/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div className="App">      
          <Navbar />
          <Main/>
          <div style={{marginTop: "100px" }}>
            <div className="table-container-box">
              <h1>School Toppers</h1>
              <Table />
            </div>
            <Testimonials />
          </div>
          <Footer/>
        </div>}>
          
        </Route>
        <Route path="/about" element={
          <div>
            <Navbar />
            <AboutUs />
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
