package com.jobapp.jobapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobapp.jobapp.model.JobPost;
import com.jobapp.jobapp.repository.JobRepository;

@Service
public class JobService {
    public final JobRepository repo;

    @Autowired
    public JobService(JobRepository repo) {
        this.repo = repo;
    }

    public List<JobPost> getAllJobPosts() {
        return repo.returnAllJobPosts();
    }

    public void addJobPost(JobPost jobPost) {
        repo.addJobPost(jobPost);
    }
}
