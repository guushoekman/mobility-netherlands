function ageTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('age in years')
	;

	d3.select('#chart svg').datum([
  {
    key: "Car (driver)",
    color: "#fb6a4a",
    values:
    [
      {x: "< 12", y: 0},
      {x: "12 – 17", y: 0},
      {x: "18 – 24", y: 15.81},
      {x: "25 – 34", y: 29.38},
      {x: "35 – 49", y: 32.99},
      {x: "50 – 64", y: 27.35},
      {x: "65 – 74", y: 17.81},
      {x: "> 74", y: 9.09}
    ]
  },
  {
    key: "Car (passenger)",
    color: "#fc9272",
    values:
    [
      {x: "< 12", y: 18.95},
      {x: "12 – 17", y: 10.34},
      {x: "18 – 24", y: 7.98},
      {x: "25 – 34", y: 7.15},
      {x: "35 – 49", y: 6.04},
      {x: "50 – 64", y: 6.43},
      {x: "65 – 74", y: 7.18},
      {x: "> 74", y: 5.98}
    ]
  },
  {
    key: "Moped",
    color: "#fcbba1",
    values:
    [
      {x: "< 12", y: 0},
      {x: "12 – 17", y: 0.92},
      {x: "18 – 24", y: 1.39},
      {x: "25 – 34", y: 0},
      {x: "35 – 49", y: 0.51},
      {x: "50 – 64", y: 0.48},
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
      {x: "12 – 17", y: 3.66},
      {x: "18 – 24", y: 19.92},
      {x: "25 – 34", y: 5.91},
      {x: "35 – 49", y: 4.09},
      {x: "50 – 64", y: 3.62},
      {x: "65 – 74", y: 2.04},
      {x: "> 74", y: 0}
    ]
  },
  {
    key: "Bus/tram/metro",
    color: "#9ecae1",
    values:
    [
      {x: "< 12", y: 1.11},
      {x: "12 – 17", y: 6.14},
      {x: "18 – 24", y: 8.87},
      {x: "25 – 34", y: 4.48},
      {x: "35 – 49", y: 2.46},
      {x: "50 – 64", y: 1.91},
      {x: "65 – 74", y: 1.34},
      {x: "> 74", y: 1.28}
    ]
  },
  {
    key: "Bicycle",
    color: "#74c476",
    values:
    [
      {x: "< 12", y: 11.91},
      {x: "12 – 17", y: 29.21},
      {x: "18 – 24", y: 11.26},
      {x: "25 – 34", y: 10.46},
      {x: "35 – 49", y: 10.26},
      {x: "50 – 64", y: 11.34},
      {x: "65 – 74", y: 13.18},
      {x: "> 74", y: 7.63}
    ]
  },
  {
    key: "Walking",
    color: "#a1d99b",
    values:
    [
      {x: "< 12", y: 12.08},
      {x: "12 – 17", y: 6.64},
      {x: "18 – 24", y: 5.01},
      {x: "25 – 34", y: 8.15},
      {x: "35 – 49", y: 8.61},
      {x: "50 – 64", y: 9.97},
      {x: "65 – 74", y: 11.86},
      {x: "> 74", y: 9.28}
    ]
  },
  {
    key: "Other",
    color: "#bcbddc",
    values:
    [
      {x: "< 12", y: 1.99},
      {x: "12 – 17", y: 2.17},
      {x: "18 – 24", y: 0},
      {x: "25 – 34", y: 1.82},
      {x: "35 – 49", y: 1.59},
      {x: "50 – 64", y: 1.62},
      {x: "65 – 74", y: 1.42},
      {x: "> 74", y: 1.7}
    ]
  }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Minutes per day by age <div class="btn-group" role="group"><button onclick="ageTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="ageDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

}