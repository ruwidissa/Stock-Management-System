package com.stockmanagement.stockmn.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {

    // Private fields representing user information
    private String email;
    private String password;

}
