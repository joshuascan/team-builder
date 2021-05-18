import React from 'react';

export default function TeamMember(props) {
    const { details } = props

    if (!details) {
        return <h3>Working on fetching team member details...</h3>
    }

    return (
        <div className='team-member container'>
            <h2>{details.firstName} {details.lastName}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}