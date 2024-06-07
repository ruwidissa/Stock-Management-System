package com.stockmanagement.stockmn.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping (value = "api/v1/user")
@CrossOrigin
public class UserController {

    @GetMapping("getUser")
    public String getUser(){
        return "fdbdf";
    }

    @PostMapping("saveUser")
    public String saveUser(){
        return "saved";
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
