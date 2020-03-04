let data_experiment_x = [];
let data_experiment_y = [];
let list_names_plots = [];
let list_names_models = [];

for(model in data)
{
	list_names_models.push(model);
	for(region in data[model])
	{
		list_names_plots.push( model + " " + region )
		var xs = [];
		var ys = [];
		for(item in data[model][region])
		{
			var dateString = data[model][region][item].x.split("-");
			xs[item] = new Date(dateString[0],dateString[1]);
			ys[item] = parseFloat(data[model][region][item].y);
		}	
		data_experiment_x.push(xs);
		data_experiment_y.push(ys);
	}
	
}

let exampleData = [];

for( i = 0 ; i < data_experiment_x.length ; i++ )
{
	exampleData.push(
		{ 	
			type: 'scatter',
			name: list_names_plots[i],
			x:data_experiment_x[i],
			y:data_experiment_y[i],
			mode: 'lines+markers',
			line: {shape: 'spline'}
		}
		)
}

target_div = document.getElementById('tester');

let layout = 
{
	autosize: true,
	title:'Super Cool Title',
	xaxis: {title: 'Date',tickformat: '%B-%Y',tickmode: "linear", tick0: "2017-01",dtick: 30 * 24 * 60 * 60 * 1000},
	yaxis: {title: '\(\pm\)'},
	margin: {l:60 , r: 300, b:120,t:30,pad:5}
}

Plotly.newPlot(target_div,exampleData,layout);

