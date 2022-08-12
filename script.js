
var div = document.createElement("div")
div.style.textAlign = "center"
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");

var button = document.createElement("button")
button.setAttribute("type", "button");
button.setAttribute("class","btn btn-primary")
button.innerHTML = "search"
button.addEventListener("click", foo);

let Pname=document.createElement("div")
Pname.setAttribute("id","Pname")

let PMRP=document.createElement("div")
PMRP.setAttribute("id","PMRP")

let PDES=document.createElement("div")
PDES.setAttribute("id","PDES")

let PPIC=document.createElement("div")
PPIC.setAttribute("id","PPIC")

let PPROD=document.createElement("div")
PPROD.setAttribute("id","PPROD")

div.append(input, button,Pname,PMRP,PDES,PPIC,PPROD)
document.body.append(div)



async function foo() {
  let res1=document.getElementById("name").value;
  var res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
  var result = await res.json()
  for (var i = 0; i < result.length; i++) {
    try{
      if(res1===result[i].name){
        Pname.innerHTML=`Brand of the product is :${result[i].brand}`
        console.log(`Brand of the product is : ${result[i].brand}`)
      }
      if(res1===result[i].name){
        PMRP.innerHTML=`The price of the product is :${result[i].price}`
      console.log(` The price of product is : ${result[i].price}`)
      }
      if(res1===result[i].name){
        PDES.innerHTML=`Detail of the product  :${result[i].description}`
        console.log(`product detail: ${result[i].description}`)
        }
        if(res1===result[i].name){
          PPIC.innerHTML=`For the visual reference :${result[i].image_link}`
          console.log(`For the visual reference: ${result[i].image_link}`)
          }

          if(res1===result[i].name){
            PPROD.innerHTML=`For the product reference :${result[i].product_link}`
            console.log(`For the product reference: ${result[i].product_link}`)
            }
    }
    catch(error){
          console.log(error)
        }
      




  }
}


