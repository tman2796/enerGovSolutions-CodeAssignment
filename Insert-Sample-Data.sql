INSERT INTO employees (id, first_name, last_name, manager_id)
VALUES (1, 'Jeffrey', 'Wells', 1),
       (2, 'Victor', 'Atkins', 2),
       (3, 'Kelli', 'Hamilton', 3),
       (4, 'Adam', 'Braun', NULL),
       (5, 'Lois', 'Martinez', NULL),
       (6, 'Brian', 'Cruz', NULL),
       (7, 'Michael', 'Lind', NULL),
       (8, 'Kristen', 'Floyd', NULL),
       (9, 'Eric', 'Bay', NULL),
       (10, 'Brandon', 'Young', NULL);

INSERT INTO roles (id, name)
VALUES (1, 'Director'),
       (2, 'IT'),
       (3, 'Support'),
       (4, 'Accounting'),
       (5, 'Analyst'),
       (6, 'Sales');

INSERT INTO employee_roles (employee_id, role_id)
VALUES (1, 1),
       (2, 1),
       (3, 1),
       (4, 3),
       (4, 2),
       (5, 3),
       (6, 4),
       (7, 5),
       (8, 5),
       (8, 6),
       (9, 2),
       (9, 6),
       (10, 4);

INSERT INTO managers (manager_id, employee_id)
VALUES (1, 1),
       (2, 2),
       (3, 3);
