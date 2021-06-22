class MinBinaryHeap {
	values = [];

	insert(value) {
		this.values.push(value);
		this.bubbleUp();
	}

	extractMin() {
		if (this.values.length === 0) return null;
		if (this.values.length === 1) return this.values.pop();

		const root = this.values[0];
		this.values[0] = this.values.pop();

		this.sinkDown();

		return root;
	}

	sinkDown() {
		let currentIndex = 0;

		while (true) {
			const leftIndex = currentIndex * 2 + 1;
			const rightIndex = currentIndex * 2 + 2;

			const current = this.values[currentIndex];
			const left = this.values[leftIndex];
			const right = this.values[rightIndex];

			if (current < left && current < right) {
				break;
			}

			if (left < right && !!left) {
				this.swap(currentIndex, leftIndex);
				currentIndex = leftIndex;
				continue;
			}

			if (!!right) {
				this.swap(currentIndex, rightIndex);
				currentIndex = rightIndex;
				continue;
			}

			break;
		}
	}

	bubbleUp() {
		let childIndex = this.values.length - 1,
			parentIndex = Math.floor((childIndex - 1) / 2);

		while (
			parentIndex >= 0 &&
			this.values[childIndex] < this.values[parentIndex]
		) {
			if (this.values[childIndex] < this.values[parentIndex]) {
				this.swap(parentIndex, childIndex);
			}

			childIndex = parentIndex;
			parentIndex = Math.floor((parentIndex - 1) / 2);
		}
	}

	swap(index1, index2) {
		const temp = this.values[index1];
		this.values[index1] = this.values[index2];
		this.values[index2] = temp;
	}
}
