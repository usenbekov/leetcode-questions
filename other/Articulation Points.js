/*
Find articulation points
*/

const getArticulPoints = (numNodes, edges) => {
	let map = new Map();
	for(let i = 0; i < numNodes; i++) {
    map.set(i, new Set());
  }
  
	for(const edge of edges) {
		map.get(edge[0]).add(edge[1]);
		map.get(edge[1]).add(edge[0]);
  }
  
	let set = new Set();
	let low = [];
	let ids = new Array(numNodes).fill(-1);
	let parent = new Array(numNodes).fill(-1);
	for(let i = 0; i < numNodes; i++) {
		if(ids[i] == -1)
			dfs(map, low, ids, parent, i, set);
	}
	return Array.from(set.values());
}

const dfs = (map, low, ids, parent, cur, res, time = 0) => {
	let children = 0; 
	ids[cur] = low[cur]= time+1;
	for(const nei of map.get(cur)) {
		if(ids[nei] == -1) {
			children++;
			parent[nei] = cur;
			dfs(map, low, ids, parent,nei, res, time+1);
			low[cur] = Math.min(low[cur], low[nei]);
			if((parent[cur] == -1 && children > 1) || (parent[cur] != -1 && low[nei] >= ids[cur])) {
        res.add(cur);
      }
		}
		else if(nei != parent[cur]) {
      low[cur] = Math.min(low[cur], ids[nei]);
    }
	}
}

console.log(getArticulPoints(5, [[1, 0], [0, 2], [2, 1], [0, 3], [3, 4]]))
console.log(getArticulPoints(7, [[0, 1], [0, 2], [1, 3], [2, 3], [2, 5], [5, 6], [3, 4]]))
