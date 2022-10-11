let sectionCounters = document.querySelector('#section_counters');
let valueDisplays=document.querySelectorAll('.num');
let interval = 5000;

    /*valueDisplays.forEach(valueDisplay => {
        let startValue=0;
    
       let endValue=parseInt(valueDisplay.getAttribute('data-val'));
    
       let duration = Math.floor(interval / endValue);
    
       let counter = setInterval(function(){
    
        startValue+=1;
        valueDisplay.textContent=startValue;
    
        if(startValue == endValue){
            clearInterval(counter)
        }
    
       }, duration)
    
    })*/

    let CounterObserver= new IntersectionObserver(
        (entries, observer) =>{
            let [entry] = entries;
            if(!entry.isIntersecting) return;

            let interval = 5000;

    valueDisplays.forEach(valueDisplay => {
        let startValue=0;
    
       let endValue=parseInt(valueDisplay.getAttribute('data-val'));
    
       let duration = Math.floor(interval / endValue);
    
       let counter = setInterval(function(){
    
        startValue+=1;
        valueDisplay.textContent=startValue;
    
        if(startValue == endValue){
            clearInterval(counter)
        }
    
       }, duration)
    
    })
     }, {
        root: null,
        threshold: 0.4,
    })

    CounterObserver.observe(sectionCounters)