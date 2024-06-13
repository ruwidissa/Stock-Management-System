package com.stockmanagement.stockmn.repo;

import com.stockmanagement.stockmn.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface
UserRepo extends JpaRepository<User, Integer> {
}
