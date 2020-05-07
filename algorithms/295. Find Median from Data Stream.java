/*
295. Find Median from Data Stream
*/

class MedianFinder {
  
  private PriorityQueue<Integer> left;
  private PriorityQueue<Integer> right;
  
  /** initialize your data structure here. */
  public MedianFinder() {
    this.left = new PriorityQueue<Integer>();
    this.right = new PriorityQueue<Integer>((a, b) -> { return b-a; });
  }

  public void addNum(int num) {
    this.left.offer(num);
    this.right.offer(this.left.poll());
    if (this.left.size() < this.right.size()) {
      this.left.offer(this.right.poll());
    }
  }

  public double findMedian() {
    if (this.left.size() == this.right.size()) {
      return (this.left.peek() + this.right.peek()) / 2.;
    }
    return this.left.peek();
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
