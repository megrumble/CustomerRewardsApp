package com.megrumble.springweb.service;

import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.megrumble.springweb.model.RewardPointRequest;
import com.megrumble.springweb.model.Transaction;
import com.megrumble.springweb.repository.TransactionRepository;
import com.megrumble.springweb.util.PointsCalculator;


@Service
public class TransactionService implements TransactionServiceIF {
	
	private TransactionRepository repo;
	
	
	@Autowired
	public TransactionService(TransactionRepository repo) {
		this.repo = repo;
	}

	@Override
	public List<Transaction> getTransactionByCustomerId(int id) {
		List<Transaction> transactions = repo.findAllByCustomerId(id);
		return transactions;
	}
	@Override
	public Transaction addTransaction(Transaction transaction) {
		Transaction t = repo.save(transaction);
		return t;
	}

	@Override
	public int getPointsByCustomerAndMonth(RewardPointRequest request) {
		//un-package request
		int customerId = request.getCustomerId();
		String year = request.getYear();
		String month = request.getMonth();
		// date range for JPA
		LocalDate[] dateRange = generateDateRange(year, month);
		List<Transaction> transactionList = repo.findAllByCustomerIdAndOrderDateBetween(customerId, dateRange[0], dateRange[1]);
		int points = transactionList
				.stream()
				.map(transaction -> new PointsCalculator(transaction.getAmount()))
				.mapToInt(PointsCalculator::getRewardPoints).sum();

		return points;
	}


	private LocalDate[] generateDateRange(String year, String month) {
		LocalDate initial = LocalDate.of(Integer.valueOf(year), Integer.valueOf(month), 15);
		LocalDate start = initial.withDayOfMonth(1);
		LocalDate end = initial.withDayOfMonth(initial.lengthOfMonth());
		return new LocalDate[] {start, end};
	}

}
