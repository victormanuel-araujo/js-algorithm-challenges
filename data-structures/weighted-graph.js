class PriorityQueue {
	constructor() {
		this.values = [];
	}

	enqueue(value, previous, priority) {
		this.values.push({value, previous, priority});
		this.bubbleUp();
	}

	dequeue() {
		if (this.values.length === 1) return this.values.pop();

		const root = this.values[0];
		this.values[0] = this.values.pop();
		this.sinkDown();

		return root;
	}

	bubbleUp() {
		let currentIndex = this.values.length - 1;
		let parentIndex = (currentIndex - 1) / 2;

		while (currentIndex > 0 && parentIndex >= 0) {
			if (
				!!this.values[parentIndex] &&
				this.values[currentIndex].priority < this.values[parentIndex].priority
			) {
				this.swap(currentIndex, parentIndex);
			}

			break;
		}
	}

	sinkDown() {
		let currentIndex = 0;
		let left, right;

		while (true) {
			left = currentIndex * 2 + 1;
			right = currentIndex * 2 + 2;

			if (!this.values[left]) break;

			if (
				!!this.values[left] &&
				this.values[currentIndex].priority > this.values[left].priority
			) {
				this.swap(left, currentIndex);
				currentIndex = left;
				continue;
			}

			if (
				!!this.values[right] &&
				this.values[currentIndex].priority > this.values[right].priority
			) {
				this.swap(right, currentIndex);
				currentIndex = right;
				continue;
			}

			break;
		}
	}

	swap(index1, index2) {
		const temp = this.values[index1];
		this.values[index1] = this.values[index2];
		this.values[index2] = temp;
	}
}

class WeightedGraph {
	constructor() {
		this.list = {};
	}

	addVertex(name) {
		if (!this.list[name]) this.list[name] = [];
	}

	addEdge(bindVtx, withVtx, weight) {
		if (!bindVtx || !withVtx) return undefined;
		if (!this.list[bindVtx] || !this.list[withVtx]) return false;
		if (
			this.list[bindVtx].includes(withVtx) ||
			this.list[withVtx].includes(bindVtx)
		) {
			return false;
		}

		this.list[bindVtx].push({node: withVtx, weight});
		this.list[withVtx].push({node: bindVtx, weight});

		return true;
	}

	removeEdge(vtx1, vtx2) {
		if (!vtx1 || !vtx2) return undefined;
		if (!this.list[vtx1] || !this.list[vtx2]) return false;

		this.list[vtx1] = this.list[vtx1].filter((vertex) => vertex != vtx2);
		this.list[vtx2] = this.list[vtx2].filter((vertex) => vertex != vtx1);
	}

	removeVertex(vtx) {
		while (this.list[vtx].length) {
			const currentItem = this.list[vtx].pop();
			this.removeEdge(vtx, currentItem);
		}

		delete this.list[vtx];
	}

	getShortestPath(fromPoint, toPoint) {
		const track = {};
		const distances = {};
		const visitedLookup = {[fromPoint]: true};
		const queue = new PriorityQueue();

		let currentNode;

		for (const key in this.list) {
			if (key === fromPoint) {
				distances[fromPoint] = 0;
				continue;
			}

			track[key] = null;
			distances[key] = Infinity;
		}

		for (const value of this.list[fromPoint]) {
			queue.enqueue(value.node, fromPoint, value.weight);
		}

		while (queue.values.length > 0) {
			currentNode = queue.dequeue();

			if (distances[currentNode.value] > currentNode.priority) {
				distances[currentNode.value] = currentNode.priority;

				track[currentNode.value] = currentNode.previous;
			}

			for (const value of this.list[currentNode.value]) {
				if (value.node === currentNode.previous || visitedLookup[value.node]) {
					continue;
				}

				visitedLookup[currentNode.value] = true;
				queue.enqueue(
					value.node,
					currentNode.value,
					value.weight + currentNode.priority
				);
			}
		}

		if (!track[toPoint]) return false;

		const route = [toPoint];
		let currentIndex = toPoint;

		while (track[currentIndex]) {
			route.push(track[currentIndex]);
			currentIndex = track[currentIndex];
		}

		return route.reverse();
	}
}
