

class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}


function detectCycle(head) {

    let item = new Set();

    while (head.next != null) {
        if(item.has(head)) {
            return true;
        }
        item.add(head);
        head = head.next;
    }
    return false;
}

function detectCycleNew(head) {
    let first = head, second = head;
    while (first != null && second != null /*&& second.next != null */) {
        first = first.next;
        second = second.next.next;

        if(first === second) {
            return true
        }
    }
    return false;
}

function printList(head) {
    while (head != null) {
        console.log(" " , head.value);
        head = head.next;
    }
}



let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


head.next.next.next = head;

let out = detectCycle(head);
let out2 = detectCycleNew(head);
console.log(out);
console.log(out2);

console.log(printList(head));
