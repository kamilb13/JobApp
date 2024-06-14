package com.jobapp.jobapp.repository;

import com.jobapp.jobapp.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface JobRepository extends JpaRepository<JobPost, Long> {

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO job_post_skills (job_post_id, skills) VALUES (?1, ?2)", nativeQuery = true)
    void addSkillsToJobPost(Long jobId, String skill);
}
