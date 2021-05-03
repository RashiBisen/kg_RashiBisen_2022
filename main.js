let digits = new Map()
digits.set(0, "Zero")
digits.set(1, "One")
digits.set(2, "Two")
digits.set(3, "Three")
digits.set(4, "Four")
digits.set(5, "Five")
digits.set(6, "Six")
digits.set(7, "Seven")
digits.set(8, "Eight")
digits.set(9, "Nine")
var num_array = process.argv.slice(2);
var word_string = "";
var i;
for(i=0;i<num_array.length;i++)
{
	var num = num_array[i];
	var arr = Array.from(String(num), Number);
	var j;
	var temp_num ="";
	for(j=0;j<arr.length;j++)
	{
		temp_num += digits.get(arr[j]);
	}
	word_string += temp_num;
	word_string += ",";
}
word_string = word_string.slice(0, -1)
console.log(word_string);
