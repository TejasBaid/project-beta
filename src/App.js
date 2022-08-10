import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Table } from './components/table/Table';
import { Testimonials } from './components/testimonials/Testimonials';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

function App() {
  return (
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
    </div>
  );
}

export default App;
