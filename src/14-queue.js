const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.start = null;
    this.finish = null;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(el) {
    const node = new ListNode(el);
    node.value = el;
    if (this.finish) {
      this.finish.next = node;
      this.finish = node;
    } else {
      this.finish = node;
      this.start = node;
    }
  }

  dequeue() {
    if (!this.start) return null;
    if (this.start === this.finish) this.finish = null;
    const deleted = this.start;
    this.start = this.start.next;
    return deleted.value;
  }
}

module.exports = Queue;
