import React from "react";

function About() {
    return (
        <div className="container w-100 full-page pb-5">
            <div className="row w-100">
                <div className="col-md-1"></div>
                <div className="col-md-8 mt-5 card">
                    <div className="card-body">
                        <h1 className="text-bold">About Me:</h1>

                        <img
                            src="data:image/jpeg;base64,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"
                            alt="Saad Profile"
                            width="200"
                            height="200"
                            border="10"
                            className="float-left r-3 img-fluid"
                        />
                        <p>
                            Certified Scrum Master with a certificate in full stack development from the University of North
                            Carolina at Charlotte.
                            Skilled in solving problems, asking the right questions from stakeholders to set expectations and
                            working in teams to accomplish set goals. Known to be organized, goal oriented and empathetic to achieving set outcomes.
                            I am driven by curiosity, forward thinking and digging for a more efficient way of operating. Over ten years
                            experience working with agile methodologies, including team leadership and part of a team.
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/saadrassam/" target="_blank">
                                Check out my LinkedIn Profile
                        </a>
                        </p>
                        <p>
                            <a href="https://github.com/Srassam" target="_blank">
                                Check out my projects on GitHub
                        </a>
                        </p>
                        <p>
                            <a hhref="https://drive.google.com/file/d/1nK546QNp3gPWogf0cEHzQKONTCRSCO26/view?usp=sharing">

                            </a>
                        </p>

                        <p>email: smrassam@gmail.com</p>

                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default About;