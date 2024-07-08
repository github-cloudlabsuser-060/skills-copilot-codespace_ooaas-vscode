---- Create a table for 5 products with product names and prices
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);




INSERT INTO Products (ProductID, ProductName, Price) VALUES
(1, 'Laptop', 1200.00),
(2, 'Smartphone', 800.00),
(3, 'Tablet', 450.00),
(4, 'Headphones', 150.00),
(5, 'Smartwatch', 300.00);


--se puede pedir la creacion de esta tabla y al final se pulsa control enter para que genere el codigo
-- Create a oracle table for cities of usa with city code, city name, state code, state name,   poblation in 2000, poblation in 2020, and GPS coordenates of the capital in standar magna sirgas

--crea el sigueinte texto:CREATE TABLE cities (
    city_code VARCHAR(10) PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    state_code VARCHAR(10) NOT NULL,
    state_name VARCHAR(100) NOT NULL,
    poblation_2000 INT NOT NULL,
    poblation_2020 INT NOT NULL,
    gps_coord VARCHAR(100) NOT NULL
);

INSERT INTO cities (city_code, city_name, state_code, state_name, poblation_2000, poblation_2020, gps_coord) VALUES
('NYC', 'New York City', 'NY', 'New York', 8008278, 8804190, '40.712776, -74.005974'),
('LA', 'Los Angeles', 'CA', 'California', 3694820, 3979576, '34.052235, -118.243683'),
('CHI', 'Chicago', 'IL', 'Illinois', 2896016, 2746388, '41.878113, -87.629799'),
('HOU', 'Houston', 'TX', 'Texas', 1953631, 2316120, '29.760427, -95.369804'),
('PHI', 'Philadelphia', 'PA', 'Pennsylvania', 1517550, 1584064, '39.952583, -75.165222'),
('PHO', 'Phoenix', 'AZ', 'Arizona', 1321045, 1680992, '33.448376, -112.074036'),
('SAN', 'San Antonio', 'TX', 'Texas', 1144646, 1547253, '29.424349, -98.491142'),
('SD', 'San Diego', 'CA', 'California', 1223400, 1423851, '32.715736, -117.161087'),
('DAL', 'Dallas', 'TX', 'Texas', 1188580, 1343573, '32.776272, -96.796856'),
('SJ', 'San Jose', 'CA', 'California', 894943, 1030119, '37.338208, -121.886329');


