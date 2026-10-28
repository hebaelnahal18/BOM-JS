window.addEventListener("scroll", function () {
  var scrollValue = window.scrollY;
  var navbar = document.querySelector(".navbar");
  if (scrollValue > 300) {
    navbar.setAttribute(
      "class",
      "navbar md:navbar-expand bg-primary sticky-top",
    );
  } else {
    navbar.setAttribute(
      "class",
      "navbar md:navbar-expand bg-danger sticky-top",
    );
  }
});

// Set Interval 
let clearFunction=setInterval(myTimer,1000);
function myTimer(){
  let dateNow=new Date;
  document.querySelector('#demo').innerHTML=dateNow;

}
document.getElementById('stop').addEventListener('click',function(){
 clearInterval(clearFunction)
})
document.getElementById('countine').addEventListener('click',function(){
 clearFunction=setInterval(myTimer,2000)
})
// Set Time out 

function getData() {
    Swal.fire({
    title: 'Hello!',
    text: 'Time is up!',
    icon: 'success',
    confirmButtonText: 'OK'
  });
}

let timeoutId;

document.getElementById('click').addEventListener('click', function () {
  timeoutId = setTimeout(getData, 3000);
});

document.getElementById('stopTimeout').addEventListener('click', function () {
    clearTimeout(timeoutId);

  Swal.fire({
    title: 'Stopped!',
    text: 'The timeout has been cancelled.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
});
