package com.gvproducts.product1;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface Productrepository extends CrudRepository<product, Integer> {
	
}
