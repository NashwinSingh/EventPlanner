        // Create a new Date object
        var currentDate = new Date();

        // Get the month (zero-based index)
        var currentMonth = currentDate.getMonth();
        
        // Add 1 to get the actual month number
        currentMonth++; // Adjusting to 1-based index
        

        function addEvent(button){
            var box = button.closest(".box");
            var boxContent = box.querySelector("p");
            var eventText = box.querySelector("input[type = 'text']");
            var event =eventText.value
            
            
            var newEvent = document.createElement("p");
            newEvent.textContent = event
            
            box.appendChild(newEvent)
        
            eventText.value="";
            
        }
            





        var mo;
        
        switch(currentMonth){
            case 1:
            mo = "January"
            break
            case 2:
            mo = "Febuary"
            break
            case 3:
            mo = "march"
            break
            case 4:
            mo = "April"
            break
            case 5:
            mo = "may"
            break
            case 6:
            mo = "june"
            break
            case 7:
            mo = "july"
            break
            case 8:
            mo = "August"
            break
            case 9:
            mo = "September"
            break
            case 10:
            mo = "October"
            break
            case 11:
            mo = "November"
            break
            case 12:
            mo = "December"
            break
            
        }
        
        document.getElementById("1").innerHTML = mo;