// Past ID FORM
const id_form = "form_x"

// OBSERVE FORM
const targetNode = document.querySelector(`#${id_form}`)
if(targetNode){
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver((mutation)=>{
        mutation.forEach(item => {
            if(item.target.className === "jet-form-page jet-form-page--initialized"){
                if(item.target.querySelectorAll("button").length > 1){
                    item.target.querySelectorAll("button")[1].onclick = ()=> checkFiled(item.target.attributes[1].value - 1)
                    console.log(item.target.querySelectorAll("button")[1])
                }else{
                    item.target.querySelectorAll("button")[0].onclick = ()=> checkFiled(item.target.attributes[1].value - 1)
                    console.log(item.target.querySelectorAll("button")[0])
                }
            }else{
                item.target.disabled = false
            }
        })
    });
    observer.observe(targetNode, config);
}

// CHECK FORM
const checkFiled = (page)=>{
    const dataPageForm = targetNode.querySelectorAll("[data-page]")
    const getAllInput = dataPageForm[page].querySelectorAll("input")
    getAllInput.forEach(element => {
        if(element.required && element.value === ""){
            const fieldName = element.parentElement.children[0].innerText.replace("*","")
            if(element.parentElement.children[2] === undefined){
                element.insertAdjacentHTML("afterend",`<span id="filed_required">Campo ${fieldName} é obrigatorio !`)
            }
            element.style.outline = "solid #ff00004a"
            element.onblur = ()=>{
                if(element.required && element.value !== ""){
                    element.style.outline = ""
                    if(element.parentElement.children[2]){
                        element.parentElement.children[2].remove()
                    }
                }
            }
        }else if(element.required && element.value !== ""){
            element.style.outline = ""
            if(element.parentElement.children[2]){
                element.parentElement.children[2].remove()
            }
        }
    });
}

