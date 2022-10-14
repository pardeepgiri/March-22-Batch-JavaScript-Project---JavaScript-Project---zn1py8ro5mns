
function tipfive(){
  let billamount=document.getElementById("billamount").value;
  let noofpepople=document.getElementById("noofpepople").value;

  if(billamount===" "||noofpepople===" "){
    alert("please fill details")
  }else{
    let tipamount=(Number(billamount*0.05))/Number(noofpepople);
    let totalamount=(Number(billamount*0.05)+Number(billamount))/Number(noofpepople);
    document.getElementById("tipamount").innerHTML=Math.floor(tipamount);
    document.getElementById("totalamount").innerHTML=Math.floor(totalamount);
  }
}

function tipten(){
  let billamount=document.getElementById("billamount").value;
  let noofpepople=document.getElementById("noofpepople").value;

  if(billamount===" "||noofpepople===" "){
    alert("please fill details")
  }else{
    let tipamount=(Number(billamount*0.10))/Number(noofpepople);
    let totalamount=(Number(billamount*0.10)+Number(billamount))/Number(noofpepople);
    document.getElementById("tipamount").innerHTML=Math.floor(tipamount);
    document.getElementById("totalamount").innerHTML=Math.floor(totalamount);
  }
}

function tipfiften(){
  let billamount=document.getElementById("billamount").value;
  let noofpepople=document.getElementById("noofpepople").value;

  if(billamount===" "||noofpepople===" "){
    alert("please fill details")
  }else{
    let tipamount=(Number(billamount*0.15))/Number(noofpepople);
    let totalamount=(Number(billamount*0.15)+Number(billamount))/Number(noofpepople);
    document.getElementById("tipamount").innerHTML=Math.floor(tipamount);
    document.getElementById("totalamount").innerHTML=Math.floor(totalamount);
  }
}

function tiptwenty(){
  let billamount=document.getElementById("billamount").value;
  let noofpepople=document.getElementById("noofpepople").value;

  if(billamount===" "||noofpepople===" "){
    alert("please fill details")
  }else{
    let tipamount=(Number(billamount*0.20))/Number(noofpepople);
    let totalamount=(Number(billamount*0.20)+Number(billamount))/Number(noofpepople);
    document.getElementById("tipamount").innerHTML=Math.floor(tipamount);
    document.getElementById("totalamount").innerHTML=Math.floor(totalamount);
  }
}

function tiptwentyfive(){
  let billamount=document.getElementById("billamount").value;
  let noofpepople=document.getElementById("noofpepople").value;

  if(billamount===" "||noofpepople===" "){
    alert("please fill details")
  }else{
    let tipamount=(Number(billamount*0.25))/Number(noofpepople);
    let totalamount=(Number(billamount*0.25)+Number(billamount))/Number(noofpepople);
    document.getElementById("tipamount").innerHTML=Math.floor(tipamount);
    document.getElementById("totalamount").innerHTML=Math.floor(totalamount);
  }
}

function customtip(e){
  let customtip=e.target.value;
  // console.log(customtip)
  // document.getElementById("totalamount").innerHTML=customtip;
  let billamount=document.getElementById("billamount").value;
  let noofpepople=document.getElementById("noofpepople").value;
  // let persesnt=document.getElementById("persesnt").value;
  let getres=Number(customtip/100)
  if(billamount===" "||noofpepople===" "){
    alert("please fill details")
  }else{
    let tipamount=(Number(billamount*getres))/Number(noofpepople);
    let totalamount=(Number(billamount*getres)+Number(billamount))/Number(noofpepople);
    document.getElementById("tipamount").innerHTML=Math.floor(tipamount);
    document.getElementById("totalamount").innerHTML=Math.floor(totalamount);
}
}

function resetvalue(){
  document.getElementById("billamount").value=" ";
  document.getElementById("noofpepople").value=" ";
  document.getElementById("tipamount").innerHTML="$ 0. 00";
  document.getElementById("totalamount").innerHTML="$ 0. 00 ";

}
