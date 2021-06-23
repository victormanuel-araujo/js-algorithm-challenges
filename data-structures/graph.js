// TERMINOLOGY
// Vextex = Node
// Edge = connection

// Undirected Graph = (portuguese) Uma via de mão dupla
// Directed Graph = (portuguese) Uma via de mão única

// Unweighted Graph = Edge don't have value associated
// Weighted Graph = Edge have value associated

class GraphWithObjectEdges {
	constructor() {
		// adjacency list
		this.list = {};
	}

	addVertex(name) {
		if (!this.list[name]) this.list[name] = {};
	}

	addEdge(bindVtx, withVtx) {
		if (!bindVtx || !withVtx) return undefined;
		if (!this.list[bindVtx] || !this.list[withVtx]) return false;
		if (this.list[bindVtx][withVtx] || this.list[withVtx][bindVtx]) {
			return false;
		}

		this.list[bindVtx][withVtx] = true;
		this.list[withVtx][bindVtx] = true;

		return true;
	}

	removeEdge(vtx1, vtx2) {
		if (!vtx1 || !vtx2) return undefined;
		if (!this.list[vtx1] || !this.list[vtx2]) return false;

		delete this.list[vtx1][vtx2];
		delete this.list[vtx2][vtx1];
	}

	removeVertex(vtx) {
		delete this.list[vtx];

		for (const key in this.list) {
			if (this.list[key][vtx]) {
				delete this.list[key][vtx];
			}
		}
	}
}

class Graph {
	constructor() {
		// adjacency list
		this.list = {};
	}

	addVertex(name) {
		if (!this.list[name]) this.list[name] = [];
	}

	addEdge(bindVtx, withVtx) {
		if (!bindVtx || !withVtx) return undefined;
		if (!this.list[bindVtx] || !this.list[withVtx]) return false;
		if (
			this.list[bindVtx].includes(withVtx) ||
			this.list[withVtx].includes(bindVtx)
		) {
			return false;
		}

		this.list[bindVtx].push(withVtx);
		this.list[withVtx].push(bindVtx);

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

	DFS(startPoint) {
		return this.#DFSHelper(startPoint);
	}

	#DFSHelper(current, visitedLookup = {}, returnArr = []) {
		for (const vtx of this.list[current]) {
			if (!!visitedLookup[vtx]) continue;
			visitedLookup[vtx] = 1;

			this.#DFSHelper(vtx, visitedLookup, returnArr);
			returnArr.push(vtx);
		}

		return returnArr;
	}

	BFS(startPoint) {
		return this.#BFSHelper(startPoint);
	}

	#BFSHelper(current, visitedLookup = {}, returnArr = []) {
		if (!visitedLookup[current]) {
			visitedLookup[current] = 1;
			returnArr.push(current);
		}

		let nextVtx = [];

		for (const vtx of this.list[current]) {
			if (!!visitedLookup[vtx]) continue;
			visitedLookup[vtx] = 1;

			nextVtx.push(vtx);
			returnArr.push(vtx);
		}

		for (let next of nextVtx) {
			this.#BFSHelper(next, visitedLookup, returnArr);
		}

		return returnArr;
	}
}
