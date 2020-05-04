/*
208. Implement Trie (Prefix Tree)
*/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.node = new TrieNode();
};

var TrieNode = function() {
  this.map = new Map();
  this.isEndOfWord = false;
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  if (!word) return;
  let node = this.node;
  for (const letter of word) {
    if (!node.map.has(letter))
      node.map.set(letter, new TrieNode());
    node = node.map.get(letter);
  }
  node.isEndOfWord = true;
};

Trie.prototype.lastNodeOf = function(word) {
  if (!word) return null;
  let node = this.node;
  for (const letter of word) {
    if (!node.map.has(letter)) return null;
    node = node.map.get(letter);
  }
  return node;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const node = this.lastNodeOf(word);
  return node && node.isEndOfWord ? true : false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return this.lastNodeOf(prefix) ? true : false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
