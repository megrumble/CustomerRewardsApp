package com.megrumble.springweb.util;

import lombok.Data;

@Data
public class PointsCalculator {
	
	private int amount;
	private int onePointCounts;
	private int twoPointCounts;
	private int rewardPoints;

	public PointsCalculator(int amount) {
		this.amount = amount;
		this.onePointCounts = countOnePoints(amount);
		this.twoPointCounts = countTwoPoints(amount);
		this.rewardPoints = this.onePointCounts + this.twoPointCounts;
	
		}

	
	private int countOnePoints(int amount) {
		if( amount > 50 && amount <= 100) {
			return amount - 50;
		}else {
			return 0;
		}
	}

	private int countTwoPoints(int amount) {
		if( amount > 100) {
			return (amount - 100) * 2 + 50;
		}else {
			return 0;
		}
	}
	

	public int getRewardPoints() {
		return rewardPoints;
	}

	public void setRewardPoints(int rewardPoints) {
		this.rewardPoints = rewardPoints;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}



}
