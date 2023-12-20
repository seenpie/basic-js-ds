const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const arr = []
  let current = l;
  while (current) {
    if (current.value !== k) {
      arr.push(current)
    }
    current = current.next;
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].next = arr[i + 1] ? arr[i + 1] : null;
  }
  return arr[0];
}

// const list = new ListNode(3);
// list.next = new ListNode(1);
// list.next.next = new ListNode(2);
// list.next.next.next = new ListNode(3);
// list.next.next.next.next = new ListNode(4);
// list.next.next.next.next.next = new ListNode(5);

// console.log(removeKFromList(list, 3));

module.exports = {
  removeKFromList
};
