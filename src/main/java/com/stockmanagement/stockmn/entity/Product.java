package com.stockmanagement.stockmn.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Product {
    @Id
    private String product_id;
    private String product_name;
    private int selling_price;
    private int selling_percentage;
    private int sale_item;
    private int sale_percentage;
    private int buying_price;
    private int stock_clearing_item;
    private int stock_clearing_price;
    private int quantity;
    private String vendor_name;
    private String material_type;
    private String material_name;
}