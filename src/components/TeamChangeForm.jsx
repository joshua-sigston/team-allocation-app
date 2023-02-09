import { useState } from "react"

const TeamChangeForm = (props) => {
    const {employees, id, submitChange, handleTeamChange} = props
    const [userInput, setUserInput] = useState()

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitChange(userInput, e.target.id)
    }
    return(
        <div>
            <form onSubmit={handleSubmit} id={id}>
                <input type='text' onChange={handleChange}/>
                <button>Chagen Team</button>
            </form>
        </div>
    )
}

export default TeamChangeForm