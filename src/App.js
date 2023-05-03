

import Header from './Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';


 function App () {
 
  const [selectedTeam, setTeam] = useState(JSON.parse(
    localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  
  useEffect(() => {localStorage.setItem('employeeList',JSON.stringify(employees))},[employees]);

  useEffect(() => {localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))
},[selectedTeam]);

  function handleTeamSelectionChange  (event)  {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick  (event)  {
    const transformedEmployees = employees.map((employee) => 
       employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedTeam) ? {...employee, teamName:''}:{...employee, teamName: selectedTeam} : employee);
     

       setEmployees(transformedEmployees);
    }
  
  return (<div>
    <Header selectedTeam={selectedTeam} 
    teamMemberCount={employees.filter((employee)=> employee.teamName === selectedTeam).length}/>
    <Employees employees={employees}
    selectedTeam={selectedTeam}
    handleEmployeeCardClick={handleEmployeeCardClick}
    handleTeamSelectionChange={handleTeamSelectionChange}/>
   
    
    <Footer/>
  </div>)
}





const Footer = () => {
  var today = new Date();
  return (<footer className='container'>
    <div className='row justify-content-center mt-3 mb-4'>
      <div className='col-8'>
             <h5>Team Member Allocation App - {today.getFullYear()}</h5>
      </div>   
    </div>           
  </footer>)
}

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
  

  return (<main className='container'>
    <div className='row justify-content-center mt-3 mb-3' >
        <div className='col-8'>

          <select className='form-select form-select-lg' value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
          </select>
        </div>
     </div>   
      <div className='row justify-content-center mt-3 mb-3' >
        <div className='col-8'>
          <div className='card-collection'>
            {
                employees.map((employee) => (
            <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} onClick={handleEmployeeCardClick}>
            { (employee.gender === 'male') ?<image src={maleProfile} className='card-img-top'width="18rem" alt='malepic'/> :
              <image src={femaleProfile} className='card-img-top'width="18rem" alt='femalepic'/>
            }
              <div className="card-body">
                <h5 className="card-title">{employee.fullName}</h5>
                <p className="card-text"><b>Designation:</b>{employee.designation}</p>
              </div>
            </div>
            
      
                ))
    } </div>   <style jsx
         >{
        `
        .card {
          width: 18rem;
          cursor: pointer;
        }`
      }</style>    

        </div>
      </div>


  </main>)
}

export default App;
