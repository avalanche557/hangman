import React from 'react';
import '../App.css'

interface  props {
    showNotification: boolean
}

const Notifcation = ({showNotification}: props) => {
    return (
        <>
            <div className={`notification-container ${showNotification ? 'show' : ''}`}>
                <p>You have already entered this letter</p>
            </div>
        </>
    )
}

export default Notifcation
