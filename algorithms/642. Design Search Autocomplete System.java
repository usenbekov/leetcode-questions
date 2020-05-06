/*
642. Design Search Autocomplete System
*/

class AutocompleteSystem {
  private TrieAutocomplete trie;
  
  public AutocompleteSystem(String[] sentences, int[] times) {
    this.trie = new TrieAutocomplete();
    for (int i = 0; i < sentences.length; ++i) {
      this.trie.addSentence(sentences[i]);
      this.trie.setCount(sentences[i], times[i]);
    }
  }

  public List<String> input(char c) {
    this.trie.addChar(c);
    return this.trie.getOptionsWithMax(3);
  }
}

class TrieNode {
  public HashMap<Character, TrieNode> items = new HashMap<Character, TrieNode>();
  public Boolean isEnd = false;
  public String sentence = "";
}

class TrieAutocomplete {
  private TrieNode root;
  private TrieNode currNode;
  private StringBuilder currStr;
  private HashMap<String, Integer> sentCount;
  
  public TrieAutocomplete() {
    this.root = new TrieNode();
    this.currNode = this.root;
    this.currStr = new StringBuilder();
    this.sentCount = new HashMap();
  }
  
  public void setCount(String sentence, int count) {
    this.sentCount.put(sentence, count);
  }
  
  public void addSentence(String s) {
    for (int i = 0; i < s.length(); ++i) {
      this.addChar(s.charAt(i));
    }
    this.addChar('#');
  }
  
  public void addChar(char ch) {
    // end of sentence
    if (ch == '#') {
      this.currNode.sentence = this.currStr.toString();
      this.currStr.setLength(0);
      this.sentCount.put(this.currNode.sentence,
                         this.sentCount.getOrDefault(this.currNode.sentence, 0) + 1);
      this.currNode.isEnd = true;
      this.currNode = this.root;
      return;
    }
    
    // append
    if (!this.currNode.items.containsKey(ch)) {
      this.currNode.items.put(ch, new TrieNode());
    }
    this.currNode = this.currNode.items.get(ch);
    this.currStr.append(ch);
  }
  
  public List<String> getOptionsWithMax(int max) {
    ArrayList<String> list = new ArrayList<String>();
    if (this.root == this.currNode) return list;
    
    Queue<TrieNode> queue = new LinkedList<TrieNode>();
    queue.add(this.currNode);
    while(!queue.isEmpty()) {
      TrieNode node = queue.poll();
      if (node.isEnd) {
        list.add(node.sentence);
      }
      node.items.forEach((ch, curr) -> {
        queue.add(curr);
      });
    }
    
    Collections.sort(list, (str1, str2) -> {
      int compare = this.sentCount.get(str2) - this.sentCount.get(str1);
      if (compare != 0) return compare;
      return str1.compareTo(str2);
    });
    
    return list.subList(0, Math.min(3, list.size()));
  }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * AutocompleteSystem obj = new AutocompleteSystem(sentences, times);
 * List<String> param_1 = obj.input(c);
 */
