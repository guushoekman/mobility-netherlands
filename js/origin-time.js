function originTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
	;

	d3.select('#chart svg').datum([
	{
		key: "Car (driver)",
		color: "#fb6a4a",
		values:
		[
			{x: "Native", y: 21.02},
			{x: "Western immigrant", y: 19.81},
			{x: "Non-western immigrant", y: 13.36}
	  ]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values:
		[
			{x: "Native", y: 8.38},
			{x: "Western immigrant", y: 8.64},
			{x: "Non-western immigrant", y: 9.01}
	  ]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values:
		[
			{x: "Native", y: 0.52},
			{x: "Western immigrant", y: 0},
			{x: "Non-western immigrant", y: 0}
	  ]
	},
	{
		key: "Train",
		color: "#6baed6",
		values:
		[
			{x: "Native", y: 4.62},
			{x: "Western immigrant", y: 5.06},
			{x: "Non-western immigrant", y: 5.07}
	  ]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values:
		[
			{x: "Native", y: 2.16},
			{x: "Western immigrant", y: 2.92},
			{x: "Non-western immigrant", y: 8.96}
	  ]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values:
		[
			{x: "Native", y: 12.48},
			{x: "Western immigrant", y: 12.17},
			{x: "Non-western immigrant", y: 11.09}
	  ]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values:
		[
			{x: "Native", y: 8.8},
			{x: "Western immigrant", y: 9.55},
			{x: "Non-western immigrant", y: 11.46}
	  ]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values:
		[
			{x: "Native", y: 1.69},
			{x: "Western immigrant", y: 0},
			{x: "Non-western immigrant", y: 1.96}
	  ]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Minutes per day by origin <div class="btn-group" role="group"><button onclick="originTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="originDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

}