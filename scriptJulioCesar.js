
const getButton = document.querySelector("#allDown")
if(getButton){
    getButton.addEventListener("click",()=>{
        allDown()
    })
}

const allDown = ()=>{
    var allImgs = document.querySelectorAll('div#slider img');
    allImgs.forEach((item,i) => {
        console.log(item)
        setTimeout(() => {
            fetch(item.getAttribute("src"))
                .then(resp => resp.blob())
                .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    // the filename you want
                    a.download = `slide-mian-${i}.jpg`;
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                })
                .catch(() => alert('oh no!'));
        }, i * 1000);
    })
}





