const addEvent = () => {
    document.querySelectorAll("#resultado .jet-listing-grid__item").forEach(item => {
        item.querySelectorAll("a")[1].addEventListener("click", () => {
            setTimeout(() => {
                item.querySelectorAll("a")[0].click()
            }, 2000);
        })
    })
}
if (document.querySelector("#resultado")) {
    addEvent()
    document.querySelector("[data-id='bf11409']").addEventListener("click", () => {
        setTimeout(() => {
            addEvent()
        }, 3000);
    })
}

document.querySelectorAll("#resultado .jet-listing-grid__item").forEach(item => {
    item.querySelectorAll("a").forEach(item => {
        console.log(item)
    })

    // if(item.querySelectorAll("a")[0]){
    //     item.addEventListener("click",()=>{
    //         console.log("Clicaod reolad")
    //     })
    // }else if(item.querySelectorAll("a")[1]){
    //     item.addEventListener("click",()=>{
    //         console.log("Clicaod Add")
    //     })
    // }
})

// item.addEventListener("click",()=>{
//     if(item.innerText === "Ver Carrinho"){
//      item.setAttribute("href","javascript:void(0)")
//      document.querySelector("[data-id='9a4c237']").click()
//     }
//  })

const funcReload = () => {
    const btJetRoload =
        btJetRoload
}

document.querySelectorAll("div#button-open-cart a").forEach(item => {

    item.setAttribute("href", "javascript:void(0)")
})

/* Search Query */


const reloadCart = () => {

}
const openModal = () => {
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
openModal()
// const pagination = document.querySelector(".jet-filters-pagination")
// if (pagination) {
//     pagination.childNodes.forEach(item => {
//         item.addEventListener("click", () => {
//             console.log("clicado")
//             setInterval(() => {
//                 openModal()
//             }, 3000);
//         })
//     })
// }


const pagination = new MutationObserver((event) => {
    event.forEach(item => {
        if(item.type === "childList" && item.addedNodes[0]){
            openModal()
            console.log(item)
        }
    })
})

const jetPagination = document.querySelector(".jet-smart-filters-pagination")
if (jetPagination) {
    console.log("pagination")
    pagination.observe(jetPagination, {
        attributes: true,
        subtree: true,
        childList: true
    });
}else{
    openModal()
}




const modalGridMutation = ()=>{
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
    modalGridMutation()
}else{
    openModal()
}

if (rahshow) {

}


if (it.innerText === "Ver Carrinho") {
    it.addEventListener("click", () => {
        it.setAttribute("href", "#")
        document.querySelector("[data-id='9a4c237']").click()
    })
}



item[it].addEventListener("click", () => {
    console.log("clicado")
})


document.querySelector("[data-id='9a4c237']").click()


// const openModal = () => {
//     document.querySelectorAll("div#button-open-cart a").forEach(it => {
//         if (it.innerText === "Ver Carrinho") {
//             it.addEventListener("click", () => {
//                 it.setAttribute("href", "#")
//                 document.querySelector("[data-id='9a4c237']").click()
//             })
//         } else {
//             it.addEventListener("click", () => {
//                 console.log("clicado")
//                 let i = 0
//                 const timeAddCart = setInterval(() => {
//                     i++
//                     if (it.innerText === "Ver Carrinho") {
//                         it.addEventListener("click", () => {
//                             it.setAttribute("href", "#")
//                             document.querySelector("[data-id='9a4c237']").click()
//                             console.log("clicado modal stop")
//                         })
//                         clearInterval(timeAddCart)
//                     }
//                     console.log(i)
//                 }, 1000);
//             })
//         }
//     })
// }
// openModal()

const funcBtClose = () => {
    const searchBtClose = setInterval(() => {
        const bt = document.querySelector(".jet-popup__close-button")
        if (bt) {
            clearInterval(searchBtClose)
            bt.addEventListener("click", () => {
                console.log("bt close clicked")
                window.location.reload()
            })
            console.log(bt)
            console.log("close stoped")
        }
    }, 1000);
}
funcBtClose()

"https://dmtt.com.br/plantao/?id=1&data=1663632000"