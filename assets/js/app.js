//display login page and banking page
let loginButton = document.querySelector(".login");
let logoutButton = document.querySelector('.logout');
let loginArea= document.querySelector(".login-area");
let bankArea=document.querySelector(".bank-area");

loginButton.addEventListener('click',function(e){
    e.preventDefault();
    let email=document.querySelector(".email").value;
let password = document.querySelector(".password").value;
    if(email==="admin@admin.com" && password==="admin"){
        loginArea.style.display='none';
        bankArea.style.display='block';
    }else{
        alert("please enter valid email and password");
    }
   
});
logoutButton.addEventListener('click',function(e){
    e.preventDefault();
    loginArea.style.display='block';
    bankArea.style.display='none';
});
//depositing money
let depositButton= document.querySelector(".deposit-button");
let depositAmount=parseFloat(document.querySelector(".deposit-amount").innerText);
depositButton.addEventListener('click',function(e){
    e.preventDefault();
    const depositOnce=parseFloat(document.querySelector(".deposit").value);
    depositAmount+=depositOnce;
    document.querySelector(".deposit-amount").innerText=depositAmount;
    document.querySelector(".deposit").value='';
    document.querySelector(".balance-amount").innerText=depositAmount-withdrawAmount;
});
//withdraw money
let withdrawButton= document.querySelector(".withdraw-button");
let withdrawAmount=parseFloat(document.querySelector(".withdraw-amount").innerText);
withdrawButton.addEventListener('click',function(e){
    e.preventDefault();
    const withdrawOnce=parseFloat(document.querySelector(".withdraw").value);
    withdrawAmount+=withdrawOnce;
    document.querySelector(".withdraw-amount").innerText=withdrawAmount;
    document.querySelector(".withdraw").value='';
    document.querySelector(".balance-amount").innerText=depositAmount-withdrawAmount;
});

 