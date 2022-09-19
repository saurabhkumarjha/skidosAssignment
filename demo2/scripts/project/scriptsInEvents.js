


const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
	{
		runtime.globalVars.Result = localStorage.getItem("calValue");
		console.log(x);
	},

	async EventSheet1_Event4_Act1(runtime, localVars)
	{
		window.parent.go(runtime.globalVars.param);
		console.log(runtime.globalVars.param);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

