<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import H2 from '$lib/components/ui/typography/H2.svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import MesocycleCyclicSetChangesCharts from '../(components)/MesocycleCyclicSetChangesCharts.svelte';
	import MesocycleBasicsTab from './(components)/MesocycleBasicsTab.svelte';
	import MesocycleExerciseSplitStats from './(components)/MesocycleExerciseSplitStats.svelte';
	import MesocycleSkeleton from './(components)/MesocycleSkeleton.svelte';
	import MesocycleSplitTab from './(components)/MesocycleSplitTab.svelte';
	import MesocycleStats from './(components)/MesocycleStats.svelte';
	import MesocycleVolumeTab from './(components)/MesocycleVolumeTab.svelte';
	import type { FullMesocycle } from './+layout.server';

	let { data } = $props();
	let mesocycle: FullMesocycle | 'loading' = $state('loading');
	let selectedTabValue = $state('basics');
	let chartMode = $state(false);

	onMount(async () => {
		const serverMesocycle = await data.mesocycle;
		if (serverMesocycle) mesocycle = serverMesocycle;
		else toast.error('Mesocycle not found');
	});
</script>

<H2 showChartIcon bind:chartMode>View mesocycle</H2>

{#if mesocycle === 'loading'}
	<MesocycleSkeleton />
{:else}
	<Tabs.Root class="flex w-full grow flex-col" bind:value={selectedTabValue}>
		<Tabs.List class="grid grid-cols-4">
			<Tabs.Trigger value="basics">Basics</Tabs.Trigger>
			<Tabs.Trigger value="split">Split</Tabs.Trigger>
			<Tabs.Trigger value="volume">Volume</Tabs.Trigger>
			<Tabs.Trigger value="workouts">Workouts</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="basics">
			{#if !chartMode}
				<MesocycleBasicsTab {mesocycle} />
			{:else}
				<MesocycleStats {mesocycle} />
			{/if}
		</Tabs.Content>
		<Tabs.Content value="split">
			{#if !chartMode}
				<MesocycleSplitTab {mesocycle} />
			{:else}
				<MesocycleExerciseSplitStats
					splitExercises={mesocycle.mesocycleExerciseSplitDays.map((splitDay) => splitDay.mesocycleSplitDayExercises)}
				/>
			{/if}
		</Tabs.Content>
		<Tabs.Content class="grow" value="volume">
			{#if !chartMode}
				<div class="flex h-full flex-col">
					<MesocycleVolumeTab cyclicSetChanges={mesocycle.mesocycleCyclicSetChanges} />
				</div>
			{:else}
				<Card.Root class="p-4">
					<MesocycleCyclicSetChangesCharts cyclicSetChanges={mesocycle.mesocycleCyclicSetChanges} />
				</Card.Root>
			{/if}
		</Tabs.Content>
		<Tabs.Content class="grow" value="workouts">
			{#if !chartMode}
				<MesocycleStats {mesocycle} />
			{:else}
				TODO: charts that show progression
			{/if}
		</Tabs.Content>
	</Tabs.Root>
{/if}
