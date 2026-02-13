CREATE TABLE `jobApplications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`position` varchar(255) NOT NULL,
	`resumeUrl` text NOT NULL,
	`resumeKey` text NOT NULL,
	`portfolioUrl` text,
	`message` text,
	`status` enum('pending','reviewed','rejected','accepted') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `jobApplications_id` PRIMARY KEY(`id`)
);
