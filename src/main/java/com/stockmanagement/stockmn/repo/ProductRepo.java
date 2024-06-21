package com.stockmanagement.stockmn.repo;

import com.stockmanagement.stockmn.entity.Product;
import com.stockmanagement.stockmn.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import static org.hibernate.FetchMode.SELECT;
import static org.springframework.http.HttpHeaders.FROM;

public interface ProductRepo extends JpaRepository<Product, String> {
    @Query(value = "SELECT SUM(quantity) FROM product", nativeQuery = true)
    Integer getTotalQuantity();

    @Query(value = "SELECT * FROM product WHERE product_id = ?1", nativeQuery = true)
    Product getProductByProductId(String productId);

    @Query(value = "SELECT SUM(buying_price) FROM product", nativeQuery = true)
    Integer getTotalBuyingPrice();

    @Query(value = "SELECT (sale_item_count / row_count) AS result FROM ( SELECT (SELECT COUNT(*) AS row_count FROM stock_management.product) AS row_count, (SELECT SUM(sale_item) FROM product) AS sale_item_count) AS subquery", nativeQuery = true)
    Double getSalePercentage();

    @Query(value = "SELECT (stock_item_count / row_count) AS result FROM ( SELECT (SELECT COUNT(*) AS row_count FROM stock_management.product) AS row_count, (SELECT SUM(stock_clearing_item) FROM product) AS stock_item_count) AS subquery", nativeQuery = true)
    Double getStockPercentage();

    @Query(value = "SELECT * FROM product WHERE material_name = ?1", nativeQuery = true)
    List<Product> getproductByMaterialName(String material_name);
}

