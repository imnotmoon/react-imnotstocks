import './App.css';
import Navbar from './NavBar/NavBar'
import Chart from './Chart/Chart'
import List from './List/List'

function App() {
  return (
    <div className="App">

      <Navbar />

      <div className="content">

        <div className="content-up">
          <div className="content__chart">
            <Chart />
          </div>

          <div className="content__list">
            <List />
          </div>
        </div>

        <div className="content-down">

        </div>
      </div>
    </div>
  );
}

export default App;
