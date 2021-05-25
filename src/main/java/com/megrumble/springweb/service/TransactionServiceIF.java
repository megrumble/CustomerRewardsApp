package com.megrumble.springweb.service;

import java.util.List;

import com.megrumble.springweb.model.RewardPointRequest;
import com.megrumble.springweb.model.Transaction;

public interface TransactionServiceIF {
	
	List<Transaction> getTransactionByCustomerId(int id);
	
	Transaction addTransaction(Transaction transaction);
	
	int getPointsByCustomerAndMonth(RewardPointRequest request);
	

}
