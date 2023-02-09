import '../App.css'

import maleImg from '../images/male_avatar.svg'
import femaleImg from '../images/female_avatar.svg'

const EmployeeCards = ({employees, teamChange, selectedTeam}) => {

    const boxShadow = 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'
  
    const employeeCards = employees.map( 
        (employee) => (
            <div id={employee.id} key={employee.id} className="card" style={{cursor: "pointer", boxShadow: employee.teamName === selectedTeam ? boxShadow : 'none'}} onClick={teamChange}>
                <img src={ employee.gender === "male" ? maleImg : femaleImg} alt="profile" className=""/>
                <div className="info_container">
                    <h2 className="name">{employee.fullName}</h2>
                    <p className="designation">{employee.designation}</p>
                    <p className='team_name'>{employee.teamName}</p>
                </div>
            </div>
        )
    )
    return (
        <div className="cards_container">
            {employeeCards}
        </div>
    )
}

export default EmployeeCards