package com.stockmanagement.stockmn.controller;

import com.stockmanagement.stockmn.dto.*;
import com.stockmanagement.stockmn.entity.Product;
import com.stockmanagement.stockmn.service.ProductService;
import com.stockmanagement.stockmn.service.TestService;
import com.stockmanagement.stockmn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping (value = "api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private ProductService productService;
    @Autowired
    private UserService userService;
    @GetMapping("/getData")
    public List<ProductDTO> getData(){
        return productService.getAllData();
     }
    @GetMapping("/getDataId/{productId}")
    public ProductDTO getDataById(@PathVariable String productId) {
        return productService.getDataById(productId);
    }
    @PostMapping("/saveData")
    public ProductDTO saveUser(@RequestBody ProductDTO productDTO){
        return productService.saveUser(productDTO);
    }
    @PutMapping("/updateData")
    public ProductDTO updateData(@RequestBody ProductDTO productDTO){
        return productService.updateData(productDTO);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/deleteData")
    public boolean deleteData(@RequestBody ProductDTO productDTO){
        return productService.deleteData(productDTO);
    }




    @PostMapping("/saveLoginData")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }
    @GetMapping("/getUserData")
    public List<UserDTO> getUserData(){
        return userService.getAllData();
    }
    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody LoginRequestDTO loginRequest) {
        return userService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
    }





    @GetMapping("/totalQuantity")
    public Integer getTotalQuantity() {
        return productService.getTotalQuantity();
    }

    @GetMapping("/getTotalBuyingPrice")
    public  Integer getTotalBuyingPrice(){
        return  productService.getTotalBuyingPrice();
    }

    @GetMapping("/getSalePercentage")
    public  Double getSalePercentage(){
        return  productService.getSalePercentage();
    }

    @GetMapping("/getStockPercentage")
    public  Double getStockPercentage(){
        return  productService.getStockPercentage();
    }

    style={{
        width: 90,
                display: 'block',
                margin: '0 auto'
    }}

    @GetMapping("/productById/{productId}")
    public ProductDTO getProductByProductId(@PathVariable String productId) {
        return productService.getProductByProductId(productId);
    }

    @GetMapping("/productByMaterialName/{material_name}")
    public List<Product> getproductByMaterialName(@PathVariable String material_name) {
        return  productService.getproductByMaterialName(material_name);
    }

}
