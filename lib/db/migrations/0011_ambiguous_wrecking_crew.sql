CREATE TABLE `opening` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`day_of_week` integer NOT NULL,
	`start_hour` integer NOT NULL,
	`end_hour` integer NOT NULL,
	`available_lanes` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`updated_by` integer NOT NULL,
	`created_by` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `opening_dayOfWeek_startHour_endHour_unique` ON `opening` (`day_of_week`,`start_hour`,`end_hour`);