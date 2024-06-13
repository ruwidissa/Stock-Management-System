package com.stockmanagement.stockmn.service;

import com.stockmanagement.stockmn.dto.UserDTO;
import com.stockmanagement.stockmn.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepo UserRepo;
    public String saveUser(UserDTO userDTO){
        UserRepo.save(userDTO);

    }
}
