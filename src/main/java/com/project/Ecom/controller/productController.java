package com.project.Ecom.controller;

import com.project.Ecom.modal.Product;
import com.project.Ecom.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class productController {
    @Autowired
    ProductService productService;

    // To get the products
    @GetMapping("/product")
    public ResponseEntity<List<Product>> getAllProducts() {
        return productService.getAllProducts();
    }

    // Get product by id
    @GetMapping("/product/{id}")
    public ResponseEntity<Optional<Product>> getProduct(@PathVariable Integer id){
        return productService.getProduct(id);
    }

    @PostMapping("/addProduct")
    public ResponseEntity<String> AddProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile){
        return productService.addProduct(product,imageFile);
    }
}
