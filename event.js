import * as all from './eventExport.js';
const $title = document.querySelector(".textTitle");
const $date = document.querySelector(".textDate");
const $start = document.querySelector(".btnStart");
const $warn1 = document.querySelector(".warnMsg1");

$start.addEventListener("click", function(e){
    //e.defaultPrevented();
    if($title.value==""){
        warnMsg1();
    } 
    else if($title.value!=""){
        $title.style.border="0px";
        $warn1.style.display="none";
        all.countDownDate($date.value, $title.value) ;

    }
})

//warn massage:
let warnMsg1 = () => {
    $title.style.border="1px solid red";
    $warn1.style.display="block";
}
 


