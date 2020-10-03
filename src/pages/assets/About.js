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
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsaadrassam&psig=AOvVaw2B5Di63DmXfLe62m84I2ab&ust=1601841590717000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDXj4ubmewCFQAAAAAdAAAAABAD"
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