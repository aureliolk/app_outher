const openModalAllBt = () => {
    const observeAddCart = new MutationObserver((event) => {
        event.forEach(item => {
            if (item.type === "childList" && item.removedNodes[0].className === "jet-data-store-link__icon is-svg-icon") {
                item.target.setAttribute("href", "#")
                item.target.addEventListener("click", () => {
                    console.log("clicado")
                    document.querySelector("[data-id='9a4c237']").click()
                })
                console.log(item.target)
                console.log(item.removedNodes[0].className)
            }
        })
    });

    const allBtAddCart = document.querySelectorAll("div#button-open-cart a")
    if (allBtAddCart) {
        allBtAddCart.forEach(item => {
            if (item.innerText === "Ver Carrinho") {
                item.addEventListener("click", () => {
                    item.setAttribute("href", "#")
                    document.querySelector("[data-id='9a4c237']").click()
                })
            }
            observeAddCart.observe(item, {
                attributes: true,
                subtree: true,
                childList: true
            });
        });
    }
}

const openModalGrid = ()=>{
    const gridMutation = new MutationObserver((event) => {
        event.forEach(item => {
            if (item.type === "childList" && item.removedNodes[0].className === "jet-data-store-link__icon is-svg-icon") {
                item.target.setAttribute("href", "#")
                item.target.addEventListener("click", () => {
                    console.log("clicado")
                    document.querySelector("[data-id='9a4c237']").click()
                })
                console.log(item.target)
                console.log(item.removedNodes[0].className)
            }
        })
    })
    
    const gridResult = document.querySelector("div#resultado")
    if(gridResult){
        const allBtAddCart = document.querySelectorAll("div#button-open-cart a")
        allBtAddCart.forEach(item => {
            if (item.innerText === "Ver Carrinho") {
                item.addEventListener("click", () => {
                    item.setAttribute("href", "#")
                    document.querySelector("[data-id='9a4c237']").click()
                })
            }
        });
        gridMutation.observe(gridResult, {
            attributes: true,
            subtree: true,
            childList: true
        });
    }
}

if(document.URL === "https://casanobreweb.com.br/loja/"){
    openModalGrid()
}else{
    openModalAllBt()
}