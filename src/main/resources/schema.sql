DROP TABLE IF EXISTS customer;

CREATE TABLE customer(
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    last_name VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL
);


DROP TABLE IF EXISTS transactions;

CREATE TABLE transactions(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	customer_id INTEGER NOT NULL,
	amount INTEGER NOT NULL,
	order_date DATE NOT NULL,
	CONSTRAINT fk_customer FOREIGN KEY (customer_id)
	REFERENCES customer(id)
	);

