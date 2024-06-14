package com.stockmanagement.stockmn.controller;

import com.stockmanagement.stockmn.dto.ProductDTO;
import com.stockmanagement.stockmn.dto.TestDTO;
import com.stockmanagement.stockmn.service.ProductService;
import com.stockmanagement.stockmn.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping (value = "api/user")
@CrossOrigin
public class UserController {

    @Autowired
    private ProductService productService;
    @GetMapping("getData")
    public String getUser(){
        return "fdbdf";
    }
    @PostMapping("/saveData")
    public ProductDTO saveUser(@RequestBody ProductDTO productDTO){
        return productService.saveUser(productDTO);
    }
    @PutMapping("updateData")
    public String updateUser(){
        return "updated";
    }
    @PostMapping("deleteData")
    public String deleteUser(){
        return "deleted";
    }

}
