# Pseudo Code Solution
make a map of values
for(every char in the string){
     if(the next roman is greater than the current){
        decrease the value by the cur roman's value
     } else {
        increase the value by the roman's value
     }
}