let target_div = document.getElementById('tester');
let exampleData = [];
let data_experiment_x = [];
let data_experiment_y = [];
let list_names_plots = [];
let list_names_models = [];
let list_line_layouts = 
[
	{
		symbol: "diamond-open",
		color: 'rgb(0, 24, 143)',
		size: 5,
		line: {
			symbol: ["diamond-open"],
			color: 'rgb(0, 24, 143)',
			width: 2
		}
	},
	{
		
		color: 'rgb(0, 188, 242)',
		size: 10,
		line: {
			color: 'rgb(0, 188, 242)',
			width: 2
		}
	},
	{
		
		color: 'rgb(0, 178, 148)',
		size: 10,
		line: {
			color: 'rgb(0, 178, 148)',
			width: 2
		}
	},
	{
		symbol: "triangle-up-open",
		color: 'rgb(0, 158, 73)',
		size: 5,
		line: {
			color: 'rgb(0, 158, 73)',
			width: 2
		}
	},
	{
		color: 'rgb(100, 235, 52)',
		size: 10,
		line: {
			color: 'rgb(100, 235, 52)',
			width: 2
		}
	},
	{
		color: 'rgb(255, 241, 0)',
		size: 10,
		line: {
			color: 'rgb(255, 241, 0)',
			width: 2
		}
	},
	{
		symbol: "y-up",
		color: 'rgb(255, 140, 0)',
		size: 5,
		line: {
			color: 'rgb(255, 140, 0)',
			width: 2
		}
	},
	{
		color: 'rgb(232, 17, 35)',
		size: 10,
		line: {
			color: 'rgb(232, 17, 35)',
			width: 2
		}
	},
	{
		color: 'rgb(236, 0, 140)',
		size: 10,
		line: {
			color: 'rgb(236, 0, 140)',
			width: 2
		}
	},
	{
		symbol: "circle",
		color: 'rgb(104, 33, 122)',
		size: 5,
		line: {
			color: 'rgb(104, 33, 122)',
			width: 2
		}
	}

];

for( model in data )
{
	list_names_models.push( model );
	for(region in data[ model ])
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
		exampleData[i]["marker"] = list_line_layouts[3];

	} else if ( i == 6 || i == 7 || i == 8 )
	{
		exampleData[i]["marker"] = list_line_layouts[6];

	} else if ( i == 9 || i == 10 || i == 11 )
	{
		exampleData[i]["marker"] = list_line_layouts[9];
	}
}

const config = 
{
	showLink: false,
	editable: false,
	displayModeBar: true,
	displaylogo: false,
	modeBarButtonsToRemove: ['sendDataToCloud'],
	responsive: true,
	toImageButtonOptions: 
	{
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'plot',
		height: document.getElementById('tester').offsetHeight,
		width: document.getElementById('tester').offsetWidth,
		scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
	}
};

let layout = 
{
	autosize: true,
	title:'Super Cool Title',
	xaxis: { title: 'Date' , tickformat: '%B-%Y' , tickmode: "linear" , tick0: "2017-01" , tickangle: "45" , dtick: 30 * 24 * 60 * 60 * 1000 },
	yaxis: { title: '\(\pm\)' },
	margin: { l: 60 , r: 300 , b: 120 , t: 30 , pad: 5 },
	template: "plotly_dark"
}

Plotly.newPlot(target_div,exampleData,layout,config);

// I am going for maps now :) 



/*

JSON parse using d3 and use map to make arrays of lon and lat love it love it

var url = "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson";
Plotly.d3.json(url, (err, raw) => 
{
	var lon = raw.features.map(f => f.geometry.coordinates[0]);
	var lat = raw.features.map(f => f.geometry.coordinates[1]);
	var z = raw.features.map(f => f.properties.mag);
	var data = [ { type: "scattermapbox", lon: lon, lat: lat, z: z, hoverinfo: "y" } ];
}
*/

/*

var data_map = 
[
	{
		type:'scattermapbox',
		lat:['45.5017'],
		lon:['-73.5673'],
		mode:'markers',
		marker: 
		{
			size:14
		},
		text:['Montreal']
	}
]

var layout_map = 
{
  autosize: true,
  hovermode: 'closest',
  mapbox: { style: "dark", bearing: 0 , center: { lat: 45 , lon: -73 } , pitch: 0 , zoom: 5 },
  margin: { t: 25 , b: 0 , l: 0 , r: 0 },

}

const config_map = 
{
	mapboxAccessToken: "pk.eyJ1IjoicmFkZXZ5IiwiYSI6ImNrN2tmdDBtZDB3dWYzbG1wdTlqZHhuZTgifQ.AhUrleq5437lyL9uEzBSyg",
	showLink: false,
	editable: false,
	displayModeBar: true,
	displaylogo: false,
	modeBarButtonsToRemove: ['sendDataToCloud'],
	responsive: true,
	toImageButtonOptions: 
	{
		format: 'png', // one of png, svg, jpeg, webp
		filename: 'plot',
		height: document.getElementById('tester').offsetHeight,
		width: document.getElementById('tester').offsetWidth,
		scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
	}
};

Plotly.newPlot( 'map' , data_map , layout_map , config_map )

*/

// Boum !!!! JSON, csv, tsv and xml parser

// var d3_parser = Plotly.d3.json("ressources/exampleData.json" , function (data) { console.log(data); });



Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
		}

var data = [{
        type: 'scattermapbox', text: unpack(rows, 'Globvalue'),
        lon: unpack(rows, 'Lon'), lat: unpack(rows, 'Lat'),
        marker: {color: 'fuchsia', size: 4}
    }];

var layout = {
	dragmode: 'zoom',
	mapbox: {
		style: 'white-bg',
		layers: 
		[
			{
            "below": 'traces',
            "sourcetype": "raster",
            "source": 
			[
				"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"
			]
        	},
			{
				sourcetype: "raster",
				source: 
				[
					"https://geo.weather.gc.ca/geomet/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX={bbox-epsg-3857}&CRS=EPSG:3857&WIDTH=1000&HEIGHT=1000&LAYERS=RADAR_1KM_RDBR&TILED=true&FORMAT=image/png"
				]
			}
		],
		below: 'traces',
		center: {lat: 38, lon: -90}, zoom: 4},
	margin: {r: 0, t: 0, b: 0, l: 0},
	showlegend: false};

Plotly.newPlot('map', data, layout);
  });