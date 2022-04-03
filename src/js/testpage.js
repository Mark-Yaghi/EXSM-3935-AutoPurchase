async function main()
{

 //  <<<<<--------------------BEGINNING OF VEHICLE MODEL YEAR VALIDATION  ------->>>>>>

 let validYear = false;
 let modelYear = await input("Please enter the year of your vehicle: ");
     output(" the year entered is: "+modelYear);
     const dYear=new Date();                                     //create a date object
     let dateYear=(dYear.getFullYear()+1);                       //get this year's 'year' number, and add one to it so that it'll always give us the current year +1; i.e., if this year is 2022, it'll return 2023
    
     do
     {
        if((modelYear<=1900) || (modelYear>dateYear)|| (isNaN(modelYear)))
        {
          output("in the year if,Invalid entry.");  
          modelYear= await input("Please enter a model year for your vehicle between 1900 and "+dateYear+" :");

        }

        else
        {
           output("in the year else; the year entered is "+ modelYear);
           validYear=true;
        }

     } while(validYear==false)


       output("Vehicle model year is "+modelYear);

}