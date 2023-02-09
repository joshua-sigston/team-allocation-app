const TeamMenu = ({employees, value, onChange}) => {
    let count = 0
    employees.forEach( employee => employee.teamName === value
                                    ? count += 1
                                    : count )
    return (
        <div className="selection_container">
            <select value={value} onChange={onChange}>
               <option value="TeamA">Team A</option>
               <option value="TeamB">Team B</option>
               <option value="TeamC">Team C</option>
               <option value="TeamD">Team D</option>
             </select>
            <p>{value} has {count} {count === 1 ? "Member" : "Members"}</p>
        </div>
    )
}

export default TeamMenu