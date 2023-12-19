const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = null;
    this.lastElem = null;
    this.firstElem = null;
  }

  getUnderlyingList() {
    return this.lastElem;
  }

  enqueue(value) {
    if (!this.queue) {
      this.queue = new ListNode(value);
      this.firstElem = this.queue;
      this.lastElem = this.queue;
      return;
    }
    this.lastElem.next = new ListNode(value);
    this.lastElem = this.lastElem.next;
  }

  dequeue() {
    const result = this.firstElem.value;
    this.firstElem = this.firstElem.next;
    this.queue = this.firstElem;
    return result;
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.dequeue();
// console.log(queue);

module.exports = {
  Queue
};
