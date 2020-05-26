/*
676. Implement Magic Dictionary
*/

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
  this.presets = new Map();
  this.words = new Set();
};

MagicDictionary.prototype.wordToPresets = function(word) {
  const presets = [];
  for (let i = 0; i < word.length; i++) {
    presets.push(word.substr(0, i) + '*' + word.substr(i+1, word.length));
  }
  return presets;
}

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
  for (const word of dict) {
    this.words.add(word);
    const presets = this.wordToPresets(word);
    for (const preset of presets) {
      this.presets.set(preset, 1+(this.presets.get(preset)||0));
    }
  }
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
  const presets = this.wordToPresets(word);
  for (const preset of presets) {
    if (this.presets.has(preset)) {
      if (this.presets.get(preset) > 1 || !this.words.has(word))
        return true;
    }
  }
  return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

 