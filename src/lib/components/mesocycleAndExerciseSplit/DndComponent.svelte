<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { dragHandleZone, type DndEvent, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
	import ExerciseTemplateCard from './ExerciseTemplateCard.svelte';
	import type {
		ExerciseTemplateWithoutIdsOrIndex,
		MesocycleExerciseTemplateWithoutIdsOrIndex,
		SplitExerciseTemplateWithoutIdsOrIndex
	} from './commonTypes';

	type CommonProps<T> = {
		readOnly?: boolean;
		reordering: boolean;
		itemList: (T & { isDndShadowItem?: boolean })[];
		deleteExercise: (idx: number) => void;
		setEditingExercise: (exercise: T) => void;
	};

	type PropsType =
		| ({ context: 'exerciseSplit' } & CommonProps<SplitExerciseTemplateWithoutIdsOrIndex>)
		| ({ context: 'mesocycle' } & CommonProps<MesocycleExerciseTemplateWithoutIdsOrIndex>);

	let { itemList = $bindable(), reordering, ...contextProps }: PropsType = $props();

	function handleSort(e: CustomEvent<DndEvent<ExerciseTemplateWithoutIdsOrIndex>>) {
		itemList = e.detail.items;
	}
</script>

<div
	class="flex h-px grow flex-col gap-1 overflow-y-auto"
	onconsider={handleSort}
	onfinalize={handleSort}
	use:dragHandleZone={{
		items: itemList,
		flipDurationMs: 200,
		dropTargetClasses: ['border-none'],
		dropTargetStyle: {}
	}}
>
	{#each itemList as exerciseTemplate, idx (exerciseTemplate.name)}
		<div class="relative" animate:flip={{ duration: 200 }}>
			{#if 'sets' in exerciseTemplate && contextProps.context === 'mesocycle'}
				<ExerciseTemplateCard
					context="mesocycle"
					deleteExercise={contextProps.deleteExercise}
					{exerciseTemplate}
					{idx}
					readOnly={false}
					{reordering}
					setEditingExercise={contextProps.setEditingExercise}
				/>
			{:else if contextProps.context === 'exerciseSplit'}
				<ExerciseTemplateCard
					context="exerciseSplit"
					deleteExercise={contextProps.deleteExercise}
					{exerciseTemplate}
					{idx}
					readOnly={false}
					{reordering}
					setEditingExercise={contextProps.setEditingExercise}
				/>
			{/if}
			{#if exerciseTemplate[SHADOW_ITEM_MARKER_PROPERTY_NAME]}
				<div class="custom-shadow-item" in:fade={{ duration: 200 }}></div>
			{/if}
		</div>
	{:else}
		<div class="flex flex-col p-2 border rounded-md text-muted-foreground">No exercises added</div>
	{/each}
</div>

<style lang="postcss">
	.custom-shadow-item {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		visibility: visible;
		opacity: 0.5;
		margin: 0;
		box-sizing: border-box;
		@apply rounded-md bg-secondary;
	}
</style>
