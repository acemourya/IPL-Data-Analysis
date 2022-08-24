// Fetch data from json file
fetch('./assets/data/data3.json')
  .then(response => response.json())
  .then(data => {

  	// plot chart by using highcharts
	Highcharts.chart('container_3', {

	    chart: {
	        type: 'column'
	    },

	    title: {
	        text: 'Foreign umpire analysis',
	        align: 'center'
	    },

	    // for remove highcharts.com at the end of chart
	    credits: {
			    enabled: false
			},

		// Set labels and title on x-axis  
	    xAxis:[
	    {   
	    	categories: Object.keys(data)
	    },
	    {
		    title: {
		            text: 'Country'
		        }
		}],

		// Set labels and title on y-axis  
	    yAxis: [{
		        title: {
		            text: 'Number of umpires'
		        },
		    }],

		// Passing json data vales to plot
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
