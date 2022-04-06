[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7426415&assignment_repo_type=AssignmentRepo)

This program is designed to take in the relevant information from a user with regards to their vehicle purchase, such as first/last name, year, model, make, vin, purchase date and owner address. All inputs are vefified for "reasonable" accuracy and prevention of entry of empty data fields. The program is scalable in that it can handle up to 99 unique vehicle makes. Vehicle model and owner address fields are only checked to ensure that they are not empty, since addresses are nearly impossible to verify due to the massive number of possibilities. The same holds true for vehicle models, since they can be any combination of alphanumerics or proper names. Once a user's info and vehicle info have been entered, they are stored in an array which can be accessed and viewed from the main menu when the user selects option 2. If no previous user's data has been stored, a message comes up saying so. 
Also, the VIN has been coded to reflect correct VIN nomenclature. That is, exactly 17 characters, only numbers or letters EXCEPT the letters i,I, o, O, and q, Q. These by international standards are not used in modern VINs to prevent confusion between them and the numbers 1, 0, and 9. 