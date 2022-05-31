const btn=document.querySelector(".btn")
const signupLink=document.querySelectorAll("#signup p")
const signinLink=document.querySelectorAll("#signin p")
const innerContainer=document.querySelector(".innerContainer")
const btnArr=Array.from(btn.children)

function getForm(arr){
    for(i=2; i<innerContainer.children.length; i++){
        arr.push(innerContainer.children[i])
    }
}

function changeBtnStatus(e){
    for(i=0; i<btnArr.length; i++){
        btnArr[i].classList.remove("activeBtn")
    }
}

function checkForm(n){
    let form=[]
    getForm(form)
    for(i=0; i<innerContainer.children.length; i++){
        if(innerContainer.children[i+2]==form[n]){
            innerContainer.children[i+2].classList.remove("noDisplay")
        }
    }
}
function confirmForm(n){
    for(i=2; i<innerContainer.children.length; i++){        
        innerContainer.children[i].classList.add("noDisplay")
    }
    checkForm(n)    
}

btnArr.forEach((e)=>{
    e.addEventListener("click", (e)=>{
        confirmForm(btnArr.indexOf(e.target))
        changeBtnStatus(e)
        e.target.classList.add("activeBtn")
    })
})

Array.from(signupLink)[1].addEventListener("click", ()=>{
    confirmForm(2)
    changeBtnStatus(this)
    })

Array.from(signinLink)[1].addEventListener("click", (e)=>{
    confirmForm(0)
    changeBtnStatus(this)
    btnArr[0].classList.add("activeBtn")
    })