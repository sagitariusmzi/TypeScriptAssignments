/*Changing Guest List: 
You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite. */


let GuestLists:string[]=["Javed","Sajid","Rayyan"]

/*Start with your program from Exercise 14. 
Add a print statement at the end of your program stating the name of the guest 
who can’t make it.*/
console.log(`Mr ${GuestLists[2]} Wouln't be able to join on dinner`);
GuestLists.splice(2, 0, "Zafar"); 

for (let i=0;i<3 ; i++)
{
    console.log(`Dear ${GuestLists[i]} I would like to invite you on Dinner`);
}

export {};