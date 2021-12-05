class TwelveDaysOfXmas {
	paragraphs = 12;

	tails = {
		T1: {
			string: "On the #HELPER day of Christmas",
			helpers: [
				"first",
				"second",
				"third",
				"forth",
				"fifth",
				"sixth",
				"seventh",
				"eight",
				"ninth",
				"tenth",
				"eleventh",
				"Twelfth",
			],
		},
		T2: "My true love gave to me:",
		T3: {
			helpers: ["A", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"],
		},
	};

	partiture = `#T1
	#T2
	#T3 partridge in a pear tree.
	
	#T1
	#T2
	#T3 turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 ladies dancing
	Eight maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 lords a-leaping
	Nine ladies dancing
	Eight maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	#T3 pipers piping
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
	
	#T1
	#T2
	#T3 drummers drumming
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

	composed = "";

	constructor() {
		this.compose();
	}
	
	compose() {
		// save input
		this.composed = this.partiture;

		// transform
		for (let i = 0; i < this.paragraphs; i++) {
			// T1
			this.composed =
				i < 5
					? this.composed.replace(/#T1/, this.tails.T1.string)
					: this.composed.replace(/#T1/, this.tails.T1.string + ","); // [i]
			this.composed = this.composed.replace(/#HELPER/, this.tails.T1.helpers[i]);

			// T2
			this.composed = this.composed.replace(/#T2/g, this.tails.T2);

			// T3
			this.composed = this.composed.replace(/#T3/, this.tails.T3.helpers[i]);
		}
	}
}

module.exports = TwelveDaysOfXmas;
