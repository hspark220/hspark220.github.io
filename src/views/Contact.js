import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            contact
            <p>email: hspark220@gmail.com </p>
            {/* icons */}
            <SocialIcon url="https://github.com/hspark220" />
            <SocialIcon url="https://www.linkedin.com/in/heonsoopark/" />
        </div>
    )
}

export default Contact;