
import './App.css';
import UserDeatils from './components/UserDeatils';
import data from './data/data.json'
function App() {
  const JSONDATA = data
  return (
    <div className="App">
       {
        JSONDATA.map((data) => {
          return(
            <UserDeatils data={data}/>
          )
        })
       }
    </div>
  );
}

export default App;
