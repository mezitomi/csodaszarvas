CREATE TABLE `lane_availability` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` integer NOT NULL,
	`start_time` integer NOT NULL,
	`end_time` integer NOT NULL,
	`available_lanes` integer DEFAULT 5 NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lane_availability_date_startTime_endTime_unique` ON `lane_availability` (`date`,`start_time`,`end_time`);--> statement-breakpoint
ALTER TABLE `booking` DROP COLUMN `booking_date`;