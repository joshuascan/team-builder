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
        <div className='add-member container'>
            <h2>Add Team Member:</h2>
            <Form
            update={updateForm}
            submit={submitForm}
            values={formValues}
            />
        </div>
        <div className='members container'>
            <h2>Team Members:</h2>
            <div className='member'>
            {
                teamMembers.map(member => {
                    return (
                        <TeamMember key={member.id} details={member} />
                        )
                    })
                }
            </div>
        </div>
    </div>
  );
}

export default App;
