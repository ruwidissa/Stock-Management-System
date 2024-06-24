-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2024 at 11:34 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stock_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` varchar(255) NOT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `selling_percentage` int(11) NOT NULL,
  `sale_item` int(11) NOT NULL,
  `sale_percentage` int(11) NOT NULL,
  `buying_price` int(11) NOT NULL,
  `stock_clearing_item` int(11) NOT NULL,
  `stock_clearing_price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `vendor_name` varchar(255) DEFAULT NULL,
  `material_type` varchar(255) DEFAULT NULL,
  `material_name` varchar(255) DEFAULT NULL,
  `vendor_address` varchar(255) DEFAULT NULL,
  `vendor_type` varchar(255) DEFAULT NULL,
  `selling_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `selling_percentage`, `sale_item`, `sale_percentage`, `buying_price`, `stock_clearing_item`, `stock_clearing_price`, `quantity`, `vendor_name`, `material_type`, `material_name`, `vendor_address`, `vendor_type`, `selling_price`) VALUES
('AAA1719114829263', 'aaa', 0, 1, 44, 343, 0, 0, 44, 'ghg', 'Cotton', 'Trouser', 'fgdfg', 'Internal', 494),
('D1719071212843', 'ded', 0, 0, 0, 434, 1, 7878, 43, 'fgrfg', 'Cotton', 'Skirt', 'fggf', 'External', 7878),
('DFD1719081132347', 'dfdf', 4, 0, 0, 34, 0, 0, 33, 'fgd', 'Cotton', 'Shirt', NULL, 'Internal', 35),
('NOL1719080147563', 'nol', 43, 0, 0, 43, 0, 0, 43, '3r3', 'Cotton', 'Shirt', 'd', 'External', 61),
('ZZZ1719081218465', 'zzzz', 0, 0, 0, 55, 1, 545, 54, 'cdg', 'Polyester', 'Shirt', 'dfgdf', 'External', 545);

--
-- Triggers `product`
--
DELIMITER $$
CREATE TRIGGER `before_product_insert` BEFORE INSERT ON `product` FOR EACH ROW BEGIN
    IF NEW.stock_clearing_price IS NOT NULL AND NEW.stock_clearing_price > 0 THEN
        SET NEW.selling_price = NEW.stock_clearing_price;
    ELSE
        SET NEW.selling_price = NEW.buying_price + NEW.buying_price * (NEW.selling_percentage / 100) + NEW.buying_price * (NEW.sale_percentage / 100);
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `before_product_update` BEFORE UPDATE ON `product` FOR EACH ROW BEGIN
    IF NEW.stock_clearing_price IS NOT NULL AND NEW.stock_clearing_price > 0 THEN
        SET NEW.selling_price = NEW.stock_clearing_price;
    ELSE
        SET NEW.selling_price = NEW.buying_price + NEW.buying_price * (NEW.selling_percentage / 100) + NEW.buying_price * (NEW.sale_percentage / 100);
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `password`) VALUES
('test123@gmail.com', 'test123'),
('test@gmail.com', 'test123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
