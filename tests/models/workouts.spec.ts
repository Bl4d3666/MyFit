import { test, expect, type Page } from '../fixtures';
import { createMesocycle } from './commonFunctions';

async function createMesoForTest(page: Page) {
	await page.goto('/exercise-splits');
	await createMesocycle(page);
	await page.goto('/workouts');
}

test('create workout', async ({ page }) => {
	await page.goto('/workouts');
	await page.getByLabel('create-workout').click();
	await page.getByPlaceholder('Type here').click();
	await page.getByPlaceholder('Type here').fill('100');
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByLabel('add-exercise').click();
	await page.getByRole('option', { name: 'Barbell bench press' }).click();
	await page.getByLabel('Sets').click();
	await page.getByLabel('Sets').fill('2');
	await page.getByRole('button', { name: 'Add exercise' }).click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-reps"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-reps"]').fill('9');
	await page.locator('[id="Barbell\\ bench\\ press-set-1-load"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-load"]').fill('100');
	await page.locator('[id="Barbell\\ bench\\ press-set-1-RIR"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-RIR"]').fill('2');
	await page.locator('[id="Barbell\\ bench\\ press-set-2-reps"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-2-reps"]').fill('8');
	await page.getByPlaceholder('95').click();
	await page.getByPlaceholder('95').fill('95');
	await page.locator('[id="Barbell\\ bench\\ press-set-2-RIR"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-2-RIR"]').fill('1');
	await page.getByRole('main').getByRole('listitem').getByRole('button').nth(1).click();
	await page.getByRole('main').getByRole('listitem').getByRole('button').nth(2).click();
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByRole('button', { name: 'Save' }).click();
	await expect(page.getByRole('status')).toContainText('Workout created successfully');
	await page
		.getByRole('link', {
			name: `${new Date().toLocaleDateString(undefined, { month: 'long', day: '2-digit' })}`
		})
		.click();
	await expect(page.getByRole('tabpanel')).toContainText('Mesocycle No mesocycle User bodyweight 100');
	await page.getByRole('tab', { name: 'Exercises' }).click();
	await expect(page.getByRole('tabpanel')).toContainText(
		'Barbell bench press 2 Down sets of 5 to 10 reps Chest Reps Load RIR 1 9 100 2 2 8 95 1'
	);
});

test('create workout with all set types', async ({ page, browserName }) => {
	test.skip(browserName === 'webkit', 'TODO: breaks for some reason, that too only in GHA CI/CD');
	await page.goto('/workouts');
	await page.getByLabel('create-workout').click();
	await page.getByPlaceholder('Type here').fill('100');
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByLabel('add-exercise').click();
	await page.getByRole('option', { name: 'Barbell bench press' }).click();
	await page.getByRole('button', { name: 'Add exercise' }).click();
	await page.getByLabel('Sets').fill('2');
	await page.getByRole('button', { name: 'Add exercise' }).click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-reps"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-reps"]').fill('9');
	await page.locator('[id="Barbell\\ bench\\ press-set-2-reps"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-2-reps"]').fill('8');
	await page.locator('[id="Barbell\\ bench\\ press-set-1-load"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-load"]').fill('50');
	await page.getByPlaceholder('45').click();
	await page.getByPlaceholder('45').fill('45');
	await page.locator('[id="Barbell\\ bench\\ press-set-1-RIR"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-RIR"]').fill('1');
	await page.locator('[id="Barbell\\ bench\\ press-set-2-RIR"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-2-RIR"]').fill('1');
	await page.getByRole('main').getByRole('listitem').getByRole('button').nth(1).click();
	await page.getByRole('main').getByRole('listitem').getByRole('button').nth(2).click();
	await page.getByLabel('add-exercise').click();
	await page.getByRole('option', { name: 'Dumbbell bicep curls' }).click();
	await page.getByLabel('Sets').click();
	await page.getByLabel('Sets').fill('2');
	await page.locator('button').filter({ hasText: 'Straight' }).click();
	await page.getByRole('option', { name: 'Myorep match' }).click();
	await page.getByRole('button', { name: 'Add exercise' }).click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-reps"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-reps"]').fill('12');
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-load"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-load"]').fill('10');
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-RIR"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-RIR"]').fill('2');
	await page.locator('div:nth-child(2) > div > div:nth-child(4) > form > .inline-flex').first().click();
	await expect(page.getByRole('main')).toContainText('12 reps left');
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-reps"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-reps"]').fill('10');
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-RIR"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-RIR"]').fill('0');
	await expect(page.getByRole('main')).toContainText('2 reps left');
	await page.getByLabel('add-mini-set-to-set-2-of-').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-mini-set-1-reps"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-mini-set-1-reps"]').fill('2');
	await expect(page.getByRole('main')).toContainText('matched');
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-mini-set-1-RIR"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-mini-set-1-RIR"]').fill('0');
	await page.locator('div:nth-child(2) > div > div:nth-child(4) > form:nth-child(6) > .inline-flex').click();
	await page.locator('form:nth-child(7) > .inline-flex').click();
	await page.getByLabel('add-exercise').click();
	await page.getByRole('option', { name: 'Leaning dumbbell lateral' }).click();
	await page.getByLabel('Sets').click();
	await page.getByLabel('Sets').fill('2');
	await page.locator('button').filter({ hasText: 'Straight' }).click();
	await page.getByRole('option', { name: 'Drop' }).click();
	await page.locator('button').filter({ hasText: 'Percentage' }).click();
	await page.getByRole('option', { name: 'Absolute load' }).click();
	await page.locator('#exercise-set-decrement').click();
	await page.locator('#exercise-set-decrement').fill('5');
	await page.getByRole('button', { name: 'Add exercise' }).click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-reps"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-reps"]').fill('18');
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-load"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-load"]').fill('10');
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-RIR"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-RIR"]').fill('2');
	await page.getByLabel('add-mini-set-to-set-1-of-').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-mini-set-1-reps"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-mini-set-1-reps"]').fill('12');
	await page.getByPlaceholder('5', { exact: true }).click();
	await page.getByPlaceholder('5', { exact: true }).fill('5');
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-mini-set-1-RIR"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-1-mini-set-1-RIR"]').fill('2');
	await page.locator('div:nth-child(3) > div > .grid > form > .inline-flex').first().click();
	await page.locator('div:nth-child(3) > div > .grid > form:nth-child(6) > .inline-flex').click();
	await page.getByLabel('add-mini-set-to-set-2-of-Leaning dumbbell lateral raises').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-reps"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-reps"]').fill('16');
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-load"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-load"]').fill('10');
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-RIR"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-RIR"]').fill('2');
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-mini-set-1-reps"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-mini-set-1-reps"]').fill('10');
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-mini-set-1-load"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-mini-set-1-load"]').fill('5');
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-mini-set-1-RIR"]').click();
	await page.locator('[id="Leaning\\ dumbbell\\ lateral\\ raises-set-2-mini-set-1-RIR"]').fill('2');
	await page.locator('form:nth-child(11) > .inline-flex').click();
	await page.locator('form:nth-child(12) > .inline-flex').click();
	await page.getByLabel('add-exercise').click();
	await page.getByRole('option', { name: 'Incline dumbbell press' }).click();
	await page.locator('button').filter({ hasText: 'Straight' }).click();
	await page.getByRole('option', { name: 'V2' }).click();
	await page.getByLabel('Sets').click();
	await page.getByLabel('Sets').fill('2');
	await page.getByRole('button', { name: 'Add exercise' }).click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-reps"]').click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-reps"]').fill('10');
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-load"]').click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-reps"]').click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-reps"]').fill('14');
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-load"]').click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-load"]').fill('20');
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-RIR"]').click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-1-RIR"]').fill('2');
	await page.locator('[id="Incline\\ dumbbell\\ press-set-2-reps"]').click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-2-reps"]').fill('12');
	await page.locator('[id="Incline\\ dumbbell\\ press-set-2-load"]').click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-2-load"]').fill('15');
	await page.locator('[id="Incline\\ dumbbell\\ press-set-2-RIR"]').click();
	await page.locator('[id="Incline\\ dumbbell\\ press-set-2-RIR"]').fill('1');
	await page.locator('div:nth-child(4) > div > .grid > form > .inline-flex').first().click();
	await page.locator('div:nth-child(4) > div > .grid > form:nth-child(6) > .inline-flex').click();
	await page.getByLabel('add-exercise').click();
	await page.getByRole('option', { name: 'Leg press' }).click();
	await page.locator('button').filter({ hasText: 'Straight' }).click();
	await page.getByRole('option', { name: 'Myorep', exact: true }).click();
	await page.getByLabel('Bodyweight fraction').click();
	await page.getByPlaceholder('Fraction').click();
	await page.getByPlaceholder('Fraction').fill('0.5');
	await page.getByLabel('Sets').click();
	await page.getByLabel('Sets').fill('2');
	await page.getByRole('button', { name: 'Add exercise' }).click();
	await page.locator('[id="Leg\\ press-set-1-reps"]').click();
	await page.locator('[id="Leg\\ press-set-1-reps"]').fill('18');
	await page.locator('[id="Leg\\ press-set-2-reps"]').click();
	await page.locator('[id="Leg\\ press-set-2-reps"]').fill('12');
	await page.locator('[id="Leg\\ press-set-1-load"]').click();
	await page.locator('[id="Leg\\ press-set-1-load"]').fill('180');
	await page.locator('div:nth-child(5) > div > .grid > form:nth-child(6) > span').click();
	await page.locator('[id="Leg\\ press-set-1-RIR"]').click();
	await page.locator('[id="Leg\\ press-set-1-RIR"]').fill('2');
	await page.locator('[id="Leg\\ press-set-2-RIR"]').click();
	await page.locator('[id="Leg\\ press-set-2-RIR"]').fill('0');
	await page.locator('div:nth-child(5) > div > .grid > form > .inline-flex').first().click();
	await page.locator('div:nth-child(5) > div > .grid > form:nth-child(6) > .inline-flex').click();
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByRole('button', { name: 'Save' }).click();
	await page
		.getByRole('link', {
			name: `${new Date().toLocaleDateString(undefined, { month: 'long', day: '2-digit' })}`
		})
		.click();
	await expect(page.getByRole('tabpanel')).toContainText('Mesocycle No mesocycle User bodyweight 100');
	await page.getByRole('tab', { name: 'Exercises' }).click();
	await expect(page.getByRole('main')).toContainText(
		'Barbell bench press 2 Down sets of 5 to 10 reps Chest Reps Load RIR 1 9 50 1 2 8 45 1 Dumbbell bicep curls 2 Myorep match sets of 10 to 20 reps Biceps Reps Load RIR 1 12 10 2 2 10 10 0 1 2 10 0Leaning dumbbell lateral raises 2 Drop sets of 10 to 20 reps Side delts Reps Load RIR 1 18 10 2 1 12 5 22 16 10 2 1 10 5 2Incline dumbbell press 2 V2 sets of 10 to 15 reps Chest Reps Load RIR 1 14 20 2 2 12 15 1 Leg press 2 Myorep sets of 10 to 20 reps BW Quads Reps Load RIR 1 18 180 2 2 12 180 0'
	);
});

test('create a workout with active mesocycle', async ({ page }) => {
	await createMesoForTest(page);
	await page.getByLabel('create-workout').click();
	await expect(page.getByRole('main')).toContainText('Pull A Day 1, Cycle 1 LatsTrapsBicepsRear delts');
	await page.getByPlaceholder('Type here').click();
	await page.getByPlaceholder('Type here').fill('100');
	await page.getByRole('button', { name: 'Next' }).click();
	await expect(page.getByRole('main')).toContainText(
		'New workout Exercises Pull A Day 1, Cycle 1 Pull-ups 3 Straight sets of 5 to 15 reps BW Lats Reps Load (BW) RIR Barbell rows 3 Straight sets of 10 to 15 reps Traps Reps Load RIR Dumbbell bicep curls 3 Straight sets of 10 to 20 reps Biceps Reps Load RIR Face pulls 3 Straight sets of 15 to 30 reps Rear delts Reps Load RIR Previous Next'
	);
	await page.locator('#Pull-ups-set-1-reps').click();
	await page.locator('#Pull-ups-set-1-reps').fill('12');
	await page.locator('#Pull-ups-set-2-reps').click();
	await page.locator('#Pull-ups-set-2-reps').fill('11');
	await page.locator('#Pull-ups-set-3-reps').click();
	await page.locator('#Pull-ups-set-3-reps').fill('10');
	await page.locator('#Pull-ups-set-1-load').click();
	await page.locator('#Pull-ups-set-1-load').fill('0');
	await page.locator('.contents > .inline-flex').first().click();
	await page.locator('form:nth-child(6) > .inline-flex').first().click();
	await page.locator('form:nth-child(7) > .inline-flex').first().click();
	await page.locator('[id="Barbell\\ rows-set-1-reps"]').click();
	await page.locator('[id="Barbell\\ rows-set-1-reps"]').fill('15');
	await page.locator('[id="Barbell\\ rows-set-2-reps"]').click();
	await page.locator('[id="Barbell\\ rows-set-2-reps"]').fill('14');
	await page.locator('[id="Barbell\\ rows-set-3-reps"]').click();
	await page.locator('[id="Barbell\\ rows-set-3-reps"]').fill('15');
	await page.locator('[id="Barbell\\ rows-set-1-load"]').click();
	await page.locator('[id="Barbell\\ rows-set-1-load"]').fill('40');
	await page.locator('div:nth-child(2) > div > .grid > form > .inline-flex').first().click();
	await page.locator('div:nth-child(2) > div > .grid > form:nth-child(6) > .inline-flex').click();
	await page.locator('div:nth-child(2) > div > .grid > form:nth-child(7) > .inline-flex').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-reps"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-reps"]').fill('18');
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-reps"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-2-reps"]').fill('17');
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-3-reps"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-3-reps"]').fill('16');
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-load"]').click();
	await page.locator('[id="Dumbbell\\ bicep\\ curls-set-1-load"]').fill('10');
	await page.locator('div:nth-child(3) > div > .grid > form > .inline-flex').first().click();
	await page.locator('div:nth-child(3) > div > .grid > form:nth-child(6) > .inline-flex').click();
	await page.locator('div:nth-child(3) > div > .grid > form:nth-child(7) > .inline-flex').click();
	await page.locator('[id="Face\\ pulls-set-1-reps"]').click();
	await page.locator('[id="Face\\ pulls-set-1-reps"]').fill('25');
	await page.locator('[id="Face\\ pulls-set-2-reps"]').click();
	await page.locator('[id="Face\\ pulls-set-2-reps"]').fill('23');
	await page.locator('[id="Face\\ pulls-set-3-reps"]').click();
	await page.locator('[id="Face\\ pulls-set-3-reps"]').fill('23');
	await page.locator('[id="Face\\ pulls-set-1-load"]').click();
	await page.locator('[id="Face\\ pulls-set-1-load"]').fill('10');
	await page.locator('div:nth-child(4) > div > .grid > form > .inline-flex').first().click();
	await page.locator('div:nth-child(4) > div > .grid > form:nth-child(6) > .inline-flex').click();
	await page.locator('div:nth-child(4) > div > .grid > form:nth-child(7) > .inline-flex').click();
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByRole('button', { name: 'Save' }).click();
	await expect(page.getByRole('status')).toContainText('Workout created successfully');
	await page
		.getByRole('link', {
			name: `${new Date().toLocaleDateString(undefined, { month: 'long', day: '2-digit' })} Pull A`
		})
		.click();
	await expect(page.getByRole('tabpanel')).toContainText('Mesocycle MyMeso Pull A User bodyweight 100');
	await page.getByRole('tab', { name: 'Exercises' }).click();
	await expect(page.getByRole('tabpanel')).toContainText(
		'Pull-ups 3 Straight sets of 5 to 15 reps BW Lats Reps Load RIR 1 12 0 3 2 11 0 3 3 10 0 0'
	);
	await expect(page.getByRole('tabpanel')).toContainText(
		'Barbell rows 3 Straight sets of 10 to 15 reps Traps Reps Load RIR 1 15 40 3 2 14 40 3 3 15 40 0'
	);
});

test('create workout without using active mesocycle', async ({ page }) => {
	await createMesoForTest(page);
	await page.getByLabel('create-workout').click();
	await page.getByLabel('Use active mesocycle').click();
	await page.getByPlaceholder('Type here').click();
	await page.getByPlaceholder('Type here').fill('100');
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByLabel('add-exercise').click();
	await page.getByRole('option', { name: 'Barbell bench press' }).click();
	await page.getByLabel('Sets').click();
	await page.getByLabel('Sets').fill('2');
	await page.getByRole('button', { name: 'Add exercise' }).click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-reps"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-reps"]').fill('9');
	await page.locator('[id="Barbell\\ bench\\ press-set-1-load"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-load"]').fill('100');
	await page.locator('[id="Barbell\\ bench\\ press-set-1-RIR"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-1-RIR"]').fill('2');
	await page.locator('[id="Barbell\\ bench\\ press-set-2-reps"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-2-reps"]').fill('8');
	await page.getByPlaceholder('95').click();
	await page.getByPlaceholder('95').fill('95');
	await page.locator('[id="Barbell\\ bench\\ press-set-2-RIR"]').click();
	await page.locator('[id="Barbell\\ bench\\ press-set-2-RIR"]').fill('1');
	await page.getByRole('main').getByRole('listitem').getByRole('button').nth(1).click();
	await page.getByRole('main').getByRole('listitem').getByRole('button').nth(2).click();
	await page.getByRole('button', { name: 'Next' }).click();
	await page.getByRole('button', { name: 'Save' }).click();
	await expect(page.getByRole('status')).toContainText('Workout created successfully');
	await page
		.getByRole('link', {
			name: `${new Date().toLocaleDateString(undefined, { month: 'long', day: '2-digit' })}`
		})
		.click();
	await expect(page.getByRole('tabpanel')).toContainText('Mesocycle No mesocycle User bodyweight 100');
	await page.getByRole('tab', { name: 'Exercises' }).click();
	await expect(page.getByRole('tabpanel')).toContainText(
		'Barbell bench press 2 Down sets of 5 to 10 reps Chest Reps Load RIR 1 9 100 2 2 8 95 1'
	);
});
