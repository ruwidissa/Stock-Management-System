package com.stockmanagement.stockmn;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StockmnApplication {
	public static void main(String[] args) {SpringApplication.run(StockmnApplication.class, args);}

	// Bean definition for ModelMapper, which provides mapping between DTOs and entities
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

}
