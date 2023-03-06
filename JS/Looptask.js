//task 1
// var number=121;
// var num, numReverse = 0;

//  num = number;
//             while(number>0) 
//             {
//                numReverse = numReverse * 10;
//                numReverse = numReverse + number % 10;
//                number = number / 10;
//             }
//             if (num == numReverse)
//             {
//                console.log("Polindrome");
//             }
//             else
//             {
//                console.log("Not Polindrome");
//             }

//task2

// var number=24

//             for (var i = 1; i <= number; i++)
//             {
//                if (number % 2 == 0)
//                {
//                    console.log("The number is complex");
//                    break;
//                }
//                else
//                {
//                    console.log("number is simple");
//                    break;
//                }
//             }


//task3
            
// var number = 10;
// var sum = 0;

//             for (var i = 1; i <= number; i++)
//             {
//                 var count = 0;
//                for (var j = 2; j <= i / 2; j++)
//                {
//                    if (i % j == 0)
//                    {
//                        count++;

//                        break;
//                    }

//                }

//                if (count == 0 && i > 1)
//                {
//                    sum += i;
//                }
//             }
//            console.log(sum);


//task4

// var w=5;
// var l=4;

//  for (var i = 0; i < w; i++)
//             {
//                for (var j = 0; j < l; j++)
//                {
//                    if (i == 0 || i == w - 1 || j == 0 || j == l - 1)
//                    {
//                        console.log("*");
//                    }
//                    else
//                    {
//                        console.log(" ");
//                    }
//                }
//               console.log();
//             }