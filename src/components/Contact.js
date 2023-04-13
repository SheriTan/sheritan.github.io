const Contact = ({ title }) => {
    return (
        <>
            <span className='card_heading'>{title}</span>
            <div className='contents contact'>
                <div className='contact_details'>
                    <img src='/contact/phone.png' />
                    <a href='tel:+6581650273'>(65) 8165 0273</a>
                </div>
                <div className='contact_details'>
                    <img src='/contact/mail.png' />
                    <a href='mailto:sitwl03@gmail.com'>sitwl03@gmail.com</a>
                </div>
                <div className='contact_details'>
                    <img src='/contact/linkedin.png' />
                    <a href='https://www.linkedin.com/in/sheri-tan-5411581b1/' target='_blank'>linkedin.com/in/sheritan-5411581b1/</a>
                </div>
            </div>
        </>
    );
}

export default Contact;