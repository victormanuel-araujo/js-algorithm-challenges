class Node {
	value;
	next = null;

	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	head = null;
	tail = null;
	length = 0;

	get(index) {
		if (index < 0 || index > this.length) return null;
		return this.#getHelper(index);
	}

	set(index, value) {
		const node = this.get(index);
		node.value = value;
		return true;
	}

	#getHelper(index = 0, currentNode = this.head, currentIndex = 0) {
		if (currentIndex === index) return currentNode;
		return this.#getHelper(index, currentNode.next, currentIndex + 1);
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return false;

		if (index === this.length) return !!this.push(value);
		if (index === 0) return !!this.unshift(value);

		const newNode = new Node(value);
		const previousNode = this.get(index - 1);
		newNode.next = previousNode.next;
		previousNode.next = newNode;

		this.length++;

		return true;
	}

	push(value) {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
		}

		if (!!this.tail) {
			this.tail.next = node;
		}

		this.tail = node;
		this.length++;

		return this;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.tail = newNode;
		}

		newNode.next = this.head;
		this.head = newNode;

		this.length++;
	}

	remove(index) {
		if (index < 0 || index > this.length) return undefined;

		if (index === this.length) return this.pop();
		if (index === 0) return this.shift();

		const previousNode = this.get(index - 1);

		const removedNode = previousNode.next;
		previousNode.next = removedNode.next || null;
		this.length--;

		return removedNode;
	}

	shift() {
		if (!this.head) return undefined;

		const currentValue = this.head;
		this.head = this.head.next;
		this.length--;

		if (this.length === 0) {
			this.reset();
			return currentValue;
		}

		return currentValue;
	}

	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		let temp;

		while (current.next) {
			temp = current;
			current = current.next;
		}

		this.length--;
		if (this.length === 0) {
			this.reset();
			return current;
		}

		this.tail = temp;
		this.tail.next = null;

		return current;
	}

	reset() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	reverse() {
		this.#reverseHelper();

		const temp = this.head;
		this.head = this.tail;
		this.tail = temp;

		return this;
	}

	#reverseHelper(currentValue = this.head, previousValue) {
		const next = currentValue.next;
		currentValue.next = previousValue;

		if (next) {
			this.#reverseHelper(next, currentValue);
		}
	}
}
