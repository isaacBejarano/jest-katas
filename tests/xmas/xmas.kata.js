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
	};

	partiture = `#T1
	#T2
	A partridge in a pear tree.
	
	#T1
	#T2
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	#T1
	#T2
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
	
	#T1
	#T2
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

		return compressed.toString();
	}
}

module.exports = TwelveDaysOfXmas;
