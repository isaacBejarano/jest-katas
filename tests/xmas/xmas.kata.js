class TwelveDaysOfXmas {
	tails = {
		T1: "",
		T2: "My true love gave to me:",
	};

	partiture = `On the first day of Christmas
	#T2
	A partridge in a pear tree.
	
	On the second day of Christmas
	#T2
	Two turtle doves and
	A partridge in a pear tree.
	
	On the third day of Christmas
	#T2
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the forth day of Christmas
	#T2
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the fifth day of Christmas
	#T2
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the sixth day of Christmas,
	#T2
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the seventh day of Christmas,
	#T2
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the eight day of Christmas,
	#T2
	Eight maids a-milking
	Seven swans a-swimming
	Six geese a-laying
	Five golden rings
	Four calling birds
	Three french hens
	Two turtle doves and
	A partridge in a pear tree.
	
	On the ninth day of Christmas,
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
	
	On the tenth day of Christmas,
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
	
	On the eleventh day of Christmas,
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
	
	On the Twelfth day of Christmas,
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
		let partiture = this.partiture;
		let compressed = partiture.replace(/#T2/g, this.tails.T2);
		return compressed;
	}
}

module.exports = TwelveDaysOfXmas;
