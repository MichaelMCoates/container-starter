window.addEventListener("DOMContentLoaded", async () => {
	const contextListener = (ctx) => {
		console.log('CONTEXT RECEIVED', ctx)
		return {type: 'ViewChartResult', id: {data: 'dolla bills'}}
	}
	//@ts-ignore
	fdc3.addIntentListener("ViewChart", contextListener);
	fin.me.showDeveloperTools()

	// To hit this handler properly, use this in the launched view for platform 1:
	// const intentResolution = await fdc3.raiseIntent("ViewChart", {type: 'test', id: 'string'})
});
