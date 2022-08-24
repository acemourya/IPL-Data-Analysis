// Fetch data from json file
fetch('./assets/data/data4.json')
  .then(response => response.json())
  .then(data => {

    // plot chart by using highcharts
	Highcharts.chart('container_4', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Matches plyaed by team by season'
    },

    // for remove highcharts.com at the end of chart
    credits: {
			    enabled: false
			},

    // Set labels and title on x-axis 
    xAxis:[
	    {   
	    	categories: ['2008', '2010', '2012', '2014', '2016']
	    },
	    
	    {
	    	labels: {
            enabled: false
        	},
		    title: {
		            text: 'Years/Season'
		        }
		}],
        
    // Set labels and title on y-axis     
    yAxis: {
    	className: 'highcharts-color-1',
        min: 0,
        title: {
            text: 'Matches played'
        },

        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( 
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },

    // Set legends of teams 
    legend: {
    	margin: 10,
    	padding: 10,
        align: 'center',
        verticalAlign: 'top',
        y: 25,
        floating: false,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },

    //  Tooltip shows the values of the point and the name of the series.
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },

    // PlotOptions wrapper object for config objects for each series 
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },

    // Passing json data to plot
    series: data
});

    // Print json data in console
    console.log(data);

});
