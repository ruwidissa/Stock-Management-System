package com.stockmanagement.stockmn.controller;

import com.stockmanagement.stockmn.dto.UserDTO;
import com.stockmanagement.stockmn.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping (value = "api/v1/user")
@CrossOrigin
public class UserController {

    @GetMapping("getUser")
    public String getUser(){
        return "fdbdf";
    }

    @PostMapping("/saveData")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return UserService.saveUser(userDTO);
    }
    @PutMapping("updateUser")
    public String updateUser(){
        return "updated";
    }
    @PostMapping("deleteUser")
    public String deleteUser(){
        return "deleted";
    }

}
