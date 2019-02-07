// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) { 
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
