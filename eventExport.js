//count down the date:

export function countDownDate(countTheDate=Date(), nameOfEvent){
    let count = new Date(countTheDate);
    let timeExpire = setInterval(function() {
    let dateNow = new Date();


    let remainingTime = count.getTime() - dateNow.getTime(); //convert in milliseconds.
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);  
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)); 
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)); 
    if (remainingTime > 0){
     let result = document.querySelector(".result");
     result.style.display="inline-block";
     document.querySelector(".nameEvent").innerHTML =`The Event Name is: ${nameOfEvent}`
       document.getElementById("day").innerHTML =days ; 
       document.getElementById("hour").innerHTML =hours; 
       document.getElementById("minute").innerHTML = minutes;  
       document.getElementById("second").innerHTML =seconds;
    }
    else if (remainingTime < 0) {
        clearInterval(timeExpire);
        alert(`Time is finished!
Enter other event..`);
      }
      
    
    }, 1000)
}
