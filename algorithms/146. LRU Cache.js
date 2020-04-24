/*
146. LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache.
It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key
if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present.
When the cache reached its capacity, it should invalidate the least recently
used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( capacity: 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

/**
 * @param {number} capacity
 */
var LRUCache = LRUCache2;
/** 
 * @param {number} key
 * @return {number}
 */
//LRUCache.prototype.get = get1;

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
//LRUCache.prototype.put = put1;

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var Node = function(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}

function LRUCache2(capacity) {
    this.capacity = capacity;
    this.nodeMap = new Map();
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

LRUCache2.prototype._addHead = function(node) {
    this.nodeMap.set(node.key, node);
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

LRUCache2.prototype._removeNode = function(node) {
    if (!node) return null;
    this.nodeMap.delete(node.key);
    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
}

LRUCache2.prototype.get = function(key) {
    const node = this._removeNode(this.nodeMap.get(key));
    if (!node) return -1;
    this._addHead(node);
    return node.val;
}

LRUCache2.prototype.put = function(key, val) {
    const node = this._removeNode(this.nodeMap.get(key));
    if (node) {
        node.val = val;
        this._addHead(node);
    } else {
        this._addHead(new Node(key, val));
    }
    
    // if out of capacity
    if (this.capacity < this.nodeMap.size) {
        this._removeNode(this.tail.prev);
    }
}

/////////////////

function LRUCache1(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

LRUCache1.prototype.get = function(key) {
    const val = this.map.get(key);
    if (val !== undefined) {
        this.map.delete(key);
        this.map.set(key, val);
        return val;
    }
    return -1;
}

LRUCache1.prototype.put = function(key, val) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, val);
    
    if (this.map.size > this.capacity) {
        const keys = this.map.keys();
        this.map.delete(keys.next().value);
    }
}





