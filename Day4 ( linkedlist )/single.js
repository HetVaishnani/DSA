class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
    }

    append(a) {
        let newNode = new Node(a);
        if (!this.head) {
            this.head = newNode;

        }
        else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

let data = new singleLinkedList();

data.append(1);
data.append(2);
data.append(3);

console.log(data);