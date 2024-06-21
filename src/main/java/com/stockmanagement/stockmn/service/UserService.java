package com.stockmanagement.stockmn.service;

import com.stockmanagement.stockmn.dto.LoginResponseDTO;
import com.stockmanagement.stockmn.dto.ProductDTO;
import com.stockmanagement.stockmn.dto.TestDTO;
import com.stockmanagement.stockmn.dto.UserDTO;
import com.stockmanagement.stockmn.entity.Product;
import com.stockmanagement.stockmn.entity.Test;
import com.stockmanagement.stockmn.entity.User;
import com.stockmanagement.stockmn.repo.TestRepo;
import com.stockmanagement.stockmn.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;
    public UserDTO saveUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;

    }
    public List<UserDTO> getAllData(){
        List<User>userList=userRepo.findAll();
        return modelMapper.map(userList,new TypeToken<List<UserDTO>>(){}.getType());
    }

    public LoginResponseDTO authenticate(String email, String password) {
        User user = userRepo.findByEmail(email);

        if (user != null && password.matches( user.getPassword())) {
            return new LoginResponseDTO(true, "Login successful");
        } else {
            return new LoginResponseDTO(false, "Invalid email or password");
        }
    }



}
