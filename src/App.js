import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Table } from './components/table/Table';
import { Testimonials } from './components/testimonials/Testimonials';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from './components/aboutus/AboutUs';
import { Analytics } from './components/analytics/Analytics';
import { FilterTable } from './components/filter-table/FilterTable';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div className="App">      
          <Navbar />
          <Main/>
          <div className="table-container-box">
            <h1>School Toppers</h1>
            <Table />
          </div>
          <FilterTable/>
          <Testimonials />
          <Footer/>
        </div>}>
          
        </Route>
        <Route path="/about" element={
          <div>
            <Navbar />
            <AboutUs />
            <Footer/>
          </div>
        }></Route>
        <Route path="/analytics" element={
          <div>
            <Navbar />
            <Analytics />
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
