/*
1344. Angle Between Hands of a Clock
*/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  const hoursAngle = (hour+minutes/60) * 360 / 12;
  const minsAngle = minutes * 360 / 60;
  const angle = Math.abs(hoursAngle - minsAngle);
  return Math.min(angle, Math.abs(360 - angle));
};


