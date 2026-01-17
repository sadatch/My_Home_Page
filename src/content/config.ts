// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});
// ★新規追加: プロジェクト用
const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		badge: z.string().optional(),
		tags: z.array(z.string()).optional(),
        url: z.string().optional(), // 成果物のURL（GitHubなど）
	}),
});

export const collections = {
	'blog': blogCollection,
};

