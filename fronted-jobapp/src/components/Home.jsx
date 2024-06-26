import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import ViewJobs from "./ViewJobs";

const Home = () => {
    return (
        <div className="container mt-5">
            <h1>Welcome to Job App</h1>
            <p>Your one-stop solution for job postings and applications.</p><br/>
            <ViewJobs/>
        </div>
    );
};

export default Home;