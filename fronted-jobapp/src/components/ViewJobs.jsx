import React, { useState, useEffect } from 'react';

const ViewJobs = () => {
    const [jobs, setJobs] = useState([]);

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
    console.log(jobs)
    return (
        <div>
            <h2>Available Jobs</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Experience</th>
                    <th>Skills</th>
                </tr>
                </thead>
                <tbody>
                {jobs.map(job => (
                    <tr key={job.id}>
                        <td>{job.id}</td>
                        <td>{job.title}</td>
                        <td>{job.description}</td>
                        <td>{job.experience}</td>
                        <td>{Array.isArray(job.skills) ? job.skills.map(skill => skill.skillName).join(', ') : job.skills}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewJobs;
