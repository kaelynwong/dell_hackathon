function random_rgb() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

const overallLifespanAxis = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];
const productLIfespanAxis = overallLifespanAxis;
const proportionRecycledAxis = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];
const recycledGenderAxis = ["Male", "Female"];
const recycledAgeAxis = [
  "Below 16",
  "16-20",
  "21-30",
  "31-40",
  "41-50",
  "Above 50",
];
const recycledRegionAxis = ["EMEA", "DAO", "APJ"];
