create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100), 
    email varchar(200),
    username VARCHAR(50),
    password varchar(500)    
);

create table frameworks (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    code VARCHAR(500)
);

create table favorites (
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    frameworks INTEGER REFERENCES frameworks(id),
    methods INTEGER REFERENCES methods(id)
);

create table methods (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    code VARCHAR(500)
);