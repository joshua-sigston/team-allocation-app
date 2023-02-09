
import TeamMenu from './TeamMenu'
import EmployeeCards from './EmployeeCards'

const Employees = ({employees, teamChange, selectedTeam, handleTeamSelection}) => {

  return (
      <main className="main_container">
          <TeamMenu employees={employees}
                    value={selectedTeam} 
                    onChange={handleTeamSelection}/>
        
          <EmployeeCards  employees={employees} 
                          teamChange={teamChange}
                          selectedTeam={selectedTeam} />    
      </main>
  )
}

export default Employees