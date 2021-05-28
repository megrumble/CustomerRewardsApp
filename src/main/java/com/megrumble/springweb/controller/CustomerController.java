package com.megrumble.springweb.controller;

import com.megrumble.springweb.model.Customer;
import com.megrumble.springweb.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CustomerController {

    private CustomerRepository repository;

    @Autowired
    public CustomerController(CustomerRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/customers")
    public List<Customer> getCustomers() {
        return repository.findAll();
    }

    @GetMapping("/customers/{id}")
    public Customer getCustomerById(@PathVariable int id){
        return repository.findById(id).get();
    }

    @PostMapping("/customers")
    public Customer saveCustomer(Customer customer) {
        return repository.save(customer);
    }
}
