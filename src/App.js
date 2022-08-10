import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Table } from './components/table/Table';
import { Testimonials } from './components/testimonials/Testimonials';
import { Main } from './components/main/Main';

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
    </div>
  );
}

export default App;
