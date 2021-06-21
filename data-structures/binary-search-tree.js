class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
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
}
