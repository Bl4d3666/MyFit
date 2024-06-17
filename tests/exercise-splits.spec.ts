import { test, expect } from './fixtures';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Exercise splits' }).click();
});

test('test', async ({ page }) => {
	await page.getByLabel('exercise-split-new-options').click();
	await page.getByRole('menuitem', { name: 'Start from scratch' }).click();
	await page.getByPlaceholder('Type here').fill('Pull Push Legs');
	await page.getByRole('button', { name: 'Remove' }).click({
		clickCount: 5
	});

	await page.getByPlaceholder('Day 1').fill('Pull');
	await page.getByRole('row', { name: '2' }).getByRole('checkbox').click();
	await page.getByRole('button', { name: 'Next' }).click();

	await page.getByLabel('add-exercise').click();
	await page.getByPlaceholder('Type here or search...').fill('Custom exercise');
	await page.locator('button').filter({ hasText: 'Pick one' }).click();
	await page.getByRole('option', { name: 'Custom' }).click();
	await page.getByLabel('Muscle group').fill('Soleus');
	await page.getByLabel('Involves bodyweight').click();
	await page.locator('button').filter({ hasText: 'Straight' }).click();
	await page.getByRole('option', { name: 'Drop' }).click();
	await page.getByLabel('Rep range start').fill('15');
	await page.getByLabel('Rep range end').fill('30');
	await page.locator('#exercise-set-decrement').fill('5');
	await page.getByPlaceholder('Exercise cues, machine').fill('Custom note');
	await page.getByRole('button', { name: 'Add exercise' }).click();

	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByRole('button', { name: 'Save' }).click();
	await expect(page.getByRole('status')).toContainText('Exercise split created successfully', {
		timeout: 15000
	});
	await expect(page.getByRole('main')).toContainText('Pull Push Legs 2 days / cycle');
});
