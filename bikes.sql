-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 18. 17:07
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `bikes`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bikes`
--

CREATE TABLE `bikes` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `img` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `gear_id` int(11) NOT NULL,
  `break` varchar(30) NOT NULL,
  `size` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `bikes`
--

INSERT INTO `bikes` (`id`, `name`, `img`, `category_id`, `gear_id`, `break`, `size`) VALUES
(1, 'Bianchi Oltre', '../img/bianchioltre.jpg', 1, 1, 'Tárcsa fék', 54),
(2, 'Trek Malin', '../img/trekmalin.jpg', 2, 1, 'tárcsa fékes', 57),
(3, 'Neuzer Firenze 100', '../img/neuzerfirenze.jpg', 1, 2, 'Tárcsa fék', 17),
(4, 'string', 'string', 1, 1, 'string', 0),
(6, 'string', 'string', 1, 1, 'string', 0),
(7, 'Proba Bike', 'https://cdn.nwmgroups.hu/s/img/i/1711/20171120mango1.jpg', 1, 1, 'hagyomanyos_fek', 52),
(9, 'Mangó', 'https://cdn.nwmgroups.hu/s/img/i/1711/20171120mango1.jpg', 1, 1, 'Tárcsa fék', 56),
(10, 'Mangó', 'https://cdn.nwmgroups.hu/s/img/i/1711/20171120mango1.jpg', 1, 1, 'Hagyományos fék', 56);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'országúti kerékpár'),
(2, 'mountainbike kerékpár'),
(3, 'gravel kerékpár'),
(4, 'trekking kerékpár'),
(5, 'bmx kerékpár'),
(6, 'kemping kerékpár'),
(7, 'gyerek kerékpár');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gear`
--

CREATE TABLE `gear` (
  `id` int(11) NOT NULL,
  `gear_name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `gear`
--

INSERT INTO `gear` (`id`, `gear_name`) VALUES
(1, 'Simano'),
(2, 'SORA'),
(3, 'Sram'),
(4, 'Companolo');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `bikes`
--
ALTER TABLE `bikes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`,`gear_id`),
  ADD KEY `gear_id` (`gear_id`);

--
-- A tábla indexei `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `gear`
--
ALTER TABLE `gear`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `bikes`
--
ALTER TABLE `bikes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT a táblához `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `gear`
--
ALTER TABLE `gear`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `bikes`
--
ALTER TABLE `bikes`
  ADD CONSTRAINT `bikes_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bikes_ibfk_2` FOREIGN KEY (`gear_id`) REFERENCES `gear` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
