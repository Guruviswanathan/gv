package com.gvproducts.product1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class Productservice {
	
 @Autowired
private Productrepository repo;

 public List<product> listAll() {
     return (List<product>) repo.findAll();
 }
  
 public void save(product product) {
     repo.save(product);
 }
  
 public product get(Integer id) {
     return repo.findById(id).get();
 }
  
 public void delete(Integer id) {
     repo.deleteById(id);
     
 }
 
}
 
 
 

