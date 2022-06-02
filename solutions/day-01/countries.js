const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]


function ethiopia (countries) {
  if("ethiopia" in countries){
    console.log('ETHIOPIA');
  } else{
    countries.push("Ethiopia");
    console.log(countries);
  }
}

ethiopia(countries);