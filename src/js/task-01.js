const cat = document.querySelectorall('#categories');
const list = cat.querySelectorall('.item')

list.forEach(element => {
    console.log(element.textContent)
});

