"use strict";

const HundredDoors = require("./100doors.kata");
let hD = {}; // object

describe("new hundredDoors()", () => {
	/* SETUP + TEARDOWN */

	beforeEach(() => {
		hD = new HundredDoors();
		hD.walkthrough();
	});

	afterEach(() => {
		hD = new HundredDoors();
		hD.walkthrough();
	});

	/* VALIDATIONS */

	describe("hundredDoors.doors", () => {
		it("There are 100 doors in a row...", () => {
			expect(hD.doors.length).toEqual(hD.doorsMaxLength);
		});

		it("...all initially closed", () => {
			for (const door of hD.snapshots[0]) {
				expect(door).toBeFalsy();
			}
		});
	});

	describe("hundredDoors.walkthrough()", () => {
		it("You [will] make 100 passes by the doors.", () => {
			expect(hD.passes).toBe(100);
		});

		it("The first time through, you visit every door and toggle the door.", () => {
			hD.snapshots[1].forEach((door, i) => expect(door).not.toBe(hD.snapshots[0][i]));
		});

		it("The second time, you only visit every 2nd door (door #2, #4, #6, ...) [and toogle].", () => {
			for (let i = 1; i <= hD.doorsMaxLength; i++) {
				if (i % 2 === 0) expect(hD.snapshots[2][i - 1]).not.toBe(hD.snapshots[1][i - 1]);
				// toggle
				else expect(hD.snapshots[2][i - 1]).toBe(hD.snapshots[1][i - 1]); // keep
			}
		});

		it("The third time, every 3rd door (door #3, #6, #9, ...) [and toogle].", () => {
			for (let i = 1; i <= hD.doorsMaxLength; i++) {
				if (i % 3 === 0) expect(hD.snapshots[3][i - 1]).not.toBe(hD.snapshots[2][i - 1]);
				// toggle
				else expect(hD.snapshots[3][i - 1]).toBe(hD.snapshots[2][i - 1]); // keep
			}
		});

		it("...etc...", () => {
			for (let i = 1; i <= hD.doorsMaxLength; i++) {
				if (i % 50 === 0) expect(hD.snapshots[50][i - 1]).not.toBe(hD.snapshots[49][i - 1]);
				// toggle
				else expect(hD.snapshots[50][i - 1]).toBe(hD.snapshots[49][i - 1]); // keep
			}
		});

		it("...until you only visit the [every] 100th door [and toogle].", () => {
			for (let i = 1; i <= hD.doorsMaxLength; i++) {
				if (i % 100 === 0) expect(hD.snapshots[100][i - 1]).not.toBe(hD.snapshots[99][i - 1]);
				// toggle
				else expect(hD.snapshots[100][i - 1]).toBe(hD.snapshots[99][i - 1]); // keep
			}
		});

		it("What state are the doors in after the last pass?", () => {
			console.log(hD.doors);
		});
	});
});
