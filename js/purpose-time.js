function purposeTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
    chart.staggerLabels(true)
	;

	d3.select('#chart svg').datum([
  {
    key: "Car (driver)",
    color: "#fb6a4a",
    values:
    [
      {x: "Work commute", y: 7.33},
      {x: "Business visit for work", y: 1.06},
      {x: "Services, personal care", y: 0.74},
      {x: "Shopping, groceries", y: 2.41},
      {x: "Education, courses and childcare", y: 0.44},
      {x: "Personal visits", y: 3.02},
      {x: "Sport, hobby, eating out", y: 3},
      {x: "Recreational", y: 0.34},
      {x: "Other", y: 1.62}
    ]
  },
  {
    key: "Car (passenger)",
    color: "#fc9272",
    values:
    [
      {x: "Work commute", y: 0.54},
      {x: "Business visit for work", y: 0},
      {x: "Services, personal care", y: 0.37},
      {x: "Shopping, groceries", y: 1.24},
      {x: "Education, courses and childcare", y: 0.53},
      {x: "Personal visits", y: 2.39},
      {x: "Sport, hobby, eating out", y: 2.55},
      {x: "Recreational", y: 0.31},
      {x: "Other", y: 0.46}
    ]
  },
  {
    key: "Moped",
    color: "#fcbba1",
    values:
    [
      {x: "Work commute", y: 0.17},
      {x: "Business visit for work", y: 0},
      {x: "Services, personal care", y: 0},
      {x: "Shopping, groceries", y: 0.06},
      {x: "Education, courses and childcare", y: 0},
      {x: "Personal visits", y: 0.06},
      {x: "Sport, hobby, eating out", y: 0.1},
      {x: "Recreational", y: 0},
      {x: "Other", y: 0}
    ]
  },
  {
    key: "Train",
    color: "#6baed6",
    values:
    [
      {x: "Work commute", y: 1.4},
      {x: "Business visit for work", y: 0},
      {x: "Services, personal care", y: 0},
      {x: "Shopping, groceries", y: 0.2},
      {x: "Education, courses and childcare", y: 1.27},
      {x: "Personal visits", y: 0.72},
      {x: "Sport, hobby, eating out", y: 0.7},
      {x: "Recreational", y: 0},
      {x: "Other", y: 0}
    ]
  },
  {
    key: "Bus/tram/metro",
    color: "#9ecae1",
    values:
    [
      {x: "Work commute", y: 0.83},
      {x: "Business visit for work", y: 0},
      {x: "Services, personal care", y: 0.12},
      {x: "Shopping, groceries", y: 0.33},
      {x: "Education, courses and childcare", y: 0.79},
      {x: "Personal visits", y: 0.36},
      {x: "Sport, hobby, eating out", y: 0.47},
      {x: "Recreational", y: 0},
      {x: "Other", y: 0.07}
    ]
  },
  {
    key: "Bicycle",
    color: "#74c476",
    values:
    [
      {x: "Work commute", y: 2.07},
      {x: "Business visit for work", y: 0.06},
      {x: "Services, personal care", y: 0.32},
      {x: "Shopping, groceries", y: 1.84},
      {x: "Education, courses and childcare", y: 2.11},
      {x: "Personal visits", y: 1.22},
      {x: "Sport, hobby, eating out", y: 2.79},
      {x: "Recreational", y: 1.39},
      {x: "Other", y: 0.48}
    ]
  },
  {
    key: "Walking",
    color: "#a1d99b",
    values:
    [
      {x: "Work commute", y: 0.24},
      {x: "Business visit for work", y: 0},
      {x: "Services, personal care", y: 0.14},
      {x: "Shopping, groceries", y: 1.48},
      {x: "Education, courses and childcare", y: 0.51},
      {x: "Personal visits", y: 0.52},
      {x: "Sport, hobby, eating out", y: 1.78},
      {x: "Recreational", y: 4.18},
      {x: "Other", y: 0.3}
    ]
  },
  {
    key: "Other",
    color: "#bcbddc",
    values:
    [
      {x: "Work commute", y: 0.37},
      {x: "Business visit for work", y: 0},
      {x: "Services, personal care", y: 0.07},
      {x: "Shopping, groceries", y: 0.09},
      {x: "Education, courses and childcare", y: 0.25},
      {x: "Personal visits", y: 0.11},
      {x: "Sport, hobby, eating out", y: 0.46},
      {x: "Recreational", y: 0.15},
      {x: "Other", y: 0.11}
    ]
  }
	
	]).transition().duration(500).call(chart);

	$('#chart-title').html('<h4>Minutes per day by purpose <div class="btn-group" role="group"><button onclick="purposeTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="purposeDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');
}