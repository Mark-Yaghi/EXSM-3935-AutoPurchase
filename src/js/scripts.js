async function main()
 {
   
    /*starting with small functions, and when I'm surte they're working correctly, move on to next and/or integrate them with larger program*/

async function checkName(nameCheck)
    {        
        
        output("in the checkName function");
        let count = nameCheck.length;
        let validLength=false;     
       let revisedName;  
           
       if(count>20)
       {
          
             output("in the if because we have more than 20 letters.");  
             output("This is the count "+count);
             

               do
               {
                  revisedName = await input("In the do-whileyaghi:Please enter a name with less than 20 letters: "); 
                  count=revisedName.length;  
                  
                  //let newName= await input("Please enter a name with less than 20 letters: ");   
                  //let newCount=newName.length;   
                  output("Count output in the do-while"+count);   
                  if (count<=20)
                  {
                     validLength=true;
                                
                  }  
                  else
                  {
                     output("Too many characters.");
                     //newName=await input("Please enter a name with less than 20 letters: ");

                  } 
                  
               } while(validLength!==true);//);  count>=21    
                     
             /* if (newCount<=20)
            {
              validLength=true;
               count=newCount;                           
            }  
            else
            {
                output("Too many characters.");
                newName=await input("Please enter a name with less than 20 letters: ");
            } */     
                    
        }

        else
        {
            output("all good in the else ");
        }

        return revisedName;
        
       /*   if(count > 20)
         {
            let validName = false;
            let newName=/*awaitinput("Please enter a name with less than 20 letters: ");            

         }
        
         else if(charCode)
         {
            for (let i =0; i<=count; i++;)
         }
         else
         {
            output("In the else statement; number of letters is less than 20.");

         }*/
        
       // output("count"+count);
    }
    

    let firstName = await input("please enter your first name: ");
        
    checkName(firstName); 
    

    let lastName = await input("please enter your last name: ");
    checkName(lastName);
    output("your name is "+firstName+" "+lastName);

  
}


