package com.stockmanagement.stockmn.repo;

import com.stockmanagement.stockmn.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository interface for User entity, providing CRUD operations
public interface UserRepo extends JpaRepository<User, Long> {
    User findByEmail(String email);  // Method to find a user by their email address

}
