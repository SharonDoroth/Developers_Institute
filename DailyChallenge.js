for (let i = 0; i <2; i++){
    console.log("- First level loop");
for (let j = 0; j <=3; j++){
    console.log('-- Second level loop');
}
}

var x,y,chr;
for (x=1; x <=6; x++)
{
    for (y=1; y < x; y++)
    {
        chr=chr+("*");
    }
    console.log(chr);
    chr='';
}