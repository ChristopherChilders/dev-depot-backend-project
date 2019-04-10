insert into users
(first_name, last_name, email, username, password)
values
('chris', 'childers', 'childers@yahoo.com', 'CSquared', '$2a$10$oe2opdnnfX/Bh3LoN6xvxOBg8n23Oyxug2kpcabP5fJCwzeNxe/Pa'),
('ryan', 'yim', 'email@email.com', 'Ryman', '$2a$10$oe2opdnnfX/Bh3LoN6xvxOBg8n23Oyxug2kpcabP5fJCwzeNxe/Pa'),
('victor', 'troung', 'franken@stein.net', 'VDog', '$2a$10$oe2opdnnfX/Bh3LoN6xvxOBg8n23Oyxug2kpcabP5fJCwzeNxe/Pa'),
('jason', 'boerner', 'jason@bourne.blackbriar', 'JB', '$2a$10$oe2opdnnfX/Bh3LoN6xvxOBg8n23Oyxug2kpcabP5fJCwzeNxe/Pa');

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