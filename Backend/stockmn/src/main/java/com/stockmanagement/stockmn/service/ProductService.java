package com.stockmanagement.stockmn.service;
import com.stockmanagement.stockmn.dto.ProductDTO;
import com.stockmanagement.stockmn.entity.Product;
import com.stockmanagement.stockmn.repo.ProductRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
@Transactional
// Service class for handling logics related to products
public class ProductService {
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private ModelMapper modelMapper;

    // Method to save a product
    public ProductDTO saveUser(ProductDTO productDTO){
        productRepo.save(modelMapper.map(productDTO, Product.class));
        return productDTO;
    }
    // Method to retrieve all products and map them to ProductDTOs
    public List<ProductDTO> getAllData(){
        List<Product>productList=productRepo.findAll();
        return modelMapper.map(productList,new TypeToken<List<ProductDTO>>(){}.getType());
    }
    // Method to retrieve a product by its ID
    public ProductDTO getDataById(String productId) {
        Optional<Product> productOptional = productRepo.findById(String.valueOf(productId));
        if (productOptional.isPresent()) {
            return modelMapper.map(productOptional.get(), ProductDTO.class);
        } else {
            // Handle the case where the product is not found
            throw new RuntimeException("Product not found for ID: " + productId);
        }
    }
    // Method to update a product
    public ProductDTO updateData(ProductDTO productDTO){
        productRepo.save(modelMapper.map(productDTO,Product.class));
        return productDTO;
    }
    // Method to delete a product
    public boolean deleteData(ProductDTO productDTO){
        productRepo.delete(modelMapper.map(productDTO,Product.class));
        return true;
    }
    // Method to get total quantity of all products
    public Integer getTotalQuantity() {
        return productRepo.getTotalQuantity();
    }
    // Method to get total buying price of all products
    public  Integer getTotalBuyingPrice(){
        return productRepo.getTotalBuyingPrice();
    }

    // Method to get sale percentage of products
    public  Double getSalePercentage(){
        return productRepo.getSalePercentage();
    }
    // Method to get stock percentage of products
    public  Double getStockPercentage(){
        return productRepo.getStockPercentage();
    }

    // Method to retrieve a product by its product ID
    public ProductDTO getProductByProductId(String productId){
        Product product=productRepo.getProductByProductId(productId);
        return modelMapper.map(product, ProductDTO.class);
    }
    // Method to retrieve products by material name
    public List<Product> getproductByMaterialName(String material_name) {
        return productRepo.getproductByMaterialName(material_name);
    }
}
