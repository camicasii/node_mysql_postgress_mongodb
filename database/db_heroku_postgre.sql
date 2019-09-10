CREATE DATABASE b2fcev1eevxoxvzog5bi;


USE b2fcev1eevxoxvzog5bi;
CREATE TABLE users (
   ID SERIAL PRIMARY KEY     NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

CREATE TABLE  links (
    ID SERIAL PRIMARY KEY     NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(250) NOT NULL,
    description TEXT,
    user_id INT,
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE  links (
    ID SERIAL PRIMARY KEY     NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(250) NOT NULL,
    description TEXT,
    user_id INT,
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);



