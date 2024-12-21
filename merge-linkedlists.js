
class LinkedList {
    constructor(listdata) {
        this.value = listdata;
        this.next = null;
    }
}


let list1 = new LinkedList(1);
list1.next = new LinkedList(2);
list1.next.next = new LinkedList(3);
list1.next.next.next = new LinkedList(4);



let list2 = new LinkedList(5);
list2.next = new LinkedList(6);
list2.next.next = new LinkedList(7);
list2.next.next.next = new LinkedList(8);



function printList(node) {
    let out = [];
    while (node != null) {
        out.push(node.value + '->');
        node = node.next;
    }
    out.push('null');
    console.log(...out)
}

printList(list1)
printList(list2)


function mergeLinkedList(list1, list2, i, j) {
    let idx = 1;
    let start, end;
    let currentList = list1;
    let nextList = list2;
    while(currentList != null) {
        // when the index reach the start number keep the node in a start variable
        if (idx === i){
            start = currentList;
        }
        // when the index reach the end number keep the node in a end variable
        if (idx === j) {
            end = currentList.next;
            break;
        }
        // increment the index
        idx++;
        currentList = currentList.next;
    }
    // find the list node, the one before null
    while (nextList && nextList.next) {
        nextList = nextList.next;
    }
    // set the next to the end node
    if(nextList){
        nextList.next = end;
    }
    // set the start node next to list2
    if(start){
        start.next = list2;
    }
    return list1;
}

mergeLinkedList(list1, list2, 2 , 3);

printList(list1)