package com.stockmanagement.stockmn.service;

import com.stockmanagement.stockmn.dto.ProductDTO;
import com.stockmanagement.stockmn.dto.TestDTO;
import com.stockmanagement.stockmn.entity.Product;
import com.stockmanagement.stockmn.entity.Test;
import com.stockmanagement.stockmn.repo.ProductRepo;
import com.stockmanagement.stockmn.repo.TestRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static org.hibernate.FetchMode.SELECT;

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
    public List<ProductDTO> getAllData(){
        List<Product>productList=productRepo.findAll();
        return modelMapper.map(productList,new TypeToken<List<ProductDTO>>(){}.getType());
    }

    public ProductDTO getDataById(String productId) {
        Optional<Product> productOptional = productRepo.findById(String.valueOf(productId));
        if (productOptional.isPresent()) {
            return modelMapper.map(productOptional.get(), ProductDTO.class);
        } else {
            // Handle the case where the product is not found
            throw new RuntimeException("Product not found for ID: " + productId);
        }
    }

    public ProductDTO updateData(ProductDTO productDTO){
        productRepo.save(modelMapper.map(productDTO,Product.class));
        return productDTO;
    }
    public boolean deleteData(ProductDTO productDTO){
        productRepo.delete(modelMapper.map(productDTO,Product.class));
        return true;
    }

    public Integer getTotalQuantity() {
        return productRepo.getTotalQuantity();
    }

    public  Integer getTotalBuyingPrice(){
        return productRepo.getTotalBuyingPrice();
    }

    public  Double getSalePercentage(){
        return productRepo.getSalePercentage();
    }

    public  Double getStockPercentage(){
        return productRepo.getStockPercentage();
    }

    public ProductDTO getProductByProductId(String productId){
        Product product=productRepo.getProductByProductId(productId);
        return modelMapper.map(product, ProductDTO.class);
    }

    public List<Product> getproductByMaterialName(String material_name) {
        return productRepo.getproductByMaterialName(material_name);
    }
}
