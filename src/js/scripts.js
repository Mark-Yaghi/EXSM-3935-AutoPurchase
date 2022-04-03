async function main() 
{

 let userChoice = await input("Please select '1' to Create a New Profile; '2' to View Previous Profiles; or '3' to Exit the Program: ");

 let profileArray=[];

  while(userChoice!=3)     // '3' will quit the program.
  {
      
      if (userChoice == 1)        // user selects '1' to creat a new profile.
      {
         let firstName =await input("Please enter your first name: ");
         output(firstName);
         firstName = firstName.trim();
         let count = firstName.length;
         
         output("This is the trimmed character count: "+count);
         let validLength = false;
         let validChar = false;

        do
        {

           if (count > 20) //this code is to check the number opf characters...greater than 20, propmt for another name less than 21 chars long.
            {
              output("In the 'if' line 26");
               

              do
              {
               firstName = await input("In the do-while:Please enter a name with less than 20 letters: ");
               firstName= firstName.trim(); 
               count = firstName.length;

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

              } while(validLength!= true)
            }
            else if(count <=20)     // if number of characters is 20 or less, then check that everything they've 
            {                       // is upper case or lower case letters or includes a hyphen.

              do
              {
               for (let i = 0; i < count; i++)  
               {

                  if ((firstName.charCodeAt(i) >= 65 && firstName.charCodeAt(i) <= 90) || (firstName.charCodeAt(i) >= 97 && firstName.charCodeAt(i) <= 122) /*|| !(nameCheck.charCodeAt(i) = 45)*/)
                  {
                     validChar = true;  //correct chars, set 'validChar' to true to exit the loop 
                     //output("This is the letter at 'i'" + firstName.charCodeAt(i));

                  }
                  else  // else they've entered a name with more than 20 characters.
                  {
                     firstName = await input("Please enter a name with less than 20 characters. Name must contain only upper case letters, lower case letters, or a hyphen: ");
                     firstName= firstName.trim();
                     count = firstName.length;                // get the number of characters for the new new input
                     output("this is the new count inside the else: " + count);
                     validChar = false;
                  }
               }

              }while (validChar == false)
              
              
               output("inside the do on line 26, chars less than 20");

               validChar=true;
               validLength=true;

            }
            else
            {
               output("Too many characters.");

            }

         }while ((validChar == false) || (validLength == false))

         output("End of first name verification");

         // <--- BEGIN LAST NAME VERIFICATION BELOW HERE------>


        

         //  <<<<---------THE CODE BELOW DEALS WITH SELECTING A VEHICLE BRAND----->
         
         
         let brandNum = await input("Please select a maunfacturer: '1' for Audi, '2' for BMW, '3' for Chrysler\n '4' for Chevrolet, '5' for Cadillac, '6' for Ford\n '7' for Mercedes, '8' for Acura, '9' for Hyundai\n '10' for VW, '11' for GMC, and '12' for Buick: ");
         let selectBrand;
         let validMake=false;

       do
       {     
          
            let length=brandNum.length;  //get the length of the entry. maximum no of characters for a valid entry is 2. anything >= 3 chars means they've entered a decimal.
           // brandNum = Number(brandNum);

            output("Line 109 This is length of the brandNum entry: "+length);
            output("Line 110: brandNum value : "+brandNum);

            if((Number.isInteger(brandNum<1)) || (Number.isInteger(brandNum>12)) || (isNaN(brandNum)) || (length>=3))
            {
               output("line 113 : in the select make function. You chose: " + brandNum+". That won't work.");
               brandNum= await input("Please enter a number between 1 aand 12: "); 
               length=brandNum.length;      //reset the length of the user entry to make the decimal check valid.
               output("line 117: brandnum after prompt is "+length+" characters long");
               output("line 118: new brandNum in the if after correct number prompt: "+brandNum); 
               validMake=false;
                       
            }

            else
            {
                     output("In the switch");
                  switch (Number(brandNum)) 
                  {
                     case 1:
                        selectBrand = "Audi";
                        break;
            
                     case 2:
                        selectBrand = "BMW";  
                        break;
            
                     case 3:
                        selectBrand = "Chrysler";
                         break;
            
                     case 4:
                        selectBrand = "Chevrolet";
                        break;
            
                     case 5:
                        selectBrand = "Cadillac";
                        break;
            
                     case 6:
                        selectBrand = "Ford";
                           break;
            
                     case 7:
                        selectBrand = "Mercedes";
                           break;
            
                     case 8:
                        selectBrand = "Acura";
                           break;
            
                     case 9:
                        selectBrand = "Hyundai";
                        break;
            
                     case 10:
                        selectBrand = "VW";
                        break;
            
                     case 11:
                        selectBrand = "GMC";
                        break;
            
                     case 12:
                        selectBrand = "Buick";
                        break;
            
                     default:
                       output("Please select a manufacturer number between 1 and 12");
                        break; 
                  }
                  validMake=true;

            }  // end of if/else             
                   output("Line 183: Thiis is the brandNum value at the end of the if :"+brandNum);
         
       } while (validMake==false || (length>=3))    //end of do
         
       output("Your manufacturer is " + selectBrand);    
       
       
               
        //  <---- --------BEGINNING OF VEHICLE MODEL HERE--------------->>>>>>

        let selectModel= await input("Please enter a model name: ");
        selectModel=selectModel.trim();
       
        //output("Line 100, after the checkModel function call. The model is: "+selectModel);      
     
        let validModel=false;  
           
        if(selectModel=="")  // check to see if the client entered anything 
        {
            output("SelectModel on line 110 is empty: "+selectModel);
     
           do        
           {
              selectModel= await input("Please enter a model name: ");
              selectModel=selectModel.trim();
     
             if (selectModel=="")
             {
     
              validModel=false;
              output("You need to enter a model name for your vehicle:");
     
             }
     
             else
             {            
              validModel=true;
              output("Line 121--> Your model is: "+ selectModel);
             }
     
           } while(validModel==false)  // instead of looping, it ends the program
     
        }
        else
        {
            output(firstName+" your vehicle model is a: "+selectBrand+" "+selectModel); 
        }
      
         
         //  <<<<<--------------------BEGINNING OF VEHICLE MODEL YEAR VALIDATION  ------->>>>>>

         let validYear = false;
         let modelYear = await input("Please enter the year of your vehicle: ");
             output("in the ValidateVehicleYear function; the year is: "+modelYear);
             const dYear=new Date();                                     //create a date object
             let dateYear=(dYear.getFullYear()+1);                       //get this year's 'year' number, and add one to it so that it'll always give us the current year +1; i.e., if this year is 2022, it'll return 2023
             output("Line 210 the year is: "+dateYear);
       
             do
             {
                if((modelYear<=1900) || (modelYear>=dateYear)|| (isNaN(modelYear)))
                {
                  output("in the year if, line 246. Bad year entered;");  
                  modelYear= await input("Please enter a model year for your vehicle between 1900 and "+dateYear+" :");
                }
       
                else
                {
                   output("in the year else; the year entered is "+ modelYear);
                   validYear=true;
                }
       
             } while(validYear==false)


             output("Vehicle model year is "+modelYear);


           
           
           
           
          //<<<<<----------------BELOW IS THE DECLARATION AND POPULATING OF THE VEHICLE ARRAY------>>>> 
           
             let vehicleArray=[];

            for(let i=0; i<1; i++)
            {

               vehicleArray.push([firstName,selectBrand,selectModel,modelYear]); //populate the array;
               
               //still need to add lastName, VIN, email address, home address and purchase date to the array.
               //when that's done, create main array (Profile Array), and populate it with the contents of the vehicleArray.
            }

            for(row of vehicleArray)
            {

               output(row);    // display the array -- this is just a test line to ensure proper input.
            }


            

            profileArray.push(vehicleArray);

            //for(row of profileArray)
            //{

            //   output(row);    // display the array -- this is just a test line to ensure proper input.
           // }



      }      // <<<------------ this brace marks the end of the condition 1 'if'. 








        else if(userChoice==2)
        {
           output(" option 2:");

           let arrayLength = profileArray.length;

           if(arrayLength==0)
           {
             output("Sorry, there are currently no profiles to display. Please select '1' from the main menu to enter a profile.");

           }

           else
           {
               for(row of profileArray)
               {

                output(row);    // display the array -- this is just a test line to ensure proper input.
               }

           }

          

        }
      
        else
        {        
            output("Invalid choice, please choose again.");     
        }
         
         userChoice= await input("Please select '1' to Create a New Profile; '2' to View Previous Profiles; or '3' to Exit the Program: ");
   }
            
        output("The program is closing. Goodbye.");

}

   



