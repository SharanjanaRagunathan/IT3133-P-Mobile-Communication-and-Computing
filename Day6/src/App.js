import logo from './logo.svg';
import './App.css';


import StudentsDetails from "./componets/StudentsDetails"
;
import GetName from './componets/GetName';
import Calculator from './componets/Calculator';
const students=[
  {id:'2021IT01',name:'James',course:'IT'},
  {id:'2021IT02',name:'Kamal',course:'AMC'},
  {id:'2021IT03',name:'Raj',course:'ENS'},
  {id:'2021IT04',name:'Siva',course:'IT'},
  {id:'2021IT05',name:'Bavan',course:'AMC'}
]


function App() {
  return (
      <div className='App'>
          <StudentsDetails studata={students}/>
          < GetName/>
          <Calculator/>

      </div>

      

  );
}

export default App;
