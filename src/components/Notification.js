import React from 'react'


const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    }

    if (type === 'error') {
        return (
            <div className='alert alert-danger' role='alert'>
                {message}
            </div>
        ) 
    }

    return (
        <div className='alert alert-success' role='alert'>
            {message}
        </div>
    )
}

export default Notification