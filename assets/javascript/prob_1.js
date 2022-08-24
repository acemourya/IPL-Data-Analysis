// Fetch data from json file
fetch('./assets/data/data1.json')
  .then(response => response.json())
  .then(data => {

  	// plot chart by using highcharts
	Highcharts.chart('container_1', {

	    chart: {
	        type: 'bar',
    		inverted: true
	    },

	    title: {
	        text: 'Total scored by teams',
	        align: 'center'
	    },

	    // for remove highcharts.com at the end of chart
	    credits: {
			    enabled: false
			},

		// Set labels and title on x-axis  
	    xAxis:[
	    {   
	    	min: 0,
	    	categories: Object.keys(data),   
		    title: {
		            text: 'Teams'
		        }
		}],
		
		// Set labels and title on y-axis  
	    yAxis: [{
		        title: {
		            text: 'Scores'
		        },
		    }],

		// Passing json data values to plot
	    series:[
	    	{	
	    		showInLegend: false,      
	    		data: Object.values(data)
	    	},
	    ]
	});

	// Print json data in console
	var keys = Object.keys(data);
	var values = Object.values(data);
	console.log(keys);
	console.log(values);
});
