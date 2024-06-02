import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Contact Page</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <FaGithub size={50} className="mb-3"/>
                            <h5 className="card-title">Github</h5>
                            <p className="card-text"><a href="https://github.com/kamilb13" target="_blank" rel="noopener noreferrer">https://github.com/kamilb13</a></p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <FaEnvelope size={50} className="mb-3"/>
                            <h5 className="card-title">Email</h5>
                            <p className="card-text"><a href="mailto:kamil.brzoza13@gmail.com">kamil.brzoza13@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
