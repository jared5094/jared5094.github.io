var dataPieA = [{ label:'test', value:0 }];
var locationPieA = "all_locations";
var categoryPieA = "brand";

var pieA = new d3pie("display_pieA", {
	"header": {
		"title": {
			"text": "Default",
			"fontSize": 24,
			"font": "open sans"
		},
		// "subtitle": {
		// 	"text": "Default",
		// 	"color": "#333",
		// 	"fontSize": 17,
		// 	"font": "open sans"
		// },
		"titleSubtitlePadding": 9
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasHeight":440,
		"canvasWidth": 590,
		"pieOuterRadius": "75%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": dataPieA,
	},
	"labels": {
		"outer": {
			"pieDistance": 24
		},
		"inner": {
			"hideWhenLessThanPercentage": 4
		},
		"mainLabel": {
			"fontSize": 15
		},
		"percentage": {
			"color": "#ffffff",
			"fontSize": 14,
			"decimalPlaces": 1
		},
		"value": {
			"color": "#adadad",
			"fontSize": 14
		},
		"lines": {
			"enabled": true,
			"style":"straight",
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"gradient": {
			"enabled": true,
			"percentage": 100
		}
	}
});