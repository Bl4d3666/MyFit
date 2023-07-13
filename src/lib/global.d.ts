// * Ensure the type matches in commonDB.ts
const commonMuscleGroups = [
	'Chest',
	'Front delts',
	'Side delts',
	'Rear delts',
	'Back',
	'Traps',
	'Triceps',
	'Biceps',
	'Forearms',
	'Quads',
	'Hamstrings',
	'Glutes',
	'Calves'
] as const;

type SplitExercise = {
	name: string | undefined;
	sets: number | undefined;
	setType: 'straight' | 'drop' | 'down' | 'top' | 'myorep' | 'myorep match' | 'giant' | '';
	muscleTarget: (typeof commonMuscleGroups)[number] | '';
	repRangeStart: number | undefined;
	repRangeEnd: number | undefined;
};

type Mesocycle = {
	name: string;
	duration: number;
	startRIR: number;
	splitSchedule: [string, string, string, string, string, string, string];
	splitExercises: [
		SplitExercise[],
		SplitExercise[],
		SplitExercise[],
		SplitExercise[],
		SplitExercise[],
		SplitExercise[],
		SplitExercise[]
	];
};

type ActiveMesocycle = {
	mesoID: number;
	startDate: EpochTimeStamp;
	workouts: number[];
}

interface PerformedMesocycle extends ActiveMesocycle {
	endDate: EpochTimeStamp;
}