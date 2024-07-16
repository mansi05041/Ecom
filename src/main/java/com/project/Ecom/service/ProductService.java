package com.project.Ecom.service;

import com.project.Ecom.modal.Product;
import com.project.Ecom.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    // Get the all products
    public ResponseEntity<List<Product>> getAllProducts() {
        try {
            return new ResponseEntity<>(productRepo.findAll(), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> addProduct(Product product, MultipartFile imageFile) {
        try {
            product.setImageName(imageFile.getOriginalFilename());
            product.setImageType(imageFile.getContentType());
            product.setImageDate(imageFile.getBytes());
            productRepo.save(product);
            return new ResponseEntity<>("Product is added",HttpStatus.CREATED);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Failed to add",HttpStatus.BAD_REQUEST);
    }

    // get product by id
    public ResponseEntity<Optional<Product>> getProduct(Integer id) {
        try {
            Optional<Product> productOptional = productRepo.findById(id);
            return new ResponseEntity<>(productOptional,HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }
}
