-- Engineering --
    -- Lead Engineer --
        -- Pernel Irinei --
    -- Senior Engineer --
        -- Seth Smith --
        -- Sansa Brady --
    -- Junior Engineer --
        -- Roxanne Johnson --
-- Accounting --
    -- CFO --
        -- Lexy Miloslava --
    -- CMA --
        -- Agnes Martinez --
        -- Julio Silva --
    -- Comptroller --
        -- Margaret Heraclius --
-- Sales --
    -- Sales Manager --
        -- Dylan Watanabe --
    -- Senior Salesperson --
        -- Elijah Weathers --
        -- Colin Riches --
    -- Junior Salesperson --
        -- Kristine Welsh --
-- Human Resources --
    -- Director --
        -- Job Stephens --
    -- Specialist --
        -- Vince McGilly --
        -- Wyatt Dewthat --

INSERT INTO department (name)
    VALUES
    ('Engineering'), -- 1
    ('Accounting'), -- 2
    ('Sales'), -- 3
    ('Human Resources'); -- 4

INSERT INTO role (title, salary, department_id)
VALUES
('Lead Engineer'),
('Senior Engineer'),
('Junior Engineer'),
('CFO'),
('CMA'),
('Comptroller'),
('Sales Manager'),
('Senior Salesperson'),
('H.R. Director'),
('H.R. Specialist');

CREATE TABLE employee (first_name, last_name, role_id, manager_id)
VALUES
('Pernel', 'Irinei'),
('Seth', 'Smith'),
('Sansa', 'Brady'),
('', ''),
('', ''),
('', ''),
('', ''),
('', ''),
('', ''),
('', ''),
('', ''),
('', ''),
('', ''),