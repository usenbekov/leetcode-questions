/*
1152. Analyze User Website Visit Pattern
*/

/*
Joe:    home -> about -> career
James:  home -> cart -> maps -> home
Mary:   home -> about -> career

1. Generate all sequences by user
2. Generate all 3-sequence
4. Count sequences
*/

/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
  const logs = [];
  for (let i = 0; i < username.length; i++) {
    logs.push({user: username[i], time: timestamp[i], page: website[i]});
  }
  logs.sort((a, b) => { return a.time-b.time; });
  
  // generate visit patterns
  // Joe:    home -> about -> career
  // James:  home -> cart -> maps -> home
  const visitPatterns = [];
  let userVisit = new Map();
  for (const log of logs) {
    if (!userVisit.has(log.user)) {
      const visit = new VisitPattern(log.user);
      visitPatterns.push(visit);
      userVisit.set(log.user, visit);
    }
    userVisit.get(log.user).pages.push(log.page);
  }
  
  // Generate all 3 sequences and count
  const seq3Count = new Map();
  let topSeq = [];
  let topSeqCount = 0;
  let topSeqKey = '';
  for (const visit of visitPatterns) {
    const seqs = visit.generate3Sequences();
    for (const seq of seqs) {
      const seqKey = seq.toString();
      const count = (seq3Count.get(seqKey)||0)+1;
      seq3Count.set(seqKey, count);
      
      if ((count > topSeqCount) ||
          (count === topSeqCount && seqKey.localeCompare(topSeqKey) < 0)) {
        topSeq = seq;
        topSeqCount = seq3Count.get(seqKey);
        topSeqKey = seqKey;
      }
    }
  }
  return topSeq;
};

var VisitPattern = function(user) {
  this.user = user;
  this.pages = []; // home -> about ...
}

VisitPattern.prototype.generate3Sequences = function() {
  if (this.pages.length < 3) return [];
  const ans = [];
  const generated = {};
  const generate = (i, res) => {
    if (res.length === 3 && !generated[res.toString()]) {
      ans.push([...res]);
      generated[res.toString()] = 1;
    }
    if (res.length >= 3 || i >= this.pages.length) return;
    
    res.push(this.pages[i]);
    generate(i+1, res);
    res.pop();
    generate(i+1, res);
  }
  generate(0, []);
  return ans;
}







