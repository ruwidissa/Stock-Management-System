package com.stockmanagement.stockmn.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDTO {

    // Private fields representing product information
    private String product_id;
    private String product_name;
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
    private String vendor_address;
    private String vendor_type;
    private int selling_price;

}
