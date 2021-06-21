class Node {
	constructor(value) {
		this.value = value;
		this.previous = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		const newNode = new Node(value);

		if (!this.first) {
			this.first = newNode;
		}

		if (!!this.last) {
			newNode.previous = this.last;
		}

		this.last = newNode;

		return ++this.size;
	}

	pop() {
		if (!this.last) return null;

		const poppedValue = this.last;
		this.last = poppedValue.previous;

		poppedValue.previous = null;

		if (this.size === 1) {
			this.first = null;
			this.last = null;
			this.size = 0;
			return poppedValue.value;
		}

		this.size--;

		return poppedValue.value;
	}
}
