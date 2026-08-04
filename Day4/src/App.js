import logo from './logo.svg';
import './App.css';
import StudentsDetails from './components/StudentsDetails';

const students=[
  {id:'2021IT51',name:'Sharanjana',course:'IT'},
  {id:'2021IT86',name:'Shiro',course:'IT'},
  {id:'2021IT87',name:'Kesha',course:'AMC'},
  {id:'2021IT102',name:'Rajeev',course:'IT'},
  {id:'2021IT121',name:'Kabijake',course:'AMC'},
]

function App() {
  return (
    <div className="App">
      <StudentsDetails studata={students}/>
      
    </div>
  );
}

export default App;
