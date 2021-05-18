import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>First Name: 
                    <input 
                    type='text'
                    name='firstName'
                    onChange={onChange}
                    value={values.firstName}
                    />
                </label>
                <label>Last Name: 
                    <input 
                    type='text'
                    name='lastName'
                    onChange={onChange}
                    value={values.lastName}
                    />
                </label>
                <label>Email: 
                    <input 
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    />
                </label>
                <label>Role: 
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Front-End'>Front-End</option>
                        <option value='Back-End'>Back-End</option>
                        <option value='Data Science'>Data Science</option>
                        <option value='UI Design'>UI Design</option>
                        <option value='UX Design'>UX Design</option>
                    </select>
                </label>

                <div className='submit'>
                    <button disabled={!values.firstName || !values.lastName || !values.email || !values.role}>Submit</button>
                </div>
            </div>
        </form>
    )
}