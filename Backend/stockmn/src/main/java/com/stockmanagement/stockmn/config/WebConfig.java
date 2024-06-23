package com.stockmanagement.stockmn.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Method to configure CORS (Cross-Origin Resource Sharing) for Spring MVC
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Allow CORS for all endpoints
                .allowedOrigins("http://localhost:3000")  // Allow requests from localhost:3000
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")  // Allow specified HTTP methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true);
    }
}
