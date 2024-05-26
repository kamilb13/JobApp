package com.jobapp.jobapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Entity
@Table(name = "skills")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    //w pliku jsp musi byc nazwa pola z tej klasy a nie nazwa z tabeli z bazy!
    @Column(name = "skill_name", unique = true)
    private String skillName;
}
