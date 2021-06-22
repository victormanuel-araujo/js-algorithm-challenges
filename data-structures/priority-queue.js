class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(node) {
		this.values.push(node);
		this.#bubbbleUp();
	}

	dequeue() {
		if (this.length === 0) return null;
		if (this.length === 1) return this.values.pop();
		const root = this.values[0];
		this.values[0] = this.values.pop();

		this.#sinkDown();

		return root;
	}

	#sinkDown() {
		let currentIndex = 0;

		while (true) {
			const leftIndex = currentIndex * 2 + 1;
			const rightIndex = currentIndex * 2 + 2;

			const left = this.values[leftIndex] || null;
			const right = this.values[rightIndex] || null;

			let lesserPriorityIndex = !!left ? leftIndex : null;

			if (!left && !right) {
				break;
			}

			if (!!right && right.priority < left.priority) {
				lesserPriorityIndex = rightIndex;
			}

			if (!!lesserPriorityIndex) {
				this.#swap(lesserPriorityIndex, currentIndex);
				currentIndex = lesserPriorityIndex;
				continue;
			}

			break;
		}
	}

	#bubbbleUp() {
		let childIndex = this.values.length - 1;
		let parentIndex = Math.floor((childIndex - 1) / 2);
		let swipped = true;

		while (childIndex >= 0 && swipped) {
			if (
				this.values[childIndex].priority < this.values[parentIndex].priority
			) {
				this.#swap(childIndex, parentIndex);
				swipped = true;
			}

			childIndex = parentIndex;
			parentIndex = Math.floor((childIndex - 1) / 2);
		}
	}

	#swap(index1, index2) {
		const temp = this.values[index2];
		this.values[index2] = this.values[index1];
		this.values[index1] = temp;
	}
}
