import './App.css';
import NavBar from '../NavBar/NavBar'
import NoticeBar from '../NoticeBar/NoticeBar'
import Detail from '../Detail/Detail'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="board">
        <div className="section1">
          <NoticeBar />
          <Detail />
        </div>
        <div className="section2">

        </div>
      </div>

    </div>
  );
}

export default App;
