import "./style.css"

const Contact = () => {
    return (
        <div id = "contact" className="contact">
            <h1>Contact me!</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.8924297995!2d4.763878108967292!3d52.354582834316005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam!5e0!3m2!1sen!2snl!4v1617970450127!5m2!1sen!2snl"  frameborder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0">
            </iframe>
             <h4>Phone</h4>
            <p>+31630792944</p>
            <h4>Email</h4>
            <p>alinadakhno60@gmail.com</p>
            <h4>Address</h4>
            <p>Almere</p>
        </div>
    )
}

export default Contact