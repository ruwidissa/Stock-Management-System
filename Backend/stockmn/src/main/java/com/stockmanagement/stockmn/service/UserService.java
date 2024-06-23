package com.stockmanagement.stockmn.service;
import com.stockmanagement.stockmn.dto.LoginResponseDTO;
import com.stockmanagement.stockmn.dto.UserDTO;
import com.stockmanagement.stockmn.entity.User;
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

    // Method to save a user
    public UserDTO saveUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }
    // Method to retrieve all users and map them to UserDTOs
    public List<UserDTO> getAllData(){
        List<User>userList=userRepo.findAll();
        return modelMapper.map(userList,new TypeToken<List<UserDTO>>(){}.getType());
    }
    // Method to authenticate a user based on email and password
    public LoginResponseDTO authenticate(String email, String password) {
        User user = userRepo.findByEmail(email);
        // Check if user exists and password matches
        if (user != null && password.matches( user.getPassword())) {
            return new LoginResponseDTO(true, "Login successful");
        } else {
            return new LoginResponseDTO(false, "Invalid email or password");
        }
    }

}
