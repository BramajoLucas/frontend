import React from 'react'
import "./NewMessageForm.css"

const NewMessageForm = ({addNewMessage}) => {
    const handleSubmitSendMessageForm = (event) => {
        event.preventDefault()
        let new_message_text = event.target.message.value
        addNewMessage(new_message_text)
        event.target.message.value = ''
    }

    return (
        <form onSubmit={handleSubmitSendMessageForm}>
            <div className='message-form'>
                <label htmlFor="message">Escribe un mensaje:</label>
                <input type="text" placeholder='Escribe un mensaje...' id='message' name='message' required />
            </div>
            <button className='send-message-button' type='submit'>Enviar mensaje</button>
        </form>
    )
}

export {NewMessageForm}