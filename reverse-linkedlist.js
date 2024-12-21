

class LinkedList {
    constructor(listdata) {
        this.value = listdata;
        this.next = null;
    }
}

function reverseList(head) {
    let curr = head;
    let prev = null;
    let next;
    while(curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function printList(node) {
    while (node != null) {
        console.log(node.value);
        node = node.next;
    }
    console.log();
}

let head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);

printList(head);

console.log("reversed list");

printList(reverseList(head));
printList(reverseListByRecursion(head));

function reverseListByRecursion(head) {
    if(head == null || head.next == null)
        return head;

    let rest = reverseListByRecursion(head.next);

    head.next.next = head;
    head.next = null;

    return rest;
}