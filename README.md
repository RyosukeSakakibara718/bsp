# bsp
A project management tool that allows managers to track member work hours and calculate/forecast gross profit based on the tracked data. This app helps in efficient resource allocation and profitability analysis.

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);