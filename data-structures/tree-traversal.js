class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const DepthFirstSeachType = {
	PRE_ORDER: 0,
	POST_ORDER: 1,
	IN_ORDER: 2,
};

class BinaryTree {
	root = null;

	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
			return this;
		}

		let currentNode = this.root;

		while (true) {
			if (value === currentNode.value) return false;

			if (value < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					break;
				}

				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					break;
				}

				currentNode = currentNode.right;
			}
		}

		return this;
	}

	find(value) {
		if (!this.root) return false;

		let foundNode = null,
			currentNode = this.root;

		while (!foundNode && currentNode) {
			if (value === currentNode.value) {
				foundNode = currentNode;
				break;
			}

			if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else {
				currentNode = currentNode.left;
			}
		}

		return foundNode;
	}

	breadthFirstSeach() {
		return this.breadthFirstSeachHelper();
	}

	breadthFirstSeachHelper(queue = [this.root], visited = []) {
		if (queue.length === 0) return visited;

		const currentNode = queue.shift();
		visited.push(currentNode.value);

		if (currentNode.left) {
			queue.push(currentNode.left);
		}

		if (currentNode.right) {
			queue.push(currentNode.right);
		}

		return this.breadthFirstSeachHelper(queue, visited);
	}

	depthFirstSeachInOrder() {
		return this.traverse(DepthFirstSeachType.IN_ORDER);
	}

	depthFirstSeachPreOrder() {
		return this.traverse(DepthFirstSeachType.PRE_ORDER);
	}

	depthFirstSeachPostOrder() {
		return this.traverse(DepthFirstSeachType.POST_ORDER);
	}

	traverse(type, data = [], currentNode = this.root) {
		if (type === DepthFirstSeachType.PRE_ORDER) data.push(currentNode.value);

		if (currentNode.left) this.traverse(type, data, currentNode.left);

		if (type === DepthFirstSeachType.IN_ORDER) data.push(currentNode.value);

		if (currentNode.right) this.traverse(type, data, currentNode.right);

		if (type === DepthFirstSeachType.POST_ORDER) data.push(currentNode.value);

		return data;
	}
}
