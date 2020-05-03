/*
253. Meeting Rooms II
*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  //return solution1(intervals);
  return solution2(intervals);
};

var solution2 = function(intervals) {
  const startTimes = [];
  const endTimes = [];
  for (const interval of intervals) {
    startTimes.push(interval[0]);
    endTimes.push(interval[1]);
  }
  startTimes.sort((a, b) => { return a-b });
  endTimes.sort((a, b) => { return a-b });
  
  let neededRooms = 0;
  let endIndex = 0;
  for (let i = 0; i < startTimes.length; i++) {
    if (startTimes[i] >= endTimes[endIndex]) {
      endIndex++;
    } else {
      neededRooms++;
    }
  }
  return neededRooms;
}

var solution1 = function(intervals) {
  intervals.sort((a, b) => {
    return a[0]-b[0];
  });
  let busyRooms = [];
  let maxRooms = 0;
  for (const interval of intervals) {
    const newBusyRooms = [interval[1]];
    for (const busyUntil of busyRooms) {
      if (busyUntil > interval[0]) newBusyRooms.push(busyUntil);
    }
    busyRooms = newBusyRooms;
    maxRooms = Math.max(maxRooms, busyRooms.length);
  }
  return maxRooms;
}


