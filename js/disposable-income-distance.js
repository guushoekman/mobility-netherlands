function disposableIncomeDistance() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of kilometres per day')
		chart.yAxis.axisLabelDistance(-10);
    chart.xAxis.axisLabel('🡠 less disposable income || more disposable income 🡢')
	;

	d3.select('#chart svg').datum([
  {
    key: "Car (driver)",
    color: "#fb6a4a",
    values:
     [
      {x: "1st quintile", y: 7.77},
      {x: "2nd quintile", y: 11.36},
      {x: "3rd quintile", y: 16.36},
      {x: "4th quintile", y: 19.17},
      {x: "5th quintile", y: 25.18}
     ]
  },
  {
    key: "Car (passenger)",
    color: "#fc9272",
    values:
     [
      {x: "1st quintile", y: 5.25},
      {x: "2nd quintile", y: 5.61},
      {x: "3rd quintile", y: 6.1},
      {x: "4th quintile", y: 6.81},
      {x: "5th quintile", y: 7.08}
     ]
  },
  {
    key: "Moped",
    color: "#fcbba1",
    values:
     [
      {x: "1st quintile", y: 0.24},
      {x: "2nd quintile", y: 0.15},
      {x: "3rd quintile", y: 0.22},
      {x: "4th quintile", y: 0.13},
      {x: "5th quintile", y: 0.16}
     ]
  },
  {
    key: "Train",
    color: "#6baed6",
    values:
     [
      {x: "1st quintile", y: 3.05},
      {x: "2nd quintile", y: 1.86},
      {x: "3rd quintile", y: 2.2},
      {x: "4th quintile", y: 3.31},
      {x: "5th quintile", y: 2.93}
     ]
  },
  {
    key: "Bus/tram/metro",
    color: "#9ecae1",
    values:
     [
      {x: "1st quintile", y: 1.43},
      {x: "2nd quintile", y: 0.71},
      {x: "3rd quintile", y: 0.76},
      {x: "4th quintile", y: 0.83},
      {x: "5th quintile", y: 0.71}
     ]
  },
  {
    key: "Bicycle",
    color: "#74c476",
    values:
     [
      {x: "1st quintile", y: 2.35},
      {x: "2nd quintile", y: 2.39},
      {x: "3rd quintile", y: 2.57},
      {x: "4th quintile", y: 2.7},
      {x: "5th quintile", y: 2.84}
     ]
  },
  {
    key: "Walking",
    color: "#a1d99b",
    values:
     [
      {x: "1st quintile", y: 0.88},
      {x: "2nd quintile", y: 0.8},
      {x: "3rd quintile", y: 0.78},
      {x: "4th quintile", y: 0.76},
      {x: "5th quintile", y: 0.81}
     ]
  },
  {
    key: "Other",
    color: "#bcbddc",
    values:
     [
      {x: "1st quintile", y: 0.75},
      {x: "2nd quintile", y: 1.04},
      {x: "3rd quintile", y: 1},
      {x: "4th quintile", y: 0.97},
      {x: "5th quintile", y: 0.92}
     ]
  }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Kilometres per day by disposable income <button onclick="disposableIncomeTime()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button></h4>');

}