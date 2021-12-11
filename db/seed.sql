INSERT INTO department (dept_name)
VALUES
    ('Accounting'),
    ('Purchasing'),
    ('Technology'),
    ('Human Resources'),
    ('Maintenance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Account Manager', 150000, 1),
    ('Math Guy', 90000, 1),
    ('Purchase Manager', 80000, 2),
    ('Buyer', 80000, 2),
    ('Tech Manager', 100000, 3),
    ('Technician', 50000, 3),
    ('Administrator', 100000, 4),
    ('Payroll', 90000, 4),
    ('Maintenance Manager', 100000, 5),
    ('Mechanic', 80000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Steve', 'Stevens', 1, NULL),
    ('Wilma', 'Wilmenson', 2, 1),
    ('Zoob', 'Dooberson', 3, NULL),
    ('Charlotte', 'Dingingy', 4, 3),
    ('Grogongo', 'Tarnarnan', 5, NULL),
    ('Pamela', 'Scamela', 6, 5),
    ('Sylvester', 'Barnacle', 7, NULL),
    ('Pan', 'Cake', 8, 7),
    ('Darwin', 'Ism', 9, NULL),
    ('Karen', 'Yellsalot', 10, 9)
    ;