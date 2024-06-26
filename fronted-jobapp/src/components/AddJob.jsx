import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import '../styles/AddJob.css';

const AddJob = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [experience, setExperience] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [availableSkills, setAvailableSkills] = useState([]);
    const [alert, setAlert] = useState({ show: false, variant: '', message: '' });

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('http://localhost:8080/skills');
                const data = await response.json();
                setAvailableSkills(data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        fetchSkills();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log("1" + skills)

        // lece po tablicy availableSkills i dodaje do tablicy 'skills' takie 'skill',
        // ktore 'skill.skillName' jest takie same jak w 'selectedSkills'
        const skills = selectedSkills.map(skillName => {
            return availableSkills.find(skill => skill.skillName === skillName);
        });

        const jobPost = {
            title,
            description,
            experience,
            skills,
        };

        console.log('Job post:', jobPost);

        try {
            const response = await fetch('http://localhost:8080/addjob', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobPost),
            });

            if (response.ok) {
                setAlert({ show: true, variant: 'success', message: 'Job added successfully!' });
                setTitle('');
                setDescription('');
                setExperience('');
                setSelectedSkills([]);
            } else {
                const errorText = await response.text();
                console.error('Failed to add job:', errorText);
                setAlert({ show: true, variant: 'danger', message: 'Failed to add job' });
            }
        } catch (error) {
            console.error('Error:', error);
            setAlert({ show: true, variant: 'danger', message: 'Error adding job' });
        }
    };

    const handleSkillChange = (event) => {
        const options = event.target.options;
        const selectedSkills = [];
        for (const option of options) {
            if (option.selected) {
                selectedSkills.push(option.value);
            }
        }
        setSelectedSkills(selectedSkills);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Add Job</h2>
            {alert.show && <Alert variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible>{alert.message}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="experience" className="form-label">Experience (years)</label>
                    <input
                        type="number"
                        className="form-control"
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="skills" className="form-label">Skills</label>
                    <select
                        multiple
                        className="form-select"
                        id="skills"
                        value={selectedSkills}
                        onChange={handleSkillChange}
                        required
                    >
                        {availableSkills.map((skill) => (
                            <option key={skill.id} value={skill.skillName}>
                                {skill.skillName}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;
