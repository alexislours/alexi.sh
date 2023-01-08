import type { Project } from '$lib/types/project';
import { getEntries } from '$utils/entries';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const projects: Project[] = getEntries('projects').sort((a, b) => b.start.localeCompare(a.start));
	
	if (!projects) {
		throw error(404, 'No project found');
	}

	return {
		projects: projects
	};
}