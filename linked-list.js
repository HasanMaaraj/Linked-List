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

    const at = index => {
        if (index > size() || index < 0) throw RangeError('index out of range');
        let current = headNode;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current
    }

    const pop = () => {
        let tailNode = tail();
        let listSize = size();
        let beforeLastNode = at(listSize-2);
        beforeLastNode.nextNode = null;
    }

    const contains = value => {
        if (!headNode) return false;
        let current = headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    const find = value => {
        if (!headNode) return null;
        let listSize = size();
        for (let i = 0; i < listSize; i++) {
            if (at(i).value === value) return i; 
        }
        return null;
    }

    const insertAt = (value, index) => {
        let newNode = nodeFactory();
        newNode.value = value;
        let nodePreviousToNew = at(index-1);
        let nodeNextToNew = at(index);
        newNode.nextNode = nodeNextToNew;
        nodePreviousToNew.nextNode = newNode;

    }

    const removeAt = index => {
        if (index === 0){
            let newHead = at(1);
            headNode = newHead;
        } else {
            let nodePreviousToRemoved = at(index-1);
            let nodeNextToRemoved = at(index+1);
            nodePreviousToRemoved.nextNode = nodeNextToRemoved;
        }
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

    const reverse = () => {
        let pre = headNode;
        let current = headNode.nextNode;
        pre.nextNode = null;
        let next = current.nextNode;
        while (current) {
            next = current.nextNode;
            current.nextNode = pre;
            pre = current;
            current = next;
        }
        headNode = pre;
    }

    return {tail, head, size, append, prepend, at, pop, contains, find, insertAt, removeAt, reverse, toString}
}

let myList = linkedListFactory();

myList.append(4);
myList.append(42);
myList.append(2);
myList.append(6);
console.log('at', myList.at(1))
console.log('head', myList.head())
myList.prepend(5);
console.log('head', myList.head())
myList.toString();
console.log('size', myList.size())
console.log('find', myList.find(7))
console.log('contains', myList.contains(7))
myList.pop()
myList.insertAt(3,4)
myList.toString()
myList.removeAt(0)
myList.toString()
myList.reverse();
myList.toString();