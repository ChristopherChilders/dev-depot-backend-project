insert into users
(first_name, last_name, email, username, password)
values
('chris', 'childers', 'childers@yahoo.com', 'CSquared', 'password'),
('ryan', 'yim', 'email@email.com', 'Ryman', 'password'),
('victor', 'troung', 'franken@stein.net', 'VDog', 'password'),
('jason', 'boerner', 'jason@bourne.blackbriar', 'JB', 'password');

INSERT into frameworks
(name, code)
values
('index.js', 'the path'),
('schema.sql', 'the path'),
('conn.js', 'the path');

insert into methods
(name, code)
VALUES
('users model', 'the path'),
('users controller', 'the path'),
('users route', 'the path');

insert into favorites
(user_id, framework_id, method_id)
values
(1, 2, 2),
(3, 1, 3),
(2, 3, 3),
(4, 2, 1);