class TwelveDaysOfXmas {
	tails = {
		T1: {
			string: "On the #HELPER day of Christmas",
			helper: [
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
		T3: ["A", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"],
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

	song() {
		let compressed = this.partiture;

		// T1
		this.tails.T1.helper.forEach((helper, i) => {
			compressed =
				i < 5 ? compressed.replace(/#T1/, this.tails.T1.string) : compressed.replace(/#T1/, this.tails.T1.string + ","); // [i]
			compressed = compressed.replace(/#HELPER/, helper);
		});

		// T2
		compressed = compressed.replace(/#T2/g, this.tails.T2);

		// T3
		this.tails.T3.forEach(helper => {
			compressed = compressed.replace(/#T3/, helper);
		});

		return compressed.toString();
	}
}

module.exports = TwelveDaysOfXmas;
