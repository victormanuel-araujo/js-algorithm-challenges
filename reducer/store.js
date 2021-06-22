// This is just an attempt to create a base of a reducer to check how it works
// It's not based on quality or performance, or even how it really works
// it's pretty much just an attempt

class PubSub {
	events = {};

	subscribe(eventName, callback) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}

		const subscribedIndex = this.events[eventName].length;
		this.events[eventName].push(callback);

		return () => this.events[eventName].splice(subscribedIndex, 1);
	}

	publish(eventName, data) {
		if (!this.events[eventName]) return;

		for (const cb of this.events[eventName]) {
			cb(data);
		}
	}
}

class Store {
	constructor(params) {
		this.events = params.events || new PubSub();

		this.reducer = params.reducer || null;
		this.state = new Proxy(params.state || {}, {
			set: (targetObj, key, value) => {
				targetObj[key] = value;

				console.log(`stateChange: ${key}: ${value}`);
				this.events.publish('stateChange', targetObj);

				return true;
			},
		});
	}

	dispatch(payload) {
		const newState = this.reducer(this.state, payload);

		for (const key in newState) {
			if (newState[key] === this.state[key]) continue;
			this.state[key] = newState[key];
		}
	}

	static create(reducer, INITIAL_STATE, pubsub = null) {
		const store = new Store({state: INITIAL_STATE, reducer, events: pubsub});
		return [store.state, store.dispatch.bind(store)];
	}
}
