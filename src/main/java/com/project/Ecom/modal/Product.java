package com.project.Ecom.modal;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.math.BigDecimal;
import java.security.Timestamp;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String category;
    private String brand;
    private BigDecimal price;
    private Date releaseDate;
    private Boolean available;
    private Integer quantity;
    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageDate;

}
