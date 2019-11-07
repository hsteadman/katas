var rcgBoxes=prompt("How many boxes of Rose-Colored Glasses do you want?");
var ppBoxes=prompt("How many boxes of Pink Paint do you want?");
if(ppBoxes>rcgBoxes){
	alert(ppBoxes+" paint boxes is more than "+rcgBoxes+" glasses boxes.");
}
else{
	alert(ppBoxes+" paint boxes is less than "+rcgBoxes+" glasses boxes.");
}
alert("Expect to receive "+(rcgBoxes+ppBoxes)" boxes.");