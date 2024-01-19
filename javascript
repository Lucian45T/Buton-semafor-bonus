let times = 2
let time = 0

setInterval(function() {modifyColor(document.getElementById('modify'));}, 10000);

function Red() {
  let RedButon = document.getElementById('modify');
  RedButon.classList.remove('btn-success');
  RedButon.classList.add('btn-danger'); 
} 
function Yellow(){
  let YellowButon = document.getElementById('modify');
  YellowButon.classList.remove('btn-danger');
  YellowButon.classList.add('btn-warning');  
} 
function Green() {
  let GreenButon = document.getElementById('modify');
  GreenButon.classList.remove('btn-warning');
  GreenButon.classList.add('btn-success');
}  
function modifyColor() {
          if (times == 1) {
           Red()
          }                    
          if (times == 2) {
           Yellow()
          }         
         if(times == 3) {
            Green()    
          }             
         if (times <= 3) {
           ++times
          }
      
          if (times > 3) {
            times = 1 
          }
        }

