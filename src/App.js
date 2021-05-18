import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TeamMember from './components/TeamMember';

const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    role: '',
}

function App() {

    const [teamMembers, setTeamMembers] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)

    const updateForm = (inputName, inputValue) => {
        setFormValues({ ...formValues, [inputName]: inputValue })
    }

    const submitForm = () => {
        const newTeamMember = {
            firstName: formValues.firstName.trim(),
            lastName: formValues.lastName.trim(),
            email: formValues.email.trim(),
            role: formValues.role,
        }
        setTeamMembers([...teamMembers, newTeamMember])
        setFormValues(initialFormValues)
    }

  return (
    <div className="App">
        <h1>Team Member Tracker</h1>
        <h2>Add Team Member:</h2>
        {/* <Form
        update={updateForm}
        submit={submitForm}
        values={formValues}
        /> */}
        <h2>Team Members:</h2>
        {/* {
            teamMembers.map(member, idx => {
                return (
                    <TeamMember key={idx} details={member} />
                )
            })
        } */}
    </div>
  );
}

export default App;
