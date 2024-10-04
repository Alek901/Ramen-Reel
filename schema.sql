-- DROP SCHEMA
DROP SCHEMA IF EXISTS ramenreel_db;
-- CREATE SCHEMA
CREATE SCHEMA ramenreel_db;
-- CREATE the genre table
CREATE TABLE genre (
    id INTEGER PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);
-- Create the anime table
CREATE TABLE anime (
    ID INTEGER PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre INTEGER,
    FOREIGN KEY (genre) REFERENCES genre(id)
);
-- Create the users table
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    role VARCHAR(50),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Create the list table
CREATE TABLE lists (
    id INTEGER PRIMARY KEY,
    anime_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (anime_id) REFERENCES anime(ID),
    FOREIGN KEY (user_id) REFERENCES users(id)
); (edited) 
:raised_hands:
1

