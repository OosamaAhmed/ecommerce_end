function get() {
  // fetch("https://api.escuelajs.co/api/v1/products").then((res) =>
  // fetch("https://fakestoreapi.com/products").then((res) =>
  fetch("https://dummyjson.com/products").then((res) => res.json().then(users));
}

get();
let div
function users(pdata){
let pr=pdata.products
    //  localStorage.setItem("mydata", JSON.stringify(product.products));
     pr.forEach(data1 => {
        div = document.getElementById("mydiv");
        div.innerHTML += `<div style=" background-color:#ffffff ;justify-content:center;padding : 10px ; width:180px;margin:15px auto;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); ">
             <img src=${data1.thumbnail} style="width:180px ; max-height:130px">
              <h3>${data1.title}</h3>
         <p> Price : ${data1.price} $ </p>
        <div style="display:inline ;flex:1">
        <p style="background-color:#f1c11f;color: white;padding:6px;border-radius: 5px;width:45%;"> Rate : ${data1.rating} </p>
         <button style="background-color:#13211f;color: white; font-size: 19px; border: none;padding:6px;cursor: pointer;border-radius: 5px;
         ;"><a  style="text-decoration:none; color:white;font-waight:bold" href="../viewproduct.html?${data1.id}">Show</a>
         </button>
         <button onclick="addtocart(${data1.id})" style="background-color:#13211f;color: white; font-size: 19px; border: none;padding:6px;cursor: pointer;border-radius: 5px;">
        Shop
         </button>
         </div>
         </div>`;
      }
    );  
}
//add to cart 
let arr=[]
function addtocart(id){
  arr.push(id)

localStorage.setItem("setdatafromhome" ,JSON.stringify(arr))

let itemcart=JSON.parse(localStorage.getItem("setdatafromhome"));
let ee=document.querySelector("#cartitem")
ee.innerHTML=arr.length

}

// search 
searchBar = document.querySelector(".inputsearch");
searBtn = document.getElementById("srchbtn");
let searchBarValue
// function seachAction() {
    searchBar.addEventListener("focus", function () { 
    
        searchBarValue = document.querySelector(".inputsearch").value
        // console.log(searchBarValue)//name
    
    });


    function searchValue(){
      searchBarValue = document.querySelector(".inputsearch").value
      fetch("https://dummyjson.com/products?title"+searchBarValue, {
              
          }).then(res => res.json())
          .then(ressearch)
          console.log("test fetch")
          //passed
  }
  searchValue()
  function ressearch(cdata){
    // console.log(pdata.products)
    let cr=cdata.products
        //  localStorage.setItem("mydata", JSON.stringify(product.products)); 
         cr.forEach(data2 => {
          // console.log(data2)
            div2 = document.getElementById("mydiv");
            div2.innerHTML += `<div style=" background-color:#ffffff ;justify-content:center;padding : 10px ; width:180px;margin:15px auto;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); ">
                 <img src=${data2.thumbnail} style="width:180px ; max-height:130px">
                  <h3>${data2.title}</h3>
             <p> Price : ${data2.price} $ </p>
            <div style="display:inline ;flex:1">
            <p style="background-color:#f1c11f;color: white;padding:6px;border-radius: 5px;width:45%;"> Rate : ${data2.rating} </p>
             <button style="background-color:#13211f;color: white; font-size: 19px; border: none;padding:6px;cursor: pointer;border-radius: 5px;
             ;"><a  style="text-decoration:none; color:white;font-waight:bold" href="../viewproduct.html?${data2.id}">Show</a>
    
             </button>
             <button onclick="addtocart(${data2.id})" style="background-color:#13211f;color: white; font-size: 19px; border: none;padding:6px;cursor: pointer;border-radius: 5px;">
            Shop
            
             </button>
             </div>
             </div>`;
          }
        );  
        
   }


// navbar 1 dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// end of nav 1
// slider in home page
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function changeImg() {
  myInterval = setInterval(function () {
    showSlides(slideIndex);
    slideIndex = slideIndex + 1;
  }, 2000);
}
window.onload = changeImg;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
