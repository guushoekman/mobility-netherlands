function purposeDistance() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of kilometres per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.yAxis.tickFormat(d3.format(".2s"));
		chart.tooltip.valueFormatter(function (d) { return d > 0 ? d : 0; })
		if ($(window).width() <=1400) {
		  chart.staggerLabels(true);
		};	;

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

	$('#chart-definitions').html('<dl class="row"><dt class="col-sm-3">Work commute</dt><dd class="col-sm-9">Movements to and from work. This can be a permanent but also temporary location. It covers places where people do salary, have a side job or do volunteer work</dd><dt class="col-sm-3">Business visit for work</dt><dd class="col-sm-9">Movements for work, but not to the location where people usually work. These are mostly business trips, visiting clients, meeting and symposiums</dd><dt class="col-sm-3">Services, personal care</dt><dd class="col-sm-9">Movements to a location where people receive a (paid) service and where people can go for personal care. Examples include visits to city hall, a hair dresser, a GP or a mortgage advisor</dd><dt class="col-sm-3">Shopping, groceries</dt><dd class="col-sm-9">Movements to go purchase goods. This can be food as well as non-food. Browsing but not buying, like window shopping and viewing of products, also fall under this category</dd><dt class="col-sm-3">Education, courses, and childcare</dt><dd class="col-sm-9">Includes anything that has to do with pursuing an education as well as childcare</dd><dt class="col-sm-3">Personal visits</dt><dd class="col-sm-9">Visiting and possibly staying over at friends, family, and acquaintances</dd><dt class="col-sm-3">Sport, hobby, eating out</dt><dd class="col-sm-9">Athletic movements or movements to a location to practice or spectate a sport or hobby. Also counted are movements to restaurants, bars, etc, as well as cultural activities and religious pursuits. Playing outside is also included</dd><dt class="col-sm-3">Recreational</dt><dd class="col-sm-9">Mostly recreational movements on foot, by bike, care, or motorcycle. Walking the dog also falls under this category. These movements are always "circles" with the same start and end point. Explicitly excluded are rides to go a place to walk. Rather, this category is defined by movements done purely for to enjoy the movement itself</dd><dt class="col-sm-3">Other</dt><dd class="col-sm-9">Includes non-commerical picking up and dropping off people or goods. Also included are movements with the end desintation of "to the parking lot", "to the car" or "to a station or bus stop". Lastly it includes movements that could not be assigned to any other category</dd></dl>');
}