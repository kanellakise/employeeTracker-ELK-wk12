INSERT INTO department (dept_name)
VALUES
    ('Accounting'),
    ('Purchasing'),
    ('Technology'),
    ('Human Resources'),
    ('Maintenance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Zoo Poop Scooper', 15000, 5),
    ('Magic Chocolateer', 70000, 4),
    ('Kay Jeweler', 200000, 2),
    ('Iphone Scammer', 4500, 3),
    ('Check Writer', 60000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Steve', 'Stevens', 4),
    ('Wilma', 'Wilmenson', 3, 1),
    ('Zoob', 'Dooberson', 5, 1),
    ('Charlotte', 'Dingingy', 3, 1),
    ('Grogongo', 'Tarnarnan', 2);