function ageDistance() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of kilometres per day')
		chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('age in years');
		chart.yAxis.tickFormat(d3.format(".2s"));
		chart.tooltip.valueFormatter(function (d) { return d > 0 ? d : 0; });
    if ($(window).width() <=450) {
      chart.staggerLabels(true);
    };
	;

	d3.select('#chart svg').datum([
  {
    key: "Car (driver)",
    color: "#fb6a4a",
    values:
    [
      {x: "< 12", y: 0},
      {x: "12 – 17", y: 0},
      {x: "18 – 24", y: 12.23},
      {x: "25 – 34", y: 23.07},
      {x: "35 – 49", y: 25.59},
      {x: "50 – 64", y: 21.51},
      {x: "65 – 74", y: 12.38},
      {x: "> 74", y: 5.19}
    ]
  },
  {
    key: "Car (passenger)",
    color: "#fc9272",
    values:
    [
      {x: "< 12", y: 11.59},
      {x: "12 – 17", y: 7.05},
      {x: "18 – 24", y: 6.1},
      {x: "25 – 34", y: 5.78},
      {x: "35 – 49", y: 4.8},
      {x: "50 – 64", y: 5},
      {x: "65 – 74", y: 5.45},
      {x: "> 74", y: 4.13}
    ]
  },
  {
    key: "Moped",
    color: "#fcbba1",
    values:
    [
      {x: "< 12", y: 0},
      {x: "12 – 17", y: 0.3},
      {x: "18 – 24", y: 0.49},
      {x: "25 – 34", y: 0},
      {x: "35 – 49", y: 0.21},
      {x: "50 – 64", y: 0.18},
      {x: "65 – 74", y: 0},
      {x: "> 74", y: 0}
    ]
  },
  {
    key: "Train",
    color: "#6baed6",
    values:
    [
      {x: "< 12", y: 0},
      {x: "12 – 17", y: 1.76},
      {x: "18 – 24", y: 10.88},
      {x: "25 – 34", y: 3.29},
      {x: "35 – 49", y: 2.53},
      {x: "50 – 64", y: 2.13},
      {x: "65 – 74", y: 1.19},
      {x: "> 74", y: 0}
    ]
  },
  {
    key: "Bus/tram/metro",
    color: "#9ecae1",
    values:
    [
      {x: "< 12", y: 0.17},
      {x: "12 – 17", y: 1.74},
      {x: "18 – 24", y: 3.48},
      {x: "25 – 34", y: 1.32},
      {x: "35 – 49", y: 0.62},
      {x: "50 – 64", y: 0.51},
      {x: "65 – 74", y: 0.35},
      {x: "> 74", y: 0.34}
    ]
  },
  {
    key: "Bicycle",
    color: "#74c476",
    values:
    [
      {x: "< 12", y: 1.77},
      {x: "12 – 17", y: 6.2},
      {x: "18 – 24", y: 2.66},
      {x: "25 – 34", y: 2.23},
      {x: "35 – 49", y: 2.28},
      {x: "50 – 64", y: 2.56},
      {x: "65 – 74", y: 2.58},
      {x: "> 74", y: 1.37}
    ]
  },
  {
    key: "Walking",
    color: "#a1d99b",
    values:
    [
      {x: "< 12", y: 0.83},
      {x: "12 – 17", y: 0.6},
      {x: "18 – 24", y: 0.75},
      {x: "25 – 34", y: 0.79},
      {x: "35 – 49", y: 0.81},
      {x: "50 – 64", y: 0.89},
      {x: "65 – 74", y: 0.95},
      {x: "> 74", y: 0.69}
    ]
  },
  {
    key: "Other",
    color: "#bcbddc",
    values:
    [
      {x: "< 12", y: 0.67},
      {x: "12 – 17", y: 0.97},
      {x: "18 – 24", y: 0},
      {x: "25 – 34", y: 1},
      {x: "35 – 49", y: 1.26},
      {x: "50 – 64", y: 1.1},
      {x: "65 – 74", y: 0.62},
      {x: "> 74", y: 0.58}
    ]
  }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Kilometres per day by age <div class="btn-group" role="group"><button onclick="ageTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="ageDistance()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

}