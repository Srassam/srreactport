import React from "react";

function Contact() {
    return (

        <div className="container w-auto full-page pb-5">
            <div className="row w- auto">
                <div className="col-md-0">
                    <div className="col-md-12 mt-5 card bg-light">
                        <div className="card-body bg-light">
                            <h1 className="text-primary">Contact</h1>
                            <form>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Name</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        row="1"
                                        placeholder="Name"
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea2"
                                        row="3"
                                        placeholder="Message"
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark">
                                    submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;