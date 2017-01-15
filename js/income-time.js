function incomeTime() {

	var chart = nv.models.multiBarChart()
		chart.stacked(true)
		chart.reduceXTicks(false)
		chart.yAxis.axisLabel('Average number of minutes per day')
		chart.yAxis.axisLabelDistance(-10);
		chart.yAxis.tickFormat(d3.format(".2s"));
		chart.tooltip.valueFormatter(function (d) { return d > 0 ? d : 0; });
    chart.xAxis.axisLabel('🡠 less disposable income || more disposable income 🡢');
    if ($(window).width() <=575) {
      chart.staggerLabels(true);
    };
	;

	d3.select('#chart svg').datum([
  {
    key: "Car (driver)",
    color: "#fb6a4a",
    values:
    [
      {x: "1st quintile", y: 11.38},
      {x: "2nd quintile", y: 15.78},
      {x: "3rd quintile", y: 21.73},
      {x: "4th quintile", y: 24.72},
      {x: "5th quintile", y: 30.1}
    ]
  },
  {
    key: "Car (passenger)",
    color: "#fc9272",
    values:
    [
      {x: "1st quintile", y: 7.96},
      {x: "2nd quintile", y: 8.06},
      {x: "3rd quintile", y: 8.98},
      {x: "4th quintile", y: 8.87},
      {x: "5th quintile", y: 8.64}
    ]
  },
  {
    key: "Moped",
    color: "#fcbba1",
    values:
    [
      {x: "1st quintile", y: 0.63},
      {x: "2nd quintile", y: 0.53},
      {x: "3rd quintile", y: 0.69},
      {x: "4th quintile", y: 0.35},
      {x: "5th quintile", y: 0.4}
    ]
  },
  {
    key: "Train",
    color: "#6baed6",
    values:
    [
      {x: "1st quintile", y: 5.33},
      {x: "2nd quintile", y: 3.38},
      {x: "3rd quintile", y: 3.91},
      {x: "4th quintile", y: 5.91},
      {x: "5th quintile", y: 5.1}
    ]
  },
  {
    key: "Bus/tram/metro",
    color: "#9ecae1",
    values:
    [
      {x: "1st quintile", y: 5.2},
      {x: "2nd quintile", y: 2.49},
      {x: "3rd quintile", y: 2.44},
      {x: "4th quintile", y: 2.41},
      {x: "5th quintile", y: 2.16}
    ]
  },
  {
    key: "Bicycle",
    color: "#74c476",
    values:
    [
      {x: "1st quintile", y: 12.69},
      {x: "2nd quintile", y: 11.64},
      {x: "3rd quintile", y: 12.26},
      {x: "4th quintile", y: 11.94},
      {x: "5th quintile", y: 12.92}
    ]
  },
  {
    key: "Walking",
    color: "#a1d99b",
    values:
    [
      {x: "1st quintile", y: 10.2},
      {x: "2nd quintile", y: 9.19},
      {x: "3rd quintile", y: 8.96},
      {x: "4th quintile", y: 8.83},
      {x: "5th quintile", y: 8.59}
    ]
  },
  {
    key: "Other",
    color: "#bcbddc",
    values:
    [
      {x: "1st quintile", y: 1.59},
      {x: "2nd quintile", y: 1.86},
      {x: "3rd quintile", y: 1.77},
      {x: "4th quintile", y: 1.55},
      {x: "5th quintile", y: 1.49}
    ]
  }
	
	]).transition().duration(500).call(chart);

  $('#chart-title').html('<h4>Minutes per day by disposable income <div class="btn-group" role="group"><button onclick="incomeTime()" type="button" class="btn btn-sm btn-secondary active"><i class="fa fa-clock-o" aria-hidden="true"></i> Time</button><button onclick="incomeDistance()" type="button" class="btn btn-sm btn-secondary"><i class="fa fa-road" aria-hidden="true"></i> Distance</button></div></h4>');

  $('#chart-definitions').html('<h3>Notes and definitons</h3><p>Disposable income is equal to gross income minus welfare benefits, premiums for income insurance, health insurance, and taxes on income and assets. Households are divided into five groups with an equal number of households. The income ranges of these groups change each year.</p>');
}