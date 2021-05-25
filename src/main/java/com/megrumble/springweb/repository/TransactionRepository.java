package com.megrumble.springweb.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.megrumble.springweb.model.Transaction;
@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
	
	List<Transaction> findAllByCustomerId(int customerId);
	
	List<Transaction> findAllByCustomerIdAndOrderDateBetween(int customerId, LocalDate startDate, LocalDate endDate);

}
