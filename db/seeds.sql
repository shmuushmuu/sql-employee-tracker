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
('Lead Engineer', 200000, 1), -- 1 --
('Senior Engineer', 150000, 1), -- 2 --
('Junior Engineer', 85000, 1), -- 3 --
('CFO', 215000, 2), -- 4 --
('CMA', 100000, 2), -- 5 --
('Comptroller', 170000, 2), -- 6 --
('Sales Manager', 140000, 3), -- 7 --
('Senior Salesperson', 120000, 3), -- 8 --
('Junior Salesperson', 70000, 3), -- 9 --
('H.R. Director', 150000, 4), -- 10 --
('H.R. Specialist', 90000, 4); -- 11 --

CREATE TABLE employee (first_name, last_name, role_id, manager_id)
VALUES
('Pernel', 'Irinei', 1),
('Seth', 'Smith', 2),
('Sansa', 'Brady', 2),
('Roxanne', 'Johnson', 3),
('Lexy', 'Miloslava', 4),
('Agnes', 'Martinez', 5),
('Julio', 'Silva', 5),
('Margaret', 'Heraclius', 6),
('Dylan', 'Watanabe', 7),
('Elijah', 'Weathers', 8),
('Colin', 'Riches', 8),
('Kristine', 'Welsh', 9),
('Job', 'Stephens', 10),
('Vince', 'McGilly', 11),
('Wyatt', 'Dewthat', 11),