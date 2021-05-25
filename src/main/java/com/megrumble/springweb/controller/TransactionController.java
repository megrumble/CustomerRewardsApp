package com.megrumble.springweb.controller;

import java.util.List;

import com.megrumble.springweb.model.RewardPointRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.megrumble.springweb.model.Transaction;
import com.megrumble.springweb.service.TransactionService;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
	
	private TransactionService service;
	
	@Autowired
	public TransactionController(TransactionService service) {
		this.service = service;
	}
	
	@GetMapping("/customer/{id}")
	public List<Transaction> getTransactionsByCustomerId(@PathVariable int id) {
		List<Transaction> transactions = service.getTransactionByCustomerId(id);
		return transactions;
	}

	@PostMapping("/customer")
	public Transaction addTransaction(@RequestBody Transaction transaction) {
		Transaction trans = service.addTransaction(transaction);
		return trans;
	}

	@PostMapping("/")
	public int getRewardsPoints(@RequestBody RewardPointRequest request) {
		int points = service.getPointsByCustomerAndMonth(request);
		return points;
	}
	
	

}
