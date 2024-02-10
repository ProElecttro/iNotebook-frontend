const About = () => {
    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Welcome to iNotebook: Your Digital Notepad
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                        <p>
                            In the fast-paced digital age, staying organized is more crucial than ever. Introducing iNotebook, a revolutionary online platform designed to streamline your note-taking experience. Our platform empowers users to effortlessly save and manage their notes in a sleek and intuitive environment. With iNotebook, say goodbye to scattered papers and hello to a more organized and efficient way of capturing your thoughts.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Seamless User Experience
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <p>
                            iNotebook prioritizes user-friendly design, ensuring a seamless experience for both novice and experienced note-takers. The interface is clean, intuitive, and responsive, allowing you to focus on your ideas without any unnecessary distractions. Whether you're jotting down quick thoughts, creating detailed outlines, or organizing your to-do lists, iNotebook provides a versatile space tailored to your note-taking needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Anywhere, Anytime Access
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <p>
                            Life doesn't wait for the perfect moment, and neither should your note-taking. iNotebook offers the flexibility of cloud-based storage, ensuring your notes are accessible anytime, anywhere. Whether you're at home, in the office, or on the go, iNotebook syncs seamlessly across devices, allowing you to pick up right where you left off. Embrace the freedom of having your notes at your fingertips whenever inspiration strikes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                        Privacy and Security at the Core
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                    <div className="accordion-body">
                        <p>
                            We understand the sensitivity of personal and professional notes. iNotebook takes privacy seriously, implementing robust security measures to safeguard your data. With end-to-end encryption and secure login protocols, your notes remain confidential and protected. Trust iNotebook to be your digital vault, providing a secure space for your thoughts and ideas to flourish. Elevate your note-taking experience with iNotebook – where organization meets innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
