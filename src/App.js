import { useState, useEffect } from "react"

import './App.css';

import EmployeeDatabase from './components/EmployeeDatabase'
import Employees from './components/Employees';
import Header from './components/Header'
import Footer from './components/Footer'
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import SearchEmployee from "./components/SearchEmployee";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || EmployeeDatabase)
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamA")

  useEffect( () => { 
    localStorage.setItem('employeeList', JSON.stringify(employees))
  }, [employees])

  useEffect( () => { 
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  }, [selectedTeam])

  const handleTeamSelection = (e) => {
    setTeam(e.target.value)
  }

  const teamChange = (e) => {
    const changeEmployeeTeam = employees.map( (employee) => employee.id === parseInt(e.currentTarget.id)
    ? employee.teamName === selectedTeam 
    ? {...employee, teamName:""}
    : {...employee, teamName: selectedTeam}
    :employee) 

    setEmployees(changeEmployeeTeam)
  }

  const handleTeamChangeForm = (val) => {
    setEmployees(prevState => 
      { return prevState.map((item) =>
        {return item.id === val ? {...item, form: !item.form} : item})})
  }

  const submitTeam = (team, id) => {
      setEmployees(prevState => 
        {return prevState.map(item =>
          {return item.id === parseInt(id) ? {...item, teamName: team} : item})})
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route  path="/"
                  className='link'
                  element={
                    <Employees  employees={employees}
                                teamChange={teamChange}
                                selectedTeam={selectedTeam}
                                handleTeamSelection={handleTeamSelection}
                    />
                  }>

          </Route>
          <Route  path="/GroupedTeamMembers"
                  element={<GroupedTeamMembers  employees={employees}
                                                selectedTeam={selectedTeam}
                                                setTeam={setTeam}/>}>

          </Route>
          <Route  path="/SearchEmployee"
                  element={<SearchEmployee  employees={employees} handleTeamChange={handleTeamChangeForm} submitTeam={submitTeam}/>}>
            </Route>
          <Route  path="*"
                  element={<NotFound/>}>

          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
