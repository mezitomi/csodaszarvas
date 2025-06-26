PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_news` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text NOT NULL,
	`content_hu` text NOT NULL,
	`content_en` text NOT NULL,
	`enabled` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`created_by` integer NOT NULL,
	`updated_by` integer NOT NULL,
	FOREIGN KEY (`created_by`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`updated_by`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_news`("id", "description", "content_hu", "content_en", "enabled", "created_at", "updated_at", "created_by", "updated_by") SELECT "id", "description", "content_hu", "content_en", "enabled", "created_at", "updated_at", "created_by", "updated_by" FROM `news`;--> statement-breakpoint
DROP TABLE `news`;--> statement-breakpoint
ALTER TABLE `__new_news` RENAME TO `news`;--> statement-breakpoint
PRAGMA foreign_keys=ON;