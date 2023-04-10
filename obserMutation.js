const target = document.querySelector(".form_section_single_step_2_elementor-shoppe")
const observer = new MutationObserver((mut) => {
    const total = mut.length
    for (let i = 0; i <= total; i++) {
        if(i === total){    
            const img1 = document.querySelectorAll(".payment_method_woo-mercado-pago-custom img")[0]
            if(img1.alt.length > 0){
                img1.remove()
            }
            const img2 = document.querySelectorAll(".payment_method_woo-mercado-pago-pix img")[0]
            if(img2.alt.length > 8){
                img2.remove()
            }           
        }
    }
});
const config = { attributes: true, childList: true, subtree: true };
observer.observe(target, config);