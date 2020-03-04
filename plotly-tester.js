let data_experiment_x = [];
let data_experiment_y = [];
let list_names_plots = [];
let list_names_models = [];
let list_line_layouts = 
[
	{
		symbol: ["diamond-open"],
		color: 'rgb(0, 24, 143)',
		size: 5,
		line: {
			color: 'rgb(0, 24, 143)',
			width: 2
		}
	},
	{
		symbol: ["y-up"],
		color: 'rgb(0, 188, 242)',
		size: 5,
		line: {
			color: 'rgb(0, 188, 242)',
			width: 2
		}
	},
	{
		symbol: ["circle-open"],
		color: 'rgb(0, 178, 148)',
		size: 5,
		line: {
			color: 'rgb(0, 178, 148)',
			width: 2
		}
	},
	{
		symbol: ["triangle-up-open"],
		color: 'rgb(0, 158, 73)',
		size: 5,
		line: {
			color: 'rgb(0, 158, 73)',
			width: 2
		}
	},
	{
		color: 'rgb(100, 235, 52)',
		size: 5,
		line: {
			color: 'rgb(100, 235, 52)',
			width: 2
		}
	},
	{
		color: 'rgb(255, 241, 0)',
		size: 5,
		line: {
			color: 'rgb(255, 241, 0)',
			width: 2
		}
	},
	{
		color: 'rgb(255, 140, 0)',
		size: 5,
		line: {
			color: 'rgb(255, 140, 0)',
			width: 2
		}
	},
	{
		color: 'rgb(232, 17, 35)',
		size: 5,
		line: {
			color: 'rgb(232, 17, 35)',
			width: 2
		}
	},
	{
		color: 'rgb(236, 0, 140)',
		size: 5,
		line: {
			color: 'rgb(236, 0, 140)',
			width: 2
		}
	},
	{
		color: 'rgb(104, 33, 122)',
		size: 5,
		line: {
			color: 'rgb(104, 33, 122)',
			width: 2
		}
	}

];

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
	exampleData.push
	(
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

for( i = 0 ; i < exampleData.length ; i++ )
{
	if ( i == 0 || i == 1 || i == 2 )
	{
		exampleData[i]["marker"] = list_line_layouts[0];

	} else if ( i == 3 || i == 4 || i == 5 )
	{
		exampleData[i]["marker"] = list_line_layouts[1];

	} else if ( i == 6 || i == 7 || i == 8 )
	{
		exampleData[i]["marker"] = list_line_layouts[2];

	} else if ( i == 9 || i == 10 || i == 11 )
	{
		exampleData[i]["marker"] = list_line_layouts[3];
	}
}

console.log(exampleData[0]["name"]);


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

