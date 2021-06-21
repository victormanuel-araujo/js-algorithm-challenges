class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		const newNode = new Node(value);

		if (!this.first) {
			this.first = newNode;
		}

		if (!!this.last) {
			this.last.next = newNode;
		}

		this.last = newNode;

		return ++this.size;
	}

	dequeue() {
		if (!this.last) return null;

		const dequeuedValue = this.first;
		this.first = dequeuedValue.next;

		dequeuedValue.next = null;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
			this.size = 0;
			return dequeuedValue.value;
		}

		this.size--;

		return dequeuedValue.value;
	}
}
