package com.example.proj.demo;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class User {
    private int userID;
    @Id
    private String username;
    private String password;
    private int role;
}
