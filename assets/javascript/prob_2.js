// Fetch data from json file
fetch('./assets/data/data2.json')
  .then(response => response.json())
  .then(data => {

  	// plot chart by using highcharts
	Highcharts.chart('container_2', {

	    chart: {
	        type: 'column'
	    },

	    title: {
	        text: 'Top batsman of Royal Challengers Bangalore',
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
		            text: 'Players Name'
		        }
		}],

		// Set labels and title on y-axis  
	    yAxis: [{
		        title: {
		            text: 'Scores'
		        },
		    }],

		// Passing json data vslues to plot
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
