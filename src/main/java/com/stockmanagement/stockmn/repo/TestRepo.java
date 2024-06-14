package com.stockmanagement.stockmn.repo;

import com.stockmanagement.stockmn.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepo extends JpaRepository<Test, Integer> {
}
