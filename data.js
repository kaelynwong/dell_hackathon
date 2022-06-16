const dataLineChart = function () {
  var sin = [],
    cos = [];

  for (var i = 0; i < 100; i++) {
    sin.push({ x: i, y: Math.sin(i / 10) });
    cos.push({ x: i, y: 0.5 * Math.cos(i / 10) });
  }

  return [
    {
      values: sin,
      key: "Sine Wave",
      color: "#ff7f0e",
    },
    {
      values: cos,
      key: "Cosine Wave",
      color: "#2ca02c",
    },
  ];
};

const barChartData = [
  {
    key: "Cumulative Return",
    values: [
      { 
        "label" : "A" ,
        "value" : -29.765957771107
      } , 
      { 
        "label" : "B" , 
        "value" : 0
      } , 
      { 
        "label" : "C" , 
        "value" : 32.807804682612
      } , 
      { 
        "label" : "D" , 
        "value" : 196.45946739256
      } , 
      { 
        "label" : "E" ,
        "value" : 0.19434030906893
      } , 
      { 
        "label" : "F" , 
        "value" : -98.079782601442
      } , 
      { 
        "label" : "G" , 
        "value" : -13.925743130903
      } , 
      { 
        "label" : "H" , 
        "value" : -5.1387322875705
      }
    ]
  }
]

