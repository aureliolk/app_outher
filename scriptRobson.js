const convertUrlDate = (url, i) => {
    const splitDate = Number(url.split("=")[2])
    const date = new Date(splitDate)
    const id = url.split("=")[1].replace("&data", "")
    const month = document.querySelectorAll("#value_month")[i].innerText
    const year = document.querySelectorAll("#value_year")[i].innerText
    const newUrl = url.split("=")[0] + "=" + id + "&mes=" + month + "&ano=" + year
    return newUrl
}

if (document.querySelectorAll("#bt_plantoes a")) {
    document.querySelectorAll("#bt_plantoes a").forEach((item, i) => {
        item.setAttribute("href", convertUrlDate(item.getAttribute("href"), i))
    })
}