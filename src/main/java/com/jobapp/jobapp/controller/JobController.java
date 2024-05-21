package com.jobapp.jobapp.controller;

import com.jobapp.jobapp.model.JobPost;
import com.jobapp.jobapp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class JobController {

    private final JobService jobService;

    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @RequestMapping(value = {"/", "/home"}, method = RequestMethod.GET)
    public String home(){
        return "home";
    }

    @RequestMapping(value = "/addjob", method = RequestMethod.GET)
    public String addjob(){
        return "addjob";
    }

    @RequestMapping(value = "/handleForm", method = RequestMethod.POST)
    public String handleForm(JobPost jobPost){
        jobService.addJobPost(jobPost);
        return "success";
    }

    @RequestMapping(value = "/viewalljobs", method = RequestMethod.GET)
    public String viewAllJobs(Model model){
        List<JobPost> jobs = jobService.getAllJobPosts();
        model.addAttribute("jobPosts", jobs);
        return "viewalljobs";
    }
}
