class HashTable {
	constructor(size = 73) {
		this.keyMap = new Array(size);
	}

	set(key, value) {
		const hash = this.#hash(key);
		if (!this.keyMap[hash]) {
			this.keyMap[hash] = [];
		}

		this.keyMap[hash].push([key, value]);
	}

	get(key) {
		const hash = this.#hash(key);

		if (!this.keyMap[hash]) return undefined;

		const foundItemForKey = this.keyMap[hash].find(
			(keyValue) => keyValue[0] === key
		);

		return foundItemForKey ? foundItemForKey[1] : undefined;
	}

	keys() {
		const filteredArray = this.keyMap.filter((item) => item !== undefined);
		return this.#getItemsRecusively(filteredArray, 0);
	}

	values() {
		const filteredArray = this.keyMap.filter((item) => item !== undefined);
		return this.#getItemsRecusively(filteredArray, 1);
	}

	#getItemsRecusively(itemArray, returnIndex, currentIndex = 0, arr = []) {
		const item = itemArray[currentIndex];
		if (itemArray.length > 0 && !!item) {
			if (item[0].constructor !== Array) {
				if (!arr.includes(item[returnIndex])) {
					arr.push(item[returnIndex]);
				}

				this.#getItemsRecusively(itemArray, returnIndex, currentIndex + 1, arr);
			}

			if (item[0].constructor === Array) {
				this.#getItemsRecusively(item, returnIndex, 0, arr);
			}

			this.#getItemsRecusively(itemArray, returnIndex, currentIndex + 1, arr);
		}

		return arr;
	}

	#hash(key) {
		let total = 0;
		const PRIME_NUMBER = 31;

		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * PRIME_NUMBER + value) % this.keyMap.length;
		}

		return total;
	}
}
