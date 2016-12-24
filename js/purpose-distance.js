function purposeDistance() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of kilometres per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.staggerLabels(true)
	;

	d3.select('#chart svg').datum([
	{
		key: "Car (driver)",
		color: "#fb6a4a",
		values: [
			{x: "Work commute", y: 6.18},
			{x: "Business visit for work", y: 1.05},
			{x: "Services, personal care", y: 0.48},
			{x: "Shopping, groceries", y: 1.24},
			{x: "Education, courses and childcare", y: 0.34},
			{x: "Personal visits", y: 2.59},
			{x: "Sport, hobby, eating out", y: 2.17},
			{x: "Recreational", y: 0.19},
			{x: "Other", y: 1.06}
		]
	},
	{
		key: "Car (passenger)",
		color: "#fc9272",
		values: [
			{x: "Work commute", y: 0.41},
			{x: "Business visit for work", y: 0},
			{x: "Services, personal care", y: 0.23},
			{x: "Shopping, groceries", y: 0.67},
			{x: "Education, courses and childcare", y: 0.23},
			{x: "Personal visits", y: 2.09},
			{x: "Sport, hobby, eating out", y: 1.88},
			{x: "Recreational", y: 0.18},
			{x: "Other", y: 0.34}
		]
	},
	{
		key: "Moped",
		color: "#fcbba1",
		values: [
			{x: "Work commute", y: 0.07},
			{x: "Business visit for work", y: 0},
			{x: "Services, personal care", y: 0},
			{x: "Shopping, groceries", y: 0.02},
			{x: "Education, courses and childcare", y: 0},
			{x: "Personal visits", y: 0.02},
			{x: "Sport, hobby, eating out", y: 0.03},
			{x: "Recreational", y: 0},
			{x: "Other", y: 0}
		]
	},
	{
		key: "Train",
		color: "#6baed6",
		values: [
			{x: "Work commute", y: 0.81},
			{x: "Business visit for work", y: 0},
			{x: "Services, personal care", y: 0},
			{x: "Shopping, groceries", y: 0.12},
			{x: "Education, courses and childcare", y: 0.64},
			{x: "Personal visits", y: 0.44},
			{x: "Sport, hobby, eating out", y: 0.39},
			{x: "Recreational", y: 0},
			{x: "Other", y: 0}
		]
	},
	{
		key: "Bus/tram/metro",
		color: "#9ecae1",
		values: [
			{x: "Work commute", y: 0.23},
			{x: "Business visit for work", y: 0},
			{x: "Services, personal care", y: 0.02},
			{x: "Shopping, groceries", y: 0.08},
			{x: "Education, courses and childcare", y: 0.31},
			{x: "Personal visits", y: 0.12},
			{x: "Sport, hobby, eating out", y: 0.11},
			{x: "Recreational", y: 0},
			{x: "Other", y: 0.02}
		]
	},
	{
		key: "Bicycle",
		color: "#74c476",
		values: [
			{x: "Work commute", y: 0.54},
			{x: "Business visit for work", y: 0.02},
			{x: "Services, personal care", y: 0.06},
			{x: "Shopping, groceries", y: 0.35},
			{x: "Education, courses and childcare", y: 0.45},
			{x: "Personal visits", y: 0.25},
			{x: "Sport, hobby, eating out", y: 0.56},
			{x: "Recreational", y: 0.23},
			{x: "Other", y: 0.09}
		]
	},
	{
		key: "Walking",
		color: "#a1d99b",
		values: [
			{x: "Work commute", y: 0.06},
			{x: "Business visit for work", y: 0},
			{x: "Services, personal care", y: 0.01},
			{x: "Shopping, groceries", y: 0.12},
			{x: "Education, courses and childcare", y: 0.06},
			{x: "Personal visits", y: 0.05},
			{x: "Sport, hobby, eating out", y: 0.16},
			{x: "Recreational", y: 0.31},
			{x: "Other", y: 0.03}
		]
	},
	{
		key: "Other",
		color: "#bcbddc",
		values: [
			{x: "Work commute", y: 0.32},
			{x: "Business visit for work", y: 0},
			{x: "Services, personal care", y: 0.03},
			{x: "Shopping, groceries", y: 0.03},
			{x: "Education, courses and childcare", y: 0.11},
			{x: "Personal visits", y: 0.08},
			{x: "Sport, hobby, eating out", y: 0.16},
			{x: "Recreational", y: 0.05},
			{x: "Other", y: 0.09}
		]
	}
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Kilometres per day by purpose <div class="btn-group" role="group"><button onclick="purposeTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="purposeDistance()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');
}