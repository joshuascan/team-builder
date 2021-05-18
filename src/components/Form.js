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
                <label>First name
                    <input 
                    type='text'
                    name='firstName'
                    onChange={onChange}
                    value={values.firstName}
                    />
                </label>
            </div>
        </form>
    )
}