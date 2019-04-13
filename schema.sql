create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100), 
    email varchar(200),
    username VARCHAR(50),
    password varchar(500)    
);

create table json_packages (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    packages VARCHAR(100),
    installations VARCHAR(250),
    scripts VARCHAR(500)
);

create table reviews (
    id serial PRIMARY KEY,
    user_id INTEGER,
    topic VARCHAR(100),
    content varchar(500)
);

create table favorites (
    id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(id)
);