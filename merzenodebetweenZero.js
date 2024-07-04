class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
function mergeNodes(head) {
    let dummy = new ListNode(0);  
    let current = dummy;
    let sum = 0;
    
    head = head.next; 

    while (head !== null) {
        if (head.val === 0) {
            if (sum !== 0) {
                current.next = new ListNode(sum);
                current = current.next;
                sum = 0; 
            }
        } else {
        
            sum += head.val;
        }
        head = head.next; 
    }

    return dummy.next;  
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}
function linkedListToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}
}
