/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  hand = hand.sort((a, b) => a-b);
  
  const counts = new Map();
  for (const val of hand) {
      counts.set(val, (counts.get(val) || 0) + 1);
  }
  
  while (counts.size > 0) {
      const first = counts.keys().next().value;
      for (let i = first; i < first+W; i++) {
          const count = counts.get(i) || 0;
          if (count < 1) return false;
          if (count === 1) counts.delete(i);
          else counts.set(i, count-1);
      }
  }
  
  return true;
};


