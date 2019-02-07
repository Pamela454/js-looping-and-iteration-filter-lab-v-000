// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) string => driver == string)
}

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
