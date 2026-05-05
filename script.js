let amountarray=[]
let displaytotal=document.getElementById("money")
let containerdisplay=document.getElementById("container2")
function submitbtn(){
    
    
    let amount=Number(document.getElementById("inputamt").value)
    let date=document.getElementById("inputdate").value
    let description=document.getElementById("inputdescrp").value
    let mode=document.getElementById("selecct").value

    let object1={
        AMOUNT:amount,
        DATE:date,
        DESCRIPTION:description,
        MODE:mode
    }
    
    amountarray.push(object1)
    
        
    let para=document.createElement("para")
        para.className="para"
        para.innerHTML=`<p class="para-btn">AMOUNT:</p>${object1.AMOUNT}<p class="gap"></p><p class="para-btn">DATE:</p> ${object1.DATE}<p class="gap"></p> <p class="para-btn">INFO:</p>${object1.DESCRIPTION}<p class="gap"></p> <p class="para-btn">MODE:</p>${object1.MODE}<p id="gapp"></p>`
    let delbutton=document.createElement("button")
        delbutton.textContent="delete"
        delbutton.className="delbutton"
        delbutton.onclick=function(){
            amountarray.splice(amountarray.indexOf(object1),1)
            para.remove()
            
            render()
            console.log(amountarray)
            
            

        }
    
    para.append(delbutton)
    
    containerdisplay.append(para)
    console.log(amountarray)

    //arrayloop for adding
    function render(){
    if(amountarray.length>=1){  
    let totalval=1
    amountarray.forEach((values)=>{
        
        totalval+=values.AMOUNT
        displaytotal.innerText=totalval
        console.log(totalval)
    
    

    })
}
else{
    totalval=0
    displaytotal.innerText=totalval

}
}
render()

document.getElementById("inputamt").value =""
document.getElementById("inputdate").value=""
document.getElementById("inputdescrp").value=""

    
    
}







