// Question 1
// What will the code below output to the console and why ?


// console.log(1 + "2" + "2");             
// --> 122           here the result will be 1+"2"+"2". Since a number can't be added 
//                     to a string ,So string concatenation
//                   of 1,2 and 2 and hence output is 122

// console.log(1 + +"2" + "2");

// --> 32        because + or - operand in front of a string converts it to number. 
//                 so here +"2" will become 2 hence the result will be 1+2 +"2". So string concatenation
//                 of 3 and 2 and hence output is 32

// console.log(1 + -"1" + "2");

//  --> 02       because + or - operand in front of a string converts it to number. 
//                 so here -"1" will become -1 hence the result will be 1-1 +"2". So string concatenation
//                 of 0 and 2 and hence output is 02


// console.log(+"1" + "1" + "2");

// --> 112          because + or - operand in front of a string converts it to number. 
//                 so here +"1" will become 1 hence the result will be 1+ "1" +"2". So string concatenation
//                 of 1,1 and 2 and hence output is 112


// console.log( "A" - "B" + "2");

//  --> NaN2         
//                  any operator except + will display "NaN" because js supports only string concatenation 
//                  here, "A"-"B" will be "NaN" and concate(+) 2 will produce "NaN2


// console.log( "A" - "B" + 2);

// --> NaN         any operator except + will display "NaN" because js supports only string concatenation 
//                  also, 2 is number here not a string ,therefore, not concatenated.





// Question 2
// You are given a variable “marks”. Your task is to print:
// - AA if the mark is greater than 90
// - AB if the mark is greater than 80 and less than or equal to 90
// - BB if the mark is greater than 70and less than or equal to 80
// - BC if the mark is greater than 60 and less than or equal to 70
// - CC if the mark is greater than 50 and less than or equal to 60
// - CD if the mark is greater than 40 and less than or equal to 50
// - DD if the mark is greater than 30 and less than or equal to 40
// - FF if the mark is less than or equal to 30


var marks=78;
if(marks>90)
{
    console.log("AA");
}
else if(marks>80 && marks<=90)
{
    console.log("AB");
}

else if(marks>70 && marks<=80)
{
    console.log("BB");
}
else if(marks>60 && marks<=70)
{
    console.log("BC");
}
else if(marks>50 && marks<=60)
{
    console.log("CC");
}
else if(marks>40 && marks<=50)
{
    console.log("CD");
}
else if(marks>30 && marks<=40)
{
    console.log("DD");
}
else if(marks<=30)
{
    console.log("FF");
}











