// 1
// var student=[]

// 2
// var student = {}

// 3
// var string = ["Lion" , " Cat"]

// 4
// var num = [ 0 , 1 , 2 , 3]

// 5
// var boolean = [true , false]

// 6
// var mixed = ["lion" , 4 , false]

// 7
// var edu =[ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil." , "PhD "]
// document.write("Qualification".bold().big() + "<br>" + "1)" +edu[0]+"<br>2)"+edu[1]+"<br>3)"+edu[3]+"<br>4)"+edu[4]+"<br>5)"+ edu[5]+"<br>6)"+edu[6]+"<br>7)"+edu[7]+"<br>" )

8
// var students = ["Michael" , "John" , "Tony"]
// var score = [ 320, 230, 480]
// var percentage1 = (score[0]/ 500) *100
// var percentage2 = (score[1]/ 500) *100
// var percentage3 = (score[2]/ 500) *100
// document.write("Score of " + students[0] +" is " + score[0] + ". Percentage: " + percentage1 +"% <br>" )
// document.write("Score of " + students[1] +" is " + score[1] + ". Percentage: " + percentage2 +"% <br>" )
// document.write("Score of " + students[2] +" is " + score[2] + ". Percentage: " + percentage3 +"% <br>" )


9
// //a
// var color =["red ", "blue ", "black "]
// document.write(color + "<br>")
// var beginning = prompt("Which color do you wants to add to the beginning")
// color.unshift(beginning)
// document.write("Updated array: " + color + "<br><br>")

// //b
// var color =["red ", "blue ", "black "]
// document.write(color + "<br>")
// var end = prompt("Which color do you wants to add to the end")
// color.push(end)
// document.write("Updated array: " + color + "<br><br>")

// //c
// var color =["red ", "blue ", "black"]
// color.unshift("White " , "Pink ")
// document.write(color+ "<br> After add two color at start: "+color + "<br>")

// //d
// var color =["red ", "blue ", "black"]
// color.shift()
// document.write(color+ "<br> After delete first color: " + color + "<br>")

// //e
// var color =["red ", "blue ", "black"]
// color.pop()
// document.write(color+ "<br> After delete last color: " + color + "<br>")

//f
// var color =[" red ",  " blue ", " black " ]
// document.write(color + "<br>")
// var indexvalue = prompt("On which index you wants to add a desired color name")
// var insertcolor = prompt("Which color you want to enter in list")
// color.splice(indexvalue , 0 , insertcolor)
// document.write("Updated array: "+color  + "<br><br>")

//g
// var color =[" red ",  " blue ", " black " ]
// document.write(color + "<br>")
// var indexvalue = prompt("At which index you wants to delete color(s)?")
// var deletecolor = prompt(" How many colors you wants to delete?")
// color.splice(indexvalue , deletecolor);
// document.write("Updated array: "+color  + "<br><br>")


10
// var score = [320, 230, 480, 120];
// document.write("Scores of Students : " + score + "<br>" + "Ordered Scores of Students : " + score.sort() )


11
// var cities = [" karachi" , " Lahore", " Islamabad", " Quetta", " Peshawar"]
// var selectedcities =cities.slice(2 , 4)
// document.write("Cities list: <br>" + cities + "<br><br> Selected cities list: <br>" + selectedcities)

12
// var arr = ["This ", " is ", " my ", " cat "];
// document.write("Array: <br>".big().bold() + arr + "<br>")
// document.write("String: <br> ".big().bold() + arr.join(" "))


13
// var devices =["keyboard","mouse","printer","moniter"];
// document.write("Devices: <br>".big().bold() + devices)
// document.write("<br>Out: ".bold() + devices.shift())
// document.write("<br>Out: ".bold() + devices.shift())
// document.write("<br>Out: ".bold() + devices.shift())
// document.write("<br>Out: ".bold() + devices.shift())



// 14
// var devices =["keyboard","mouse","printer","moniter"];
// document.write("Devices: <br>".big().bold() + devices)
// document.write("<br>Out: ".bold() + devices.pop())
// document.write("<br>Out: ".bold() + devices.pop())
// document.write("<br>Out: ".bold() + devices.pop())
// document.write("<br>Out: ".bold() + devices.pop())


15
// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write("<select>  <option>" + phones[0] + "<option>"+ phones[1] +"</option>" + "<option>"+ phones[2] +"</option>" + "<option>"+ phones[3] + "<option>"+ phones[4] +"</option>" + "<option>"+ phones[5] +"</option>"  + "</option></select>" )
