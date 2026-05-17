CREATE TABLE `cron_run` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`job_name` text NOT NULL,
	`status` text DEFAULT 'running' NOT NULL,
	`started_at` integer NOT NULL,
	`finished_at` integer,
	`error_message` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `slot_adjustment_request` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date_from` integer NOT NULL,
	`date_to` integer NOT NULL,
	`requested_start_hours` text NOT NULL,
	`is_closed` integer DEFAULT 0 NOT NULL,
	`requested_available_lanes` integer,
	`note` text,
	`status` text DEFAULT 'active' NOT NULL,
	`created_by` integer NOT NULL,
	`created_at` integer NOT NULL,
	`reverted_by` integer,
	`reverted_at` integer
);
--> statement-breakpoint
ALTER TABLE `lane_availability` ADD `is_closed` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `lane_availability` ADD `is_overridden` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `lane_availability` ADD `adjustment_request_id` integer REFERENCES slot_adjustment_request(id);