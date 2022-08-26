const clock=()=>{
    let time= new Date();
    let amorpm="PM";
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let hours=document.getElementsByClassName("hour");
    let minutes=document.getElementsByClassName("minute");
    let seconds=document.getElementsByClassName("second");
    let am_pm=document.getElementsByClassName("am_pm");
    
    if(hour>12){        
        hour=hour-12;        
    }
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }
  
    var a = time.getHours();
    const value=parseInt(a)>=12?'PM':'AM';
    am_pm[0].innerText=value;
  
  
    if(hour==0){
        hour=12;
    }
    hours[0].innerText=hour;
    minutes[0].innerText=minute;
    seconds[0].innerText=second;
    
    }
    
        const setAlarm=()=>{
        let timing=document.getElementsByClassName("timing");
        let wakeup=document.getElementById("wakeup");
        let lunch=document.getElementById("lunch");
        let tea=document.getElementById("tea");
        let night=document.getElementById("night");
        let time=new Date();
        let hours=time.getHours();
    
        timing[0].innerText=wakeup.options[wakeup.selectedIndex].text;
        timing[1].innerText=lunch.options[lunch.selectedIndex].text;
        timing[2].innerText=tea.options[tea.selectedIndex].text;
        timing[3].innerText=night.options[night.selectedIndex].text;
    
        if((hours===parseInt(wakeup.value))){
        let greeting=document.getElementById("gm");
        let message=document.getElementById("msgdis");
        let image=document.getElementById("greeting-image");
        image.src="./girl.png";
        message.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
        greeting.innerText="GOOD MORNING!! WAKEUP!!";
    }
    
        if((hours===parseInt(lunch.value))){
        let greeting=document.getElementById("gm");
        let message=document.getElementById("msgdis");
        let image=document.getElementById("greeting-image");
        image.src="./pizza.jpg";
        message.innerText="LET'S HAVE SOME LUNCH !!"
        greeting.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    
        if((hours===parseInt(tea.value))){
        let greeting=document.getElementById("gm");
        let message=document.getElementById("msgdis");
        let image=document.getElementById("greeting-image");
        image.src="./evening.jpg";
        message.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
        greeting.innerText="GOOD EVENING!!";
    }
    
        if((hours===parseInt(night.value))){
            let greeting=document.getElementById("gm");
            let message=document.getElementById("msgdis");
            let image=document.getElementById("greeting-image");
            image.src="./gn.jpg";
            message.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
            greeting.innerText="GOOD NIGHT!!";
        }
    }
    
    clock();
    setInterval(clock,1000);