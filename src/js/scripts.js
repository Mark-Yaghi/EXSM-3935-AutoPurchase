async function main() {

   /*starting with small functions, and when I'm surte they're working correctly, move on to next and/or integrate them with larger program*/

   async function checkName(nameCheck) 
   {

      output("in the checkName function, line 8");
      let count = nameCheck.length;
      let validLength = false;
      let validChar = false;
      let revisedName = nameCheck;

      do //this loop encompasses both checks - character length and correct characters. Both conditions (validChar, validLength) have to be set to true to exit the function and return to main program.

      {
         if (count > 20) //this code is to check the number opf characters...greater than 20, propmt for another name less than 21 chars long.
         {

            output("in the if because we have more than 20 letters.");
            output("This is the count " + count);

            do {
               revisedName = await input("In the do-while:Please enter a name with less than 20 letters: ");
               count = revisedName.length;

               output("Count output in the do-while: " + count);
               if (count <= 20) {
                  validLength = true;
                  output("valid length boolean value: " + validLength);
               }
               else {
                  output("Too many characters.");
                  //newName=await input("Please enter a name with less than 20 letters: ");

               }

            } while (validLength =false || count >= 21);

         }
        

         else if(count<=20)      
          {
           output("in the elseif line 44");
               do         //go through and make sure the name is all lower case, or uppercase or contains a hyphen. Anything else is rejected.
               {
                     output("in the do loop line 47");
                  for (let i = 0; i <= count; i++)
                  {
                     output("'i count' in the for loop: "+ i);
                     output("namecheck at line 52"+nameCheck);
                     if (!(nameCheck.charcodeAt(i) >= 65 && nameCheck.charCodeAt(i) <= 90) || !(nameCheck.charCodeAt(i) >= 97 && nameCheck.charCodeAt(i) <= 122) || !(nameCheck.charCodeAt(i) = 45))
                     {
                        revisedName = await output("Please enter a name with less than 20 characters. Name must contain only upper case letters, lower case letters, or a hyphen: ");

                     }

                     else
                     {
                        validChar = true;  //correct chars, set 'validChar' to true to exit the loop                                                             

                     }
                  }
               } while (validChar = false); //if name doesn't have correct characters, do loop again

         }
          else
          {

             output("all good in the else ");
          }     

      } while ((validChar = false) || (validLength = false)); //if either boolean is false, loop repeats. Both must be true (chars<20, and chars letters/hypehen only) to exit function

      //return revisedName;
   }


   let firstName = await input("please enter your first name: ");
   checkName(firstName);

   let lastName = await input("please enter your last name: ");
   checkName(lastName);

   output("your name is " + firstName + " " + lastName);


}


