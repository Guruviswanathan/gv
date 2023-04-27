package com.gvproducts.product1;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Productcontroller {
	@Autowired
	private Productservice service;
	@RequestMapping("/")
	public String viewHomePage(Model model) {
	    List<product> listProducts = service.listAll();
	    model.addAttribute("listProducts", listProducts);
	     
	    return "index";
	}
	    @RequestMapping("/new")
	    public String showNewProductPage(Model model) {
	        Product1Application product = new Product1Application();
	        model.addAttribute("product", product);
	         
	        return "new_product";  
	        
	        


}
}
