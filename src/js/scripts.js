async function main() 
{ 
   //output("Please select '1' to Create a New Profile; '2' to View Previous Profiles; or '3' to Exit the Program:");
   let userChoice = await input("\nPlease select '1' to Create a New Profile; '2' to View Previous Profiles; or '3' to Exit the Program: ");
   let profileArray=[];

  while(userChoice!=3)     // '3' will quit the program.
  {
      
      if (userChoice == 1)        // user selects '1' to creat a new profile.
      {
        
        //<<<<<<<<<<<<<<<<<<<<<<<<---------------------------BEGINNING OF FIRST NAME VALIDATION-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        
        
        let userName=await input("Please enter your first name: ");
        userName = userName.trim();
        let validName;
        let firstName;
        let lastName;
    
        do
        {   
        validName = checkName(userName);   
    
            if(validName)
            {
                firstName= userName.charAt(0).toUpperCase()+userName.slice(1);                 //capitalize the first letter of the first name.
            }
            else
            {
                userName = await input("Please enter a name with less than 20 characters. Name must contain only upper case letters, lower case letters, or a hyphen: ");
                userName=userName.trim();
            }
    
        } while(!validName);    
    
         //<---------------------------End of First Name Validation; below is the start of the Last Name validation----------------->>>>>>>>>>>>>>>>>>>>>>>>>>>
      
         userName=await input("Please enter your last name: ");
         userName = userName.trim();
        do
        {
        
         validName = checkName(userName);    
     
             if(validName)
             {
                 lastName= userName.charAt(0).toUpperCase()+userName.slice(1);  //capitalize the first letter of the last name.
             } 
             else
             {
                 userName = await input("Please enter a name with less than 20 characters. Name must contain only upper case letters, lower case letters, or a hyphen: ");
                 userName=userName.trim();
             }
     
        } while(!validName);
            output("Hello, "+firstName.charAt(0).toUpperCase()+firstName.slice(1)+" "+ lastName.charAt(0).toUpperCase()+lastName.slice(1));  //output the user's name as proper nouns.

          //<<<<<<<<<<<<<<<<<<<<<<<<<<<<-------------------------------THE CODE BELOW  IS FOR ADDRESS VERIFICATION AND VERIFIES THAT THE USER INPUTS AT LEAST 10 CHARACTERS-------------------->>>>>>>>>>>>>>

        let address=" ";                      
        let validAddress=false;  
                     
               while (validAddress==false)         
              {
                                               
               address= await input("Please enter a valid address: ");
               address=address.trim();
                
                 if(address.length>=10 && checkAddress(address)==true)  // check to see if the client entered the correct number of characters. If so, call the checkVin function.
                 {    
                    address=address.toUpperCase();
                    output("The address you entered: "+address+" is a valid address." );
                    validAddress=true;                             
                 }
                    
                 else if (address.length<10)        // if they've entered anything less than 10 characters, let them know, and set flag to false to make them try again.
                 {                  
                   output("The address you entered does not have at least 10 characters. It has "+address.length+" characters.");                  
                   validAddress=false;     
                 }                          
                
              }   // end of while loop
     
              function checkAddress(address)
              {
                 return /^[A-Za-z0-9 -/:,]*$/.test(address);   //check to make sure the user entered ONLY letters (upper and lower case) and numbers, and only certain characters              
              }        

         //  <<<<-----------------------------------THE CODE BELOW DEALS WITH SELECTING A VEHICLE BRAND----------------------------------------------------->


         output("\nManufacturer List:\n1. Audi\n2. BMW\n3. Chrysler\n4. Chevrolet  \n5. Cadillac \n6. Ford\n7. Mercedes \n8. Acura \n9. Hyundai\n10. VW \n11. GMC\n12. Buick\n13. Nissan\n14. Mazda\n15. Infiniti");
        
         let brandNum = await input("Please select a manufacturer number: ");
         let selectBrand;
         let validMake=false;
       do
       {               
            let length=brandNum.length;  //get the length of the entry. maximum number of characters for a valid entry is 2. anything >= 3. This work as long as there are less than 100 brands.chars means they've entered a decimal.          
           
            if((brandNum)<1 || (brandNum)>15 || (isNaN(brandNum)) || (length>=3))
            {
               output("You chose: " + brandNum+". That won't work.");
               brandNum = await input("Please enter a number between 1 and 15: "); 
               parseFloat(brandNum);
               length=brandNum.length;      //reset the length of the user entry to make the decimal check valid.             
            }
            else
            {                    
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

                     case 13:
                        selectBrand = "Nissan";
                        break;

                     case 14:
                        selectBrand = "Mazda";
                        break;

                     case 15:
                        selectBrand = "Infiniti";
                        break;
            
                     default:
                       output(" default case:Please select a manufacturer number between 1 and 15");
                       validMake=false;
                        break; 
                  }
                  validMake=true;

            }  // end of if/else             
                           
       } while (validMake==false || (length>=3))    //end of do
         
       output("Your manufacturer is " + selectBrand);           
       
               
        //  <---- -------------------------------------------BEGINNING OF VEHICLE MODEL HERE--------------------------------------------------------------------->>>>>>

        let selectModel= await input("\nPlease enter a model name: ");
        selectModel=selectModel.trim();
       
        let validModel=false;  
           
        if(selectModel=="")  // check to see if the client entered anything 
        {
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
             }
     
           } while(validModel==false)  // instead of looping, it ends the program     
        }
        else
        {            
             selectModel=selectModel.charAt(0).toUpperCase()+selectModel.slice(1);                    //capitalize the first letter of the model name
             output(firstName+" your vehicle model is a: "+selectBrand+" "+selectModel); 
        }
      
         //  <<<<<--------------------BEGINNING OF VEHICLE MODEL YEAR VALIDATION  ------------------------------------------------->>>>>>

         let validYear = false;
         let modelYear = await input("\nPlease enter the year of your vehicle: ");
             modelYear=modelYear.trim();
         
         const dYear=new Date();                                     //create a date object
             let dateYear=(dYear.getFullYear()+1);                       //get this year's 'year' number, and add one to it so that it'll always give us the current year +1; i.e., if this year is 2022, it'll return 2023
                   
             do
             {
                if((modelYear<=1900) || (modelYear>dateYear)|| (isNaN(modelYear)))
                {
                  output("Bad year entered;");  
                  modelYear= await input("Please enter a model year for your vehicle between 1900 and "+dateYear+" :");
                  modelYear=modelYear.trim();
                }
       
                else
                {
                   //output("in the year else; the year entered is "+ modelYear);
                   validYear=true;
                }
       
             } while(validYear==false)
             output("Vehicle model year is "+modelYear);


             // <--------------------------------------------BELOW IS THE CODE TO VERIFY THE VIN ENTERED ------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

             let vin=" ";                      // Real VIN for testing from a Ford Explorer Sport:   1FMCU9DZ8MUB12974       1fmcu9dz8mub12974 ;         fake 17 char vin: 0fmcu9di8muo12974
             let validVin=false;  
                          
                    while (validVin==false)         
                   {
                                                    
                     vin= await input("Please enter a 17 character VIN for your vehicle consisting of ONLY letters and numbers, EXCEPT: NO i, I, o,O, q, Q: ");
                     vin=vin.trim();
                     
                      if(vin.length==17 && checkVin(vin)==true)  // check to see if the client entered the correct number of characters. If so, call the checkVin function.
                      {    
                         vin=vin.toUpperCase();
                         output("The VIN you entered: "+vin+" is a valid VIN." );
                         validVin=true;     
                      }
                         
                      else if (vin.length!=17)        // if they've entered anything other than exactly 17 characters, let them know, and set flag to false to make them try again.
                      {                       
                        output("The VIN you entered does not have 17 characters. It has "+vin.length+" characters. Or you may have entered characters other than letters and numbers.");
                       
                         validVin=false;   
                      }                          
                     
                   }   // end of while loop
          
                   function checkVin(vin)
                   {
                      return  /^[A-HJ-NPR-Za-hj-npr-z0-9]*$/.test(vin);   //check to make sure the user entered ONLY letters (upper and lower case) and numbers. No 0 (zero) i, I, o, O or other characters acceptable.                   
                   }
           
            //<<<<<-----------------------THIS CODE BELOW IS TO CHECK FOR A CORRECT PURCHASE DATE ENTRY--------------------->>>>>>>>>>>>>>>>>>>


            let dateInput = await input("Please enter a purchase date in the format YYYY-MM-DD: ");
            dateInput=dateInput.trim();
            let verifyDate=false;
            
            do
            {            
            
             if(!checkPurchaseDate(dateInput))
             {
               dateInput=await input("You entered a wrong date. Please enter a valid date in the format YYYY-MM-DD: ");
               dateInput=dateInput.trim();
               verifyDate=false;               
             }

             else
             {
               output("The purchase date you entered is :"+dateInput);
                  verifyDate=true;
             }

            } while (verifyDate==false)

      function checkPurchaseDate(dateInput)
      {
               let outputValue = true;               
               let inputDate = dateInput.split("-");
              
              // Validate Year - Make sure the year is between 1900 and the current year.
              if (Number(inputDate[0])<=1900 || Number(inputDate[0] >new Date().getFullYear()) || !Number.isInteger(Number(inputDate[0])))
               {
                 output("The year must be between 1900 and this year.");
                  outputValue = false;
               }
              // Validate Month - Make sure the month is beween 1 and 12 and it's not a decimal.
              if (inputDate[1] < 1 || inputDate[1] > 12 || !Number.isInteger(Number(inputDate[1])))
               {
                  output("The month must be between 1 and 12.");
                  outputValue = false;
               }
              // Validate Day
               if (inputDate[2] < 1 || inputDate[2] > 31 || !Number.isInteger(Number(inputDate[2])))
               {
                  output("The day must be between 1 and 31.");
                  outputValue = false;
               }
                 return outputValue;
      } 

       function checkName(userName)
       {    
        let returnBool = false;
        let validLength;
        validLength=userName.length;
    
        if(validLength<21 && userName!="")   
        {
            if( /^[A-Za-z-\s]*$/.test(userName) ) //check to make sure the user entered ONLY letters (upper and lower case) or a hyphen. No other characters acceptable. 
            {
               // output("line 165 character test: "+ /^[A-Za-z-\s]*$/.test(userName) );
                returnBool=true;
            }
            else
            {
                returnBool=false;      
            }
        }
        else
        {
            returnBool=false;
        }  
          return  returnBool;    
       }
          //<<<<<----------------BELOW IS THE DECLARATION AND POPULATING OF THE VEHICLE ARRAY---------------------------------------------------------->>>> 
           
             let vehicleArray=[];

            for(let i=0; i<1; i++)
            {
               vehicleArray.push(firstName,lastName,address,selectBrand,selectModel,modelYear,vin,dateInput); //populate the array;                           
            }                   
            profileArray.push(vehicleArray);            //main array (Profile Array), and populate it with the contents of the vehicleArray.

      }      // <<<------------ this brace marks the end of the condition 1 'if'. 

        else if(userChoice==2)                
        {
          let arrayLength = profileArray.length;

           if(arrayLength==0)
           {
             output("Sorry, there are currently no profiles to display. Please select '1' from the main menu to enter a profile.");
           }

           else
           {
              for (i=0; i < profileArray.length; i++)
               {
                  let dataRow=profileArray[i];
                
                  for(let count=0; count < dataRow.length; count++)
                  {
                    // output("line 509: "+ dataRow[count]);

                  }               
                  output("\nFirst Name: "+dataRow[0]+"\nLast Name: "+dataRow[1]+"\nAddress: "+dataRow[2]+"\nVehicle Make: "+ dataRow[3]+"\nVehicle Model : "+ dataRow[4]+"\nModel Year: "+dataRow[5]+"\nVIN: "+dataRow[6]+"\nPurchase Date: "+dataRow[7]);                                
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