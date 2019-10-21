let lari = prompt('შეიყვანეთ რიცხვი');
let h2 = document.querySelector('h2');
let newlari;


if (lari.indexOf('L') === 0) {
    console.log(lari);
     newlari = lari.substr(1,3);
    h2.textContent = newlari / 2.6 + ' დოლარია ';
} else if (lari.indexOf('$') === 0){
        newlari = lari.substr(1,3);
      h2.textContent = newlari * 2.6 + ' ლარია ';
    
} else {
    alert('ვალუტა არის მისათითებელი')
}

