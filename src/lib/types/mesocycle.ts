const CaloricStates = [
	{
		name: "Hypo-caloric",
		commonTerm: "Deficit",
		value: -1
	},
	{
		name: "Iso-caloric",
		commonTerm: "Maintenance",
		value: 0
	},
	{
		name: "Hyper-caloric",
		commonTerm: "Surplus",
		value: 1
	}
] as const;

type CaloricStateValue = (typeof CaloricStates)[number]["value"];

type RIRProgressionData = { specificRIR: number; cycles: number };

type MesocycleTemplate = {
	name: string;
	startRIR: number;
	RIRProgression: RIRProgressionData[];
	exerciseSplit: (null | { name: string; exercises: SplitExercise[] })[];
	caloricBalance: CaloricStateValue;
	specialization?: MuscleGroup[];
};

type ActiveMesocycle = {
	templateMesoId: string;
	startTimestamp: EpochTimeStamp;
	workouts: string[];
};

type PerformedMesocycle = ActiveMesocycle & {
	endTimestamp: EpochTimeStamp;
};

type SplitExercise = {
	name: string;
	sets: number;
	targetMuscleGroup: MuscleGroup;
	repRangeStart: number;
	repRangeEnd: number;
	weightType: ExerciseWeightType;
	note: string;
};