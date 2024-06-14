package com.stockmanagement.stockmn.repo;

import com.stockmanagement.stockmn.entity.Product;
import com.stockmanagement.stockmn.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, String> {
}
