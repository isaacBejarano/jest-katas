"use strict";

class HundredDoors {
	constructor() {
		this.passes = 100;
		this.doorsMaxLength = 100;
		this.doors = []; // boolean[]
		this.snapshots = []; // doors[]
	}

	walkthrough() {
		// passes 101
		for (let i = 0; i <= this.passes; i++) {
			for (let j = 1; j <= this.doorsMaxLength; j++) {
				if (j % i === 0) this.doors[j - 1] = !this.doors[j - 1];
				// passes N [1...100] => toggle 100
				else if (i === 0) this.doors.push(false); // passe 1 [0] => populate doors
				// else => (j%i !== 0) => ignore not toggable
			}

			this.snapshots[i] = [...this.doors]; // snapshot for testing
		}
	}
}

module.exports = HundredDoors;
