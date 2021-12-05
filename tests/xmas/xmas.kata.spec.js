const TwelveDaysOfXmas = require("./xmas.kata");

const original = `On the first day of Christmas
	My true love gave to me:
	A partridge in a pear tree.
	
	On the second day of Christmas
	My true love gave to me:
	Two turtle doves and
	A partridge in a pear tree.
	
	On the third day of Christmas
	My true love gave to me:
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the forth day of Christmas
	My true love gave to me:
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the fifth day of Christmas
	My true love gave to me:
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the sixth day of Christmas,
	My true love gave to me:
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the seventh day of Christmas,
	My true love gave to me:
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the eight day of Christmas,
	My true love gave to me:
	Eight maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the ninth day of Christmas,
	My true love gave to me:
	Nine ladies dancing
	Eight maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the tenth day of Christmas,
	My true love gave to me:
	Ten lords a-leaping
	Nine ladies dancing
	Eight maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the eleventh day of Christmas,
	My true love gave to me:
	Eleven pipers piping
	Ten lords a-leaping
	Nine ladies dancing
	Eight maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the Twelfth day of Christmas,
	My true love gave to me:
	Twelve drummers drumming
	Eleven pipers piping
	Ten lords a-leaping
	Nine ladies dancing
	Eight maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves
	And a partridge in a pear tree.`;

describe("Twelve Days of Xmas", () => {
	/* SETUP + TEARDOWN */

	beforeEach(() => {
		TDX = new TwelveDaysOfXmas();
	});

	/* VALIDATIONS */

	it("TwelveDaysOfXmas() exists", () => {
		expect(TDX.compose).toBeDefined();
	});

	it("TwelveDaysOfXmas() outputs the full song", () => {
		expect(TDX.composed).toEqual(original);
	});

	it("TwelveDaysOfXmas() partiture is smaller than composed original song", () => {
		expect(TDX.partiture.length).toBeLessThan(original.length);
	});

	it("TwelveDaysOfXmas() is the smallest program I can come up with", () => {
		const lastLength = 1868;
		console.log("LAST LENGTH", TDX.partiture.length);
		expect(TDX.partiture.length).toBeLessThan(lastLength);
	});
});
