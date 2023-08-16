const linkedListFactory = () => {
    const nodeFactory = () => {
        return {
            value: null,
            nextNode: null,
        }
    }
    let headNode = null;

    const tail = () => {
        if (headNode === null) return null;
        let current = headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    const head = () => {
        return headNode;
    }

    const size = () => {
        if (headNode === null) return 0;
        let current = headNode;
        let i = 1;
        while (current.nextNode) {
            current = current.nextNode;
            i++;
        }
        return i;
    }

    const append = value => {
        let tailNode = tail();
        let newNode = nodeFactory();
        newNode.value = value;
        if (tailNode) tailNode.nextNode = newNode;
        else headNode = newNode;
    }

    const prepend = value => {
        let newNode = nodeFactory();
        newNode.value = value;
        newNode.nextNode = headNode;
        headNode = newNode;
    }

    const toString = () => {
        let current = headNode;
        let s = ''
        while (true) {
            if (current) {
                s += `( ${current.value} ) -> `;
                current = current.nextNode;
            }
            else {
                s += `( ${current} )`;
                break;
            }
        }
        console.log(s)
    }

    return {tail, head, size, append, prepend, toString}
}

let myList = linkedListFactory();

myList.append(4);
myList.append(42);
myList.append(2);
myList.append(6);
console.log(myList.head())
myList.prepend(5);
console.log(myList.head())
myList.toString();
console.log(myList.size())