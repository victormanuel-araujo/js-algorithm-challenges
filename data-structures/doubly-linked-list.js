class Node {
	value;
	next = null;
	previous = null;

	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	#head = null;
	#tail = null;
	length = 0;

	get(index) {
		if (index < 0 || index >= this.length) return null;
		if (index > ~~(this.length / 2)) return this.#getBackwardsHelper(index);
		return this.#getForwardHelper(index);
	}

	#getForwardHelper(index, currentIndex = 0, currentNode = this.#head) {
		if (index === currentIndex) return currentNode;

		return this.#getForwardHelper(index, currentIndex + 1, currentNode.next);
	}

	#getBackwardsHelper(
		index,
		currentIndex = this.length - 1,
		currentNode = this.#tail
	) {
		if (index === currentIndex) return currentNode;

		return this.#getBackwardsHelper(
			index,
			currentIndex - 1,
			currentNode.previous
		);
	}

	set(index, value) {
		const currentNode = this.get(index);

		if (currentNode) {
			currentNode.value = value;
			return true;
		}

		return false;
	}

	insert(index, value) {
		if (index < 0 || index > this.length) return null;
		if (index === 0) return !!this.unshift(value);
		if (index === this.length) return !!this.push(value);

		const newNode = new Node(value);
		const currentNode = this.get(index - 1);
		const nextNode = currentNode.next;

		newNode.next = nextNode;
		newNode.previous = currentNode;

		nextNode.previous = newNode;
		currentNode.next = newNode;

		this.length++;
		return true;
	}

	push(value) {
		const node = new Node(value);

		this.length++;
		if (!this.#head) {
			this.#head = node;
			this.#tail = node;
			return this;
		}

		node.previous = this.#tail;
		this.#tail.next = node;
		this.#tail = node;

		return this;
	}

	unshift(value) {
		const node = new Node(value);

		this.length++;
		if (!this.#head) {
			this.#head = node;
			this.#tail = node;
			return this;
		}

		node.next = this.#head;
		this.#head.previous = node;

		this.#head = node;

		return this;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.shift();
		if (index === this.length) return this.pop();

		const currentNode = this.get(index);
		const previousNode = currentNode.previous,
			nextNode = currentNode.next;

		previousNode.next = nextNode;
		nextNode.previous = previousNode;

		currentNode.previous = null;
		currentNode.next = null;

		this.length--;

		return currentNode;
	}

	pop() {
		if (!this.#head) return undefined;

		const poppedTail = this.#tail;
		if (this.length === 1) {
			this.#head = null;
			this.#tail = null;
			this.length = 0;
			return poppedTail;
		}

		this.#tail = poppedTail.previous;
		poppedTail.previous = null;
		this.#tail.next = null;
		this.length--;

		return poppedTail;
	}

	shift() {
		if (!this.#head) return undefined;
		const oldValue = this.#head;

		if (this.length === 1) {
			this.#head = null;
			this.#tail = null;
			this.length = 0;
			return oldValue;
		}

		this.#head = oldValue.next;
		oldValue.next = null;
		oldValue.previous = null;

		this.#head.previous = null;

		this.length--;

		return oldValue;
	}

	reverse() {
		let currentNode = this.#head;
		while (currentNode) {
			const tempNext = currentNode.next;
			currentNode.next = currentNode.previous;
			currentNode.previous = tempNext;
			currentNode = tempNext;
		}

		const newHead = this.#tail;
		this.#tail = this.#head;
		this.#head = newHead;

		return this;
	}
}
