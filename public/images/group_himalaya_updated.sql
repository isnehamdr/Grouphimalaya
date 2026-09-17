-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2026 at 12:36 PM
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
-- Database: `group_himalaya_updated`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_logs`
--

CREATE TABLE `admin_logs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip` varchar(45) NOT NULL,
  `action` varchar(255) NOT NULL,
  `modified_by` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_logs`
--

INSERT INTO `admin_logs` (`id`, `ip`, `action`, `modified_by`, `created_at`, `updated_at`) VALUES
(1, '127.0.0.1', 'Updated blog: Himalaya Organization Expands Electric Vehicle Portfolio in Nepal 123', 'Admin', '2026-04-20 05:10:20', '2026-04-20 05:10:20'),
(2, '127.0.0.1', 'Added blog: php artisan migrate', 'Admin', '2026-04-20 06:00:45', '2026-04-20 06:00:45'),
(3, '127.0.0.1', 'Deleted blog: php artisan migrate', 'Admin', '2026-04-20 06:00:58', '2026-04-20 06:00:58'),
(4, '127.0.0.1', 'Logged in', 'Admin', '2026-04-20 22:47:01', '2026-04-20 22:47:01'),
(5, '127.0.0.1', 'Logged out', 'Admin', '2026-04-20 22:48:03', '2026-04-20 22:48:03'),
(6, '127.0.0.1', 'Logged in', 'Admin', '2026-04-20 23:23:02', '2026-04-20 23:23:02'),
(7, '127.0.0.1', 'Logged out', 'Admin', '2026-04-20 23:23:13', '2026-04-20 23:23:13'),
(8, '127.0.0.1', 'Logged in', 'Admin', '2026-04-20 23:27:07', '2026-04-20 23:27:07'),
(9, '127.0.0.1', 'Logged out', 'Admin', '2026-04-20 23:27:23', '2026-04-20 23:27:23'),
(10, '127.0.0.1', 'Logged in', 'Admin', '2026-04-20 23:28:32', '2026-04-20 23:28:32'),
(11, '127.0.0.1', 'Logged out', 'Admin', '2026-04-20 23:28:37', '2026-04-20 23:28:37'),
(12, '127.0.0.1', 'Logged in', 'Admin', '2026-04-20 23:28:42', '2026-04-20 23:28:42'),
(13, '127.0.0.1', 'Logged out', 'Admin', '2026-04-20 23:36:07', '2026-04-20 23:36:07'),
(14, '127.0.0.1', 'Logged in', 'Admin', '2026-04-20 23:45:09', '2026-04-20 23:45:09'),
(15, '127.0.0.1', 'Logged out', 'Admin', '2026-04-20 23:54:47', '2026-04-20 23:54:47'),
(16, '127.0.0.1', 'Logged in', 'Admin', '2026-04-21 00:16:14', '2026-04-21 00:16:14'),
(17, '127.0.0.1', 'Logged in', 'Admin', '2026-04-22 01:25:23', '2026-04-22 01:25:23'),
(18, '127.0.0.1', 'Logged out', 'Admin', '2026-04-22 01:35:45', '2026-04-22 01:35:45'),
(19, '127.0.0.1', 'Logged in', 'Admin', '2026-04-22 01:35:50', '2026-04-22 01:35:50'),
(20, '127.0.0.1', 'Logged out', 'Admin', '2026-04-22 06:00:34', '2026-04-22 06:00:34'),
(21, '127.0.0.1', 'Logged in', 'Admin', '2026-04-22 06:00:37', '2026-04-22 06:00:37');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `status` enum('draft','published') NOT NULL DEFAULT 'draft',
  `image` varchar(255) DEFAULT NULL,
  `meta_description` varchar(160) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `slug`, `content`, `status`, `image`, `meta_description`, `created_at`, `updated_at`) VALUES
(4, 'Himalaya Organization Expands Electric Vehicle Portfolio in Nepal', 'himalaya-organization-expands-electric-vehicle-portfolio-in-nepal', '<p><span style=\"background-color: rgb(11, 12, 16); color: rgb(255, 255, 255);\">Himalaya Organization Expands Electric Vehicle Portfolio in Nepal Himalaya Organization Expands Electric Vehicle Portfolio in Nepal Himalaya Organization Expands Electric Vehicle Portfolio in NepalHimalaya Organization Expands Electric Vehicle Portfolio in Nepal</span></p>', 'published', 'blogs/6mXDepKPsnx9BTk2yk7wiewVJjEwTBrBsABvuKv5.jpg', 'Himalaya Organization Expands Electric Vehicle Portfolio in Nepal', '2026-04-20 04:21:31', '2026-04-20 04:21:31'),
(5, 'Himalaya Organization Expands Auto Motive Vehicle Portfolio in Nepal', 'himalaya-organization-expands-auto-motive-vehicle-portfolio-in-nepal', '<p>Himalaya Organization Expands Auto Motive Vehicle Portfolio in Nepal Himalaya Organization Expands Auto Motive Vehicle Portfolio in Nepal Himalaya Organization Expands Auto Motive Vehicle Portfolio in Nepal Himalaya Organization Expands Auto Motive Vehicle Portfolio in NepalHimalaya Organization Expands Auto Motive Vehicle Portfolio in Nepal</p>', 'published', 'blogs/Xzw2GkllRj0aaNAwIEC0qCysvYEMntM2TUCzPzRD.webp', 'Himalaya Organization Expands Auto Motive Vehicle Portfolio in NepalHimalaya Organization Expands Auto Motive Vehicle Portfolio in Nepal', '2026-04-20 04:29:23', '2026-04-20 04:29:23'),
(6, 'Himalaya Organization Expands Electric Vehicle Portfolio in Nepal 123', 'himalaya-organization-expands-electric-vehicle-portfolio-in-nepal-123', '<p><span style=\"color: rgb(75, 85, 99); background-color: rgb(18, 19, 24);\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, impedit doloribus iusto vel harum voluptatibus quam perspiciatis laboriosam omnis provident.</span></p>', 'draft', 'blogs/N3gcfaEUSI5GbV7KcHGka68LgrJGHpuTiAA3ZNfa.jpg', 'Himalaya Organization Expands Electric Vehicle Portfolio in Nepal', '2026-04-20 04:41:50', '2026-04-20 05:10:20');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `employment_type` varchar(255) NOT NULL,
  `work_mode` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `status` enum('draft','published') NOT NULL DEFAULT 'draft',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `title`, `slug`, `employment_type`, `work_mode`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Sales Executive', 'sales-executive', 'Full Time', 'Onsite', '<p><span style=\"background-color: rgb(18, 19, 24); color: rgb(75, 85, 99);\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, impedit doloribus iusto vel harum voluptatibus quam perspiciatis laboriosam omnis provident.</span></p>', 'published', '2026-04-20 04:33:22', '2026-04-20 04:33:22'),
(2, 'Real Estate Project Manager', 'real-estate-project-manager', 'Contract', 'Hybrid', '<p><span style=\"background-color: rgb(18, 19, 24); color: rgb(75, 85, 99);\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, impedit doloribus iusto vel harum voluptatibus quam perspiciatis laboriosam omnis provident.</span></p>', 'published', '2026-04-20 04:33:53', '2026-04-20 04:33:53'),
(3, 'Finance & Banking Advisor', 'finance-banking-advisor', 'Full Time', 'Onsite', '<p><span style=\"background-color: rgb(18, 19, 24); color: rgb(75, 85, 99);\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, impedit doloribus iusto vel harum voluptatibus quam perspiciatis laboriosam omnis provident.</span></p>', 'published', '2026-04-20 04:34:38', '2026-04-20 04:34:38');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2026_04_07_074333_create_blogs_table', 2),
(5, '2026_04_07_112938_create_admin_logs_table', 3),
(6, '2026_04_20_000001_add_role_to_users_table', 4),
(7, '2026_04_20_000002_create_careers_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('WmBJfJbf3uprXG7kv4JvICIkMA1ea8sWk3nMr9uO', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36', 'eyJfdG9rZW4iOiJBRUwzY3VVdmNOZ0YxWHhJV0U2M1ZQRGZ6WlNqcHFJb3VuR0VJVmdWIiwiX3ByZXZpb3VzIjp7InVybCI6Imh0dHA6XC9cLzEyNy4wLjAuMTo4MDAwIiwicm91dGUiOm51bGx9LCJfZmxhc2giOnsib2xkIjpbXSwibmV3IjpbXX19', 1776938328);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Admin', 'admin@gmail.com', NULL, '$2y$12$RsrL0GANEbbgLbKN8XlSVeSH46/4Y.hoTyFlAQuqXzCQ22d.qjg8G', 'admin', NULL, '2026-04-20 04:58:03', '2026-04-20 23:22:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_logs`
--
ALTER TABLE `admin_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `blogs_title_unique` (`title`),
  ADD UNIQUE KEY `blogs_slug_unique` (`slug`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_expiration_index` (`expiration`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`),
  ADD KEY `cache_locks_expiration_index` (`expiration`);

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `careers_title_unique` (`title`),
  ADD UNIQUE KEY `careers_slug_unique` (`slug`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_logs`
--
ALTER TABLE `admin_logs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
