async function main() 
{

   //let lastName = await input("please enter your last name: ");


   // output("your name is " + firstName + " " + lastName);

   /* let selectBrand = await input("Please select a maunfacturer: '1' for Audi, '2' for BMW, '3' for Chrysler, '4' for Chevrolet, '5' for Cadillac, '6' for Ford, '7' for Mercedes, '8' for Acura, '9' for Hyundai, '10' for VW, '11' for GMC, and '12' for Buick: ");
    selectMake(selectBrand);
    output("Your vehicle manufacturer is " + selectBrand); // outputs a blank space rather than the name of the brand. string is not being returned.
 
    let selectModel = await input("Please enter your vehicle model: ");
    checkModel(selectModel);
 
    let modelYear = await input("Please enter the year of your vehicle: ");
    validateVehicleYear(modelYear);
    output("back in the main function line 253.");*/

    let userChoice = await input("Please select '1' to Create a New Profile; '2' to View Previous Profiles; or '3' to Exit the Program: ");
    output("you entered "+userChoice);
    

  while(userChoice!=3)
   {
      
     // if(userChoice==1)
     // {
         let firstName =await input("Please enter your first name: ");
         output(firstName);
        firstName = firstName.trim();
         output("This is the trimmed name: "+firstName);
         let count = firstName.length;
         
         output("This is the trimmed character count: "+count);
        /*let validLength = false;
         let validChar = false;
         
        do //this loop encompasses both checks - character length and correct characters. Both conditions (validChar, validLength) have to be set to true to exit the function and return to main program.

         {
            if (count > 20) //this code is to check the number opf characters...greater than 20, propmt for another name less than 21 chars long.
            {

               output("in the if because we have more than 20 letters.");
               output("This is the count " + count);

               do
               {
                     firstName = await input("In the do-while:Please enter a name with less than 20 letters: ");
                     firstName= firstName.trim(); //trim isn't working
                     count = firstName.length;

                     output("Count output in the do-while: " + count);
                     if (count <= 20) 
                     {
                        validLength = true;
                        output("valid length boolean value: " + validLength);
                     }
                     else 
                     {
                        output("Too many characters.");
                        //newName=await input("Please enter a name with less than 20 letters: ");

                     }

               } while (validLength !== true)

            }

            else if (count <= 20)
            {
               output("in the elseif line 62");
               do         //go through and make sure the name is all lower case, or uppercase or contains a hyphen. Anything else is rejected. It's not working <---------
               {
                  output("in the do loop line 66");
                  for (let i = 0; i < count; i++)  //<-------------for loop is not working
                  {

                     if ((firstName.charCodeAt(i) >= 65 && firstName.charCodeAt(i) <= 90) || (firstName.charCodeAt(i) >= 97 && firstName.charCodeAt(i) <= 122) /*|| !(nameCheck.charCodeAt(i) = 45))
                     {
                        validChar = true;  //correct chars, set 'validChar' to true to exit the loop 
                        output("This is the letter at 'i'" + firstName.charCodeAt(i));

                     }
                     else 
                     {
                        firstName = await input("Please enter a name with less than 20 characters. Name must contain only upper case letters, lower case letters, or a hyphen: ");
                        count = firstName.length;
                        output("this is the new count inside the else: " + count);
                        validChar = false;
                     }
                  }
               } while (validChar == false); //if name doesn't have correct characters, do loop again

               validLength = true;

            }
            else
            {

               output("all good in the else ");
            }

         } while ((validChar == false) || (validLength == false)); //if either boolean is false, loop repeats. Both must be true (chars<20, and chars letters/hypehen only) to exit function*/
         
         output("this is line 94");
         
        
     // }
     // else if(userChoice==2)
     // {
         output("this code will run if the user chooses option 2:");

     // }
     // else 
     // {
          output("Sorry, I didn'get the code you entered.");

     // }           
       userChoice=await output("You entered a wrong code. Please enter 1,2 or 3:"); 
   
   } 
      output("The program is closing. Goodbye.");
}


