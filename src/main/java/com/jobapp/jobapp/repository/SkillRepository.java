package com.jobapp.jobapp.repository;

import com.jobapp.jobapp.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    List<Skill> findAllByIdIn(List<Integer> skillIds);
}
