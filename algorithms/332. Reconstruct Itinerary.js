/*
332. Reconstruct Itinerary
*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const map = new Map();
  for (const ticket of tickets) {
    if (!map.has(ticket[0])) map.set(ticket[0], []);
    map.get(ticket[0]).push(ticket[1]);
  }
  
  map.forEach((val, key) => {
    val.sort();
  })
  
  return buildItinary(map, tickets);
};

var buildItinary = function(map, tickets) {
  const build = (val) => {
    let changed = false;
    let dests = map.get(val[val.length-1]) || [];
    for (let i = 0; i < dests.length; i++) {
      const dest = dests[i];
      if (dest) {
        dests[i] = null;
        val.push(dest)
        const itinary = build(val);
        if (itinary) return itinary;
        val.pop();
        dests[i] = dest;
        changed = true;
      }
    }
    if (!changed) {
      if (val.length > tickets.length) {
        return val;
      }
    }
    return null;
  }
  return build(['JFK']);
}


