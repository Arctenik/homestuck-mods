module.exports = {
	title: "Arctenik's Openbound fix",
	summary: "Force Openbound part 1 to use MP3s",
	description: "Force Openbound part 1 (page 5263) to use MP3s, to get around an audo loading error",
	author: "Arctenik",
	modVersion: 1,
	
	routes: {
		"assets://storyfiles/hs2/05260/levels/openbound/fourthRoom.xml": "./fourthRoom.xml",
		"assets://storyfiles/hs2/05260/levels/openbound/openbound.xml": "./openbound.xml",
		"assets://storyfiles/hs2/05260/levels/openbound/thirdRoom.xml": "./thirdRoom.xml"
	}
};