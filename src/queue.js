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
 class Queue{
  constructor(){
    this.first=null;
    this.second=null;
  }
  getUnderlyingList(){
    if (!this.first){ return null};
    return (this.first);
  }
  enqueue(value){
    let qwer = new ListNode(value)
    if (this.first == null){
      this.first=qwer;
      this.second=qwer;
      return (this);
    }
    this.second.next = qwer;
    this.second = qwer;
    return (this);
  }
  dequeue(){
    let qaz = this.first.value;
    this.first = this.first.next;
    return (qaz);
  }
}

module.exports = {
  Queue
};
