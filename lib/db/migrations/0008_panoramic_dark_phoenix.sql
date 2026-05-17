CREATE TABLE `payment` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`booking_id` integer NOT NULL,
	`pass_id` integer,
	`lanes_from_pass` integer DEFAULT 0 NOT NULL,
	`lanes_from_deposit` integer DEFAULT 0 NOT NULL,
	`deposit_amount` integer,
	`payment_status` text NOT NULL,
	`created_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`booking_id`) REFERENCES `booking`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`pass_id`) REFERENCES `pass`(`id`) ON UPDATE no action ON DELETE set null
);
