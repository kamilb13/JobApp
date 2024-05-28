package com.jobapp.jobapp.controller;

import com.jobapp.jobapp.model.JobPost;
import com.jobapp.jobapp.model.Skill;
import com.jobapp.jobapp.repository.SkillRepository;
import com.jobapp.jobapp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class JobController {

    private final JobService jobService;
    private final SkillRepository skillRepo;

    @Autowired
    public JobController(JobService jobService, SkillRepository skillRepo) {
        this.jobService = jobService;
        this.skillRepo = skillRepo;
    }

    @GetMapping("/home")
    public String home(){
        return "Welcome to Job App Home";
    }

    @GetMapping("/skills")
    public List<Skill> getAllSkills() {
        return jobService.getAllSkills();
    }

    @PostMapping("/addjob")
    public JobPost addJob(@RequestBody JobPost jobPost) {
        //List<Skill> skills = skillRepo.findAllByIdIn(jobPost.getSkills().stream().map(Skill::getId).collect(Collectors.toList()));
        //System.out.println(skills);
        //jobPost.setSkills(skills);
        return jobService.addJobPost(jobPost);
    }

    @GetMapping("/allJobs")
    public List<JobPost> getAllJobs() {
        return jobService.getAllJobPosts();
    }
}
