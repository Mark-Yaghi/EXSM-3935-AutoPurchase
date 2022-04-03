async function main()
{

    let userChoice = await input("Please select '1' to Create a New Profile; '2' to View Previous Profiles; or '3' to Exit the Program: ");

  while(userChoice!=3)
  {
      
        if (userChoice == 1)
        {

            output("the user entered a 1 to create a new profile.");
        }

        else if(userChoice==2)
        {
           output("this code will run if the user chooses option 2:");

        }
      
        else
        {        
            output("Invalid choice, please choose again.");          
            
        }
         
         userChoice= await input("Please select '1' to Create a New Profile; '2' to View Previous Profiles; or '3' to Exit the Program: ");
    }
            
        output("The program is closing. Goodbye.");

}

 /* async function selectMake(brandNum)
           {
       
             output("in the select make function. You chose: " + brandNum);
             let validMake=false;
             let selectBrand;
       
             do {
       
                if ((brandNum > 12) || (brandNum < 1) /*|| (isNaN(brandNum)) //make sure the user entered a number between 1 and 12, since that's all the vehicles i nthe switch; also check to make sure it's a number
               // {
       
                //  brandNum = await input("Please enter a number between 1 and 12: ");
                 //  validMake=false;
               // }
               // else
               // {
       
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
                        // break;  put another input here to recieve user's entry
                                          
                  // }
                   //validMake=true;
                }
       
             } while(validMake==false); // if the switch loops itself then  idon't need a do-while
       
             output("Your manufacturer is " + selectBrand);
             return selectBrand
       
          }
       
          async function checkModel(selectModel)
          {
       
             let validModel=false;  
             
            if(selectModel=="")  // check to see if the client entered anything 
            {
              output("SelectModel on line 165: "+selectModel);
       
             do        
             {
               let modelName= await input("Please enter a model name: ");
       
               if (modelName=="")
               {
       
                validModel=false;
                output("You need to enter a model name for your vehicle:");
       
               }
       
               else
               {            
                validModel=true;
                output("Line 184--> Your model is: "+ modelName);
               }
       
             } while(validModel==false)  // instead of looping, it ends the program
       
           }
           else
           {
               output("Your vehicle model is: "+selectModel); 
           }
       
          }
       
          async function validateVehicleYear(modelYear)
          {
       
             let validYear = false;
             output("in the ValidateVehicleYear function; the year is: "+modelYear);
             const dYear=new Date();                                     //create a date object
             let dateYear=(dYear.getFullYear()+1);                       //get this year's 'year' number, and add one to it so that it'll always give us the current year +1; i.e., if this year is 2022, it'll return 2023
             output("Line 210 the year is: "+dateYear);
       
       
             do
             {
                if(/*(modelYear<=1900) || (modelYear>=dateYear) /*|| (isNaN(modelYear)))
                {
                   output("in the year if, line 213");
                }
       
                else
                {
                   output("in the year else");
                   validYear=true;
                }
       
             } while(validYear==false)
          }*/