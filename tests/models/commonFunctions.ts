import { expect, type Page } from '../fixtures';

export async function createTemplateExerciseSplit(page: Page) {
	await page.getByLabel('exercise-split-new-options').click();
	await page.getByRole('menuitem', { name: 'Use template' }).click();
	await page.getByRole('button', { name: 'Pull Push Legs 7 days / cycle' }).click();
	await page.getByRole('button', { name: 'Next' }).click();
	await page.waitForURL('/exercise-splits/manage/exercises');
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByRole('button', { name: 'Save' }).click();
	await expect(
		page.getByRole('status').filter({ hasText: 'Exercise split created successfully' })
	).toBeVisible({ timeout: 10000 });
}
