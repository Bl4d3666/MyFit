type APIMesocyclesCreateTemplate = {
	mesocycleTemplate: MesocycleTemplate;
};

type APIMesocyclesDeleteTemplate = {
	mesocycleTemplateId: string;
};

type APIMesocyclesStartMesocycle = {
	mesocycleTemplateId: string;
};

type APIMesocyclesStopMesocycle = {
	activeMesocycleId: string;
};