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
        tailNode.newNode = newNode;
    }

}