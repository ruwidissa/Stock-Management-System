package com.stockmanagement.stockmn.controller;
import com.stockmanagement.stockmn.dto.*;
import com.stockmanagement.stockmn.entity.Product;
import com.stockmanagement.stockmn.service.ProductService;
import com.stockmanagement.stockmn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping (value = "api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private ProductService productService;  // Autowired ProductService for handling product-related operations
    @Autowired
    private UserService userService;   // Autowired UserService for handling user-related operations

    // Endpoint to fetch all product data
    @GetMapping("/getData")
    public List<ProductDTO> getData(){
        return productService.getAllData();}

    // Endpoint to fetch product data by ID
    @GetMapping("/getDataId/{productId}")
    public ProductDTO getDataById(@PathVariable String productId) {
        return productService.getDataById(productId);
    }

    // Endpoint to save product data
    @PostMapping("/saveData")
    public ProductDTO saveUser(@RequestBody ProductDTO productDTO){
        return productService.saveUser(productDTO);}

    // Endpoint to update product data
    @PatchMapping("/updateData")
    public ProductDTO updateData(@RequestBody ProductDTO productDTO){
        return productService.updateData(productDTO);}

    // Endpoint to delete product data
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteData")
    public boolean deleteData(@RequestBody ProductDTO productDTO){
        return productService.deleteData(productDTO);
    }

    // Endpoint to save user login data
    @PostMapping("/saveLoginData")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }

    // Endpoint to fetch all user data
    @GetMapping("/getUserData")
    public List<UserDTO> getUserData(){
        return userService.getAllData();
    }

    // Endpoint to authenticate user login
    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody LoginRequestDTO loginRequest) {
        return userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
    }

    // Endpoint to fetch total quantity of products
    @GetMapping("/totalQuantity")
    public Integer getTotalQuantity() {
        return productService.getTotalQuantity();
    }

    // Endpoint to fetch total buying price of products
    @GetMapping("/getTotalBuyingPrice")
    public  Integer getTotalBuyingPrice(){
        return  productService.getTotalBuyingPrice();
    }

    // Endpoint to fetch sale percentage of products
    @GetMapping("/getSalePercentage")
    public  Double getSalePercentage(){
        return  productService.getSalePercentage();
    }

    // Endpoint to fetch stock percentage of products
    @GetMapping("/getStockPercentage")
    public  Double getStockPercentage(){
        return  productService.getStockPercentage();
    }

    // Endpoint to fetch product data by product ID
    @GetMapping("/productById/{productId}")
    public ProductDTO getProductByProductId(@PathVariable String productId) {
        return productService.getProductByProductId(productId);
    }

    // Endpoint to fetch products by material name
    @GetMapping("/productByMaterialName/{material_name}")
    public List<Product> getproductByMaterialName(@PathVariable String material_name) {
        return  productService.getproductByMaterialName(material_name);
    }

}
