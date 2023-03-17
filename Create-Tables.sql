CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);

CREATE TABLE roles (
  id INT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE employee_roles (
  employee_id INT,
  role_id INT,
  PRIMARY KEY (employee_id, role_id),
  FOREIGN KEY (employee_id) REFERENCES employees(id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE managers (
  manager_id INT,
  employee_id INT,
  PRIMARY KEY (manager_id, employee_id),
  FOREIGN KEY (manager_id) REFERENCES employees(id),
  FOREIGN KEY (employee_id) REFERENCES employees(id)
);