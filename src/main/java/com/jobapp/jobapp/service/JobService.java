package com.jobapp.jobapp.service;

import java.util.List;

import com.jobapp.jobapp.model.Skill;
import com.jobapp.jobapp.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobapp.jobapp.model.JobPost;
import com.jobapp.jobapp.repository.JobRepository;

@Service
public class JobService {
    private final JobRepository repo;
    private final SkillRepository skillRepo;

    @Autowired
    public JobService(JobRepository repo, SkillRepository skillRepo) {
        this.repo = repo;
        this.skillRepo = skillRepo;
    }

    public List<JobPost> getAllJobPosts() {
        return repo.findAll();
    }

    public JobPost addJobPost(JobPost jobPost) {
        repo.save(jobPost);
        return jobPost;
    }

    public List<Skill> getAllSkills() {
        return skillRepo.findAll();
    }
}
