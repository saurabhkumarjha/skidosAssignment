


const scriptsInEvents = {

	async EventSheet1_Event8_Act2(runtime, localVars)
	{
		var sum = runtime.globalVars.strr;
		c3_callFunction("sum",[(eval(sum))])
		
		console.log(eval(sum))
	},

	async EventSheet1_Event9_Act4(runtime, localVars)
	{
		window.parent.go(runtime.globalVars.param);
		localStorage.setItem('calValue',runtime.globalVars.sum);
		
		console.log(runtime.globalVars.param);
		
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

