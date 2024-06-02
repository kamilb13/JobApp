import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/ViewJobs.css';

const ViewJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:8080/allJobs');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    const openModal = (job) => {
        setSelectedJob(job);
    };

    const closeModal = () => {
        setSelectedJob(null);
    };

    return (
        <div className="view-jobs-container">
            <h2>Available Jobs</h2>
            <div className="job-cards-container">
                {jobs.map(job => (
                    <div key={job.id} className="job-card" onClick={() => openModal(job)}>
                        <h3>{job.title}</h3>
                    </div>
                ))}
            </div>
            {selectedJob && (
                <Modal
                    isOpen={!!selectedJob}
                    onRequestClose={closeModal}
                    contentLabel="Job Details"
                    className="job-modal"
                    overlayClassName="job-modal-overlay"
                >
                    <h2>{selectedJob.title}</h2>
                    <p><strong>Description:</strong> {selectedJob.description}</p>
                    <p><strong>Experience:</strong> {selectedJob.experience} years</p>
                    <p><strong>Skills:</strong> {Array.isArray(selectedJob.skills) ? selectedJob.skills.map(skill => skill.skillName).join(', ') : selectedJob.skills}</p>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            )}
        </div>
    );
};

export default ViewJobs;
