import type { Project } from "$lib/types/project";
import { getProjects } from "$utils/entries";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const projects: Project[] = getProjects();

	if (!projects) {
		throw error(404, "No project found");
	}

	return {
		projects: projects
	};
}
