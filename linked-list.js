const linkedListFactory = () => {
    const nodeFactory = () => {
        return {
            value: null,
            nextNode: null,
        }
    }
    let head = null;

    const tail = () => {
        if (head === null) return null;
        let current = head;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    const append = value => {
        let tailNode = tail();
        let newNode = nodeFactory();
        newNode.value = value;
        if (tailNode) tailNode.nextNode = newNode;
        else head = newNode;
    }

    const toString = () => {
        let current = head;
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

    return {tail, append, toString}
}

let myList = linkedListFactory();

myList.append(4);
myList.append(42);
myList.append(2);
myList.append(6);
myList.append(6);
myList.toString();