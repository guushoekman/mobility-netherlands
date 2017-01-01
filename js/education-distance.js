function educationDistance() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of kilometres per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.xAxis.axisLabel('Level of education')
		if ($(window).width() <=400) {
		  chart.staggerLabels(true);
		};
	;

	d3.select('#chart svg').datum([
	{
		key: "Car (driver)",
		color: "#fb6a4a",
		values:
		[
			{x: "Low", y: 9.08},
			{x: "Middle", y: 18.53},
			{x: "High", y: 28.01}
		]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Low", y: 5.18},
			{x: "Middle", y: 5.11},
			{x: "High", y: 5.45}
		]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Low", y: 0.32},
			{x: "Middle", y: 0.22},
			{x: "High", y: 0.08}
		]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Low", y: 1.27},
			{x: "Middle", y: 3.36},
			{x: "High", y: 4.78}
		]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Low", y: 0.9},
			{x: "Middle", y: 1.24},
			{x: "High", y: 0.87}
		]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Low", y: 2.49},
			{x: "Middle", y: 2.2},
			{x: "High", y: 2.92}
		]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Low", y: 0.74},
			{x: "Middle", y: 0.81},
			{x: "High", y: 0.91}
		]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Low", y: 1},
			{x: "Middle", y: 1.14},
			{x: "High", y: 0.76}
		]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Kilometres per day by education level <div class="btn-group" role="group"><button onclick="educationTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="educationDistance()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

	$('#chart-definitions').html('<p>The following definitions include accronyms from the Dutch educational system and may require <a href="https://en.wikipedia.org/wiki/Education_in_the_Netherlands" target="_blank">additional reading</a>.</p><p>Low education level: basic education, VMBO, the first three years of HAVO/VWO, or an assistant degree (MBO-1)<br>Middle education level: last two years of HAVEO, last three years of VWO, a basic professional degree (MBO-2), trade degree (MBO-3), or middle and specialist degree (MBO-4)<br>High education level: HBO or WO</p>');
}