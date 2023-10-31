/*
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that 
you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
 */
let GuestLists:string[]=["Javed","Sajid","Rayyan"]
for (let i=0;i<3 ; i++)
{
    console.log(`Dear ${GuestLists[i]} I found a bigger dinner table`);
}

//unshift adds at the begining
GuestLists.unshift("parrot");

console.log(GuestLists);

GuestLists.splice(2, 0, "abc");
console.log(GuestLists);

GuestLists.push("New Guest");

console.log(GuestLists);


export {};