document.getElementById('input').addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        askAndRespond()
    }
})

function askAndRespond() {
    userText = document.getElementById('input');
    let ask = userText.value;
    document.getElementById("ques").innerHTML = userText.value;
    document.getElementById('input').value = "";

    setTimeout(function() {
        ask = ask.toLowerCase();
        // Name
        if (ask.includes("my name") || ask.includes("ma name") || ask.includes("i'm") || ask.includes("i am") || ask.includes('im')) {
            if (ask.includes("my name")) {
                let name = ask.substring(ask.indexOf("is") + 3);
                name = name.charAt(0).toUpperCase() + name.slice(1)
                document.getElementById("ans").innerHTML = `Hello ${name}, my name is Cathy`
            } else if (ask.includes("i'm")) {
                let name1 = ask.substring(ask.indexOf("i'm") + 4);
                name1 = name1.charAt(0).toUpperCase() + name1.slice(1)
                document.getElementById("ans").innerHTML = `Hello ${name1}, my name is Cathy`
            } else if (ask.includes("i am")) {
                let name2 = ask.substring(ask.indexOf("i am")+ 5);
                name2 = name2.charAt(0).toUpperCase() + name2.slice(1)
                document.getElementById("ans").innerHTML = `Hello ${name2}, my name is Cathy`
            } else if (ask.includes("im")) {
                let name3 = ask.substring(ask.indexOf("im") + 3);
                name3 = name3.charAt(0).toUpperCase() + name3.slice(1)
                document.getElementById("ans").innerHTML = `Hello ${name3}, my name is Cathy` 
            }
        // Nice to meet u    
        } else if (ask.includes("nice") && (ask.includes("meet you") || (ask.includes("meet u")))) {
            document.getElementById("ans").innerHTML = 'Nice to meet you, as well'
        // Hello
        } else if (ask.includes("hello") || ask.includes("hi") || ask.includes("hey") || ask.includes("what's up") || ask.includes("what's going on") || ask.includes("whatup")) {
            document.getElementById("ans").innerHTML = "How you doing? What's your name?"
        // How are you    
        } else if (ask.includes("how are you") || ask.includes("how r u") || ask.includes("how u doin") || ask.includes("how you doing")) {
            document.getElementById("ans").innerHTML = "I'm okay. Can I help you with something?"
        // Your day
        } else if (ask.includes("how") && (ask.includes("your day") || ask.includes("ur day"))) {
            let date = new Date();
            let dayNumber = date.getDay();
            let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayNumber]
            document.getElementById("ans").innerHTML = `Just an ordinary ${day}. How about you?`
        // Your day response good
        } else if (ask.includes("it's good") || ask.includes("its good") || ask.includes("i'm good")) {
            document.getElementById("ans").innerHTML = "Glad to hear it!"   
        // Your day response bad    
        } else if (ask.includes("bad") || ask.includes("its bad") || ask.includes("it's bad")) {
            document.getElementById("ans").innerHTML = "I'm so sorry to hear that. It'll get better, don't worry."
        // Appropriate salutation 
        } else if ((ask.includes("good") || ask.includes("gud")) && ask.includes("evening") || ask.includes("morning") || ask.includes("afternoon")) {
            let date = new Date()
            let hour = date.getHours()
                if (hour < 12) {
                    document.getElementById("ans").innerHTML = "It's the greatest of mornings" 
                } else if (hour >= 12 && hour <= 14) {
                    document.getElementById("ans").innerHTML = "It's early afternoon, actually." 
                } else if (hour >= 14 && hour <= 16) {
                    document.getElementById("ans").innerHTML = "It's midafternoon, actually. I need a coffee."
                } else if (hour >= 16 && hour <= 18) {
                    document.getElementById("ans").innerHTML = "It's late afternoon. How did your day go?" 
                } else if (hour >= 18 && hour <= 21) {
                    document.getElementById("ans").innerHTML = "O wow! It's evening. How did your day go?"
                } else if (hour >= 21) {
                    document.getElementById("ans").innerHTML = "It's time for bed"
                }
        // Date
        } else if (ask.includes("date today") || ask.includes("today")) {
            let date = new Date();
            let d = date.getDate();
            let mNumber = date.getMonth();
            let m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mNumber] 
            let y = date.getFullYear();
            let dayNumber = date.getDay();
            let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayNumber]
            document.getElementById("ans").innerHTML = `It's ${m} ${d}, ${y} - a ${day}` 
        // Time
        } else if (ask.includes('time')|| ask.includes('tyme')) {
            let date = new Date()
            let hour = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds(); 
            document.getElementById("ans").innerHTML = `It's ${hour}:${minutes}:${seconds}`
        // Weather
        } else if (ask.includes("weather")) {
            if (ask.includes("weather in")) {
                let city = ask.substring(ask.indexOf("in") + 3);
                city = city.charAt(0).toUpperCase() + city.slice(1)
                fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=0a24f6082df14108ca78847b83b32791")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    console.log(data.main.temp)
                    let tempC = Math.floor((data.main.temp)-273.15)
                    console.log(tempC)
                    let tempF = (tempC * 9/5) + 32
                    console.log(tempF)
                    document.getElementById("ans").innerHTML = `The Temperature is ${tempC}&deg; Celsius, ${tempF}&deg; Fahrenheit`
                     }) 
                }
        } else {
            document.getElementById("ans").innerHTML = "I'm sorry, I don't understand"
        } 

            
            }
        )
        
    }

