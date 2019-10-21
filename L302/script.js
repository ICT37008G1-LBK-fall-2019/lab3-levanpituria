let p = document.querySelector('.why');
let p2 = document.querySelector('.me');
let str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptatum perferendis nam tempora unde sunt, hic ratione totam sapiente earum sed quisquam, voluptate molestias a inventore asperiores dolor ex. Odio';
p.textContent = str;

if (str.length > 15) {
    p2.textContent = str.substr(0,15) + ' ...'
}