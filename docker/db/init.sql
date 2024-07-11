-- -- Create a database
-- CREATE DATABASE IF NOT EXISTS mydatabase;

-- -- Switch to the newly created database
-- \c mydatabase;

-- -- Create a table
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(100) NOT NULL
-- );

-- -- Insert some initial data
-- INSERT INTO users (username, email) VALUES
--     ('user1', 'user1@example.com'),
--     ('user2', 'user2@example.com');

-- -- Create a user with privileges on the database
-- CREATE USER myuser WITH ENCRYPTED PASSWORD 'mypassword';
-- GRANT ALL PRIVILEGES ON DATABASE mydatabase TO myuser;

-- -- Enable the "uuid-ossp" extension (optional)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
