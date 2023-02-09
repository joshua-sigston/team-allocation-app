import { useState } from "react"


const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    // create function that creates an array of objects, each object is a collection of team members in the same group

    const sortGroups = str => {
        return employees.filter(employee => employee.teamName === str)
    }

    const groupObject = value => {
        let name = value[0].teamName
        const group = { team: name, members: value, collapsed:selectedTeam === name ? false : true}
        return group
    }    

    const groupTeamMembers = () => {
        let teams= []

        let teamA = sortGroups('TeamA')
        let teamB = sortGroups('TeamB')
        let teamC = sortGroups('TeamC')
        let teamD = sortGroups('TeamD')

        let teamAGroup = groupObject(teamA)
        let teamBGroup = groupObject(teamB)
        let teamCGroup = groupObject(teamC)
        let teamDGroup = groupObject(teamD)

        teams.push(teamAGroup, teamBGroup, teamCGroup, teamDGroup)

        return teams
    }

    // groupEmployees state is created by calling on above functions
    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())

    const handleTeamClick = (e) => {
        const groupData = groupedEmployees.map( 
                            groupData => groupData.team === e.currentTarget.id 
                            ? {...groupData, collapsed: !groupData.collapsed} 
                            : groupData)
        setGroupedEmployees(groupData)
        setTeam(e.currentTarget.id)
    }

    const groups = groupedEmployees.map( group => 
        {return (
        <div key={group.team} className='grouped_members' style={{cursor: 'pointer'}}>
            <h4 id={group.team} className='grouped_team_name' onClick={handleTeamClick}> 
                Team Name: {group.team}
            </h4>
            <div id={"collapse_" + group.team} className={group.collapsed === true ? "collapse" : "show_members"}>
                <hr />
                {
                    group.members.map( (member => {
                        return (
                            <div key={member.id}>
                                <p  className="card-title mt-2">
                                    <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                                </p>
                                <p className="card-text text-dark mt-2">
                                    <b>Designation:</b> {member.designation}
                                </p>
                            </div>
                        )
                    }))
                }
            </div>
            <hr/>
        </div>
        )})
        
    return (
        <div className="grouped_members_container">
            {groups}
        </div>
        )
}

export default GroupedTeamMembers