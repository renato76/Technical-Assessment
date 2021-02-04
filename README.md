# Technical-Assessment
Write a function (JavaScript) such that given a accountBalanceHistory array as an argument, it will categorise the array based on the way that the balance value is changing month by month

# My Approach

* My first step was to find just the balance amounts within the nested objects. 
I used a map method and a loop to achieve this.

* Next step, I calculated the difference between adjacent balances and stored those in a seperate array.

* Then I checked the new array to see if the values were the same or not.

# Notes

I think the solution solves the basic case. I also tested the function using negative values and increasing values.

Other cases could be for example;
* Should this return 'A' or 'B 'also for increasing numbers as well as decreasing numbers?
* Should we include negative integers?
* Should string values also pass, or do we have to input integers?
* What if the array is empty?



Thank you for looking, this was a very enjoyable exercise :)









