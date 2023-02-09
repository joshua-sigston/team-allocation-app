import { useState} from "react"

import TeamChangeForm from "./TeamChangeForm"

import maleImg from '../images/male_avatar.svg'
import femaleImg from '../images/female_avatar.svg'

const SearchEmployee = ({employees, handleTeamChange, submitTeam}) => {
    const [search, setSearch] = useState('')
    
    const handleSearch = (e) => {
        const searchName = e.target.value.toLowerCase()
        setSearch(searchName)
    }

    const handleDisplayForm = (e) => {
        handleTeamChange(parseInt(e.target.id))
    }

    const submitNewTeam = (team, id ) => {
        submitTeam(team, id)
        handleTeamChange(parseInt(id))
        console.log('searchEmployee PASS')
    }
    
    const name = employees.filter( person => 
        {return search === '' 
        ? person
        : person.fullName.toLowerCase().includes(search)
        }).map((employee) => (
            <div id={employee.id} key={employee.id} className="card">
                <img src={ employee.gender === "male" ? maleImg : femaleImg} alt="profile" className="card-img-top"/>
                <div className="info_container">
                    <h2 className="name">{employee.fullName}</h2>
                    <p className="designation">{employee.designation}</p>
                    <p className="team_name">{employee.teamName}</p>
                </div>
                <div>
                    <button onClick={handleDisplayForm} id={employee.id}>Change Team</button>
                </div>
                <div>{employee.form && <TeamChangeForm employess={employees} id={employee.id} submitChange={submitNewTeam}/>}</div>
            </div>
        ))

    return(
        <div>
            <input type="text" placeholder="Search" onChange={handleSearch}/>
            <button type="submit">Search</button>
            <div className="cards_container">
                {name}
            </div>
        </div>
    )
}

export default SearchEmployee