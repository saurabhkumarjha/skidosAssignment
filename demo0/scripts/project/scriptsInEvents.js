


const scriptsInEvents = {

	async EventSheet1_Event2_Act1(runtime, localVars)
	{
		window.parent.go(runtime.globalVars.param);
		console.log(runtime.globalVars.param);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

