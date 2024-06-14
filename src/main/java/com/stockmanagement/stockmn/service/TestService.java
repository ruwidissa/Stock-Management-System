package com.stockmanagement.stockmn.service;

import com.stockmanagement.stockmn.dto.TestDTO;
import com.stockmanagement.stockmn.entity.Test;
import com.stockmanagement.stockmn.repo.TestRepo;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class TestService {
    @Autowired
    private TestRepo testRepo;
    @Autowired
    private ModelMapper modelMapper;
    public TestDTO saveUser(TestDTO testDTO){
        testRepo.save(modelMapper.map(testDTO, Test.class));
        return testDTO;

    }
}
