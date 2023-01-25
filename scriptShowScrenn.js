const bt = document.querySelectorAll("button.MuiButtonBase-root")[16]
const btShow = document.createElement("div")
document.body.insertAdjacentElement("afterbegin",btShow)
Object.assign(btShow.style, {
    position: 'absolute',
    width: '80px',
    height: '80px',
    bottom: '20px',
    zIndex: '99',
    right: '20px',
    border: '1px solid',
    display: 'block',
    background: 'white'
});
var show = false
btShow.onclick = ()=>{
      if(show === false){
       show  =  true
       document.querySelector(".css-1tjsbh5").style.display = "none"
       document.querySelector(".MuiBox-root.css-ancpm0").style.display = "none"	
       btShow.style.background = "green"
    }else{
       show  =  false
       document.querySelector(".css-1tjsbh5").style.display = ""
       document.querySelector(".MuiBox-root.css-ancpm0").style.display = ""	
       btShow.style.background = ""
}
}