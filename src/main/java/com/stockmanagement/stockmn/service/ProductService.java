package com.stockmanagement.stockmn.service;

import com.stockmanagement.stockmn.dto.ProductDTO;
import com.stockmanagement.stockmn.dto.TestDTO;
import com.stockmanagement.stockmn.entity.Product;
import com.stockmanagement.stockmn.entity.Test;
import com.stockmanagement.stockmn.repo.ProductRepo;
import com.stockmanagement.stockmn.repo.TestRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProductService {
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private ModelMapper modelMapper;
    public ProductDTO saveUser(ProductDTO productDTO){
        productRepo.save(modelMapper.map(productDTO, Product.class));
        return productDTO;

    }
}
