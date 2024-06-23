package com.stockmanagement.stockmn.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity  // Specifies that this class is an entity mapped to a database table
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    @Id  // Specifies the primary key of the entity
    private String email;  // Unique identifier for the user
    private String password;
}