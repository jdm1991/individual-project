import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [contacts, setContacts] = useState(
        JSON.parse(localStorage.getItem('contacts')) || []
    );

    const handleFormSubmit = (event) => {
        event.preventDefault();

   
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const message = event.target.message.value;


        const newContact = { firstName, lastName, email, message };


        const updatedContacts = [...contacts, newContact];
        setContacts(updatedContacts);


        localStorage.setItem('contacts', JSON.stringify(updatedContacts));


        event.target.reset();
    };

    return (
        <div className='background-image-contact'>
            <form className="contact-form" onSubmit={handleFormSubmit}>
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <textarea name="message" placeholder="Message" maxLength="500" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
