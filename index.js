//declare random list
let list = [1,3,5,4,2];

//set a count variable to count how many iterations
let count = 0;

//create a temp variable
let temp;

// set my selection or point to the list with the index of count
// in the first iteration this is 0 so we select the first number
let selection = list[count];

// while count < length of the list count will be incremented after every iterarion 
// but list length is constant 
while (count<list.length) {

    //for loop to loop throught the numbers from count max
    //after swapping we will always start from the smaller number whhich is list[count] 
    // if the number is not swapped, it is smaller

    for(let i = count; i < list.length; i++){

        //check if list count is larger
        //if it is largert than list [i], that means it is not the smallest number so swap it with list [i]
        //if it is smaller then do nothin and just increment count
        if (list[count] > list [i]) {

           temp = list[count];

           list[count]= list[i];

           list[i] = temp;
        }

    }
    count ++;

    console.log(list)
}


