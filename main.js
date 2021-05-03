var num_array = process.argv.slice(2)
console.log(num_array)
var i;
for(i=0;i<num_array.length;i++)
{
	var num = num_array[i];
	var arr = Array.from(String(num), Number);
	console.log(arr);
}
