CREATE DATABASE typescriptdatabase;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email VARCHAR(255)
);

INSERT INTO users (name, email)
        VALUES  ('joe', 'joe@me.com'),
                ('jane', 'jane@me.com');




