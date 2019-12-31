document.createElement()

var element = document.createElement('div');

element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';

appendChild()

document.body.appendChild(element);

element.style.textAlign = 'center';

// We can append elements to that element://

var ul = document.createElement('ul');
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}
 
element.appendChild(ul);

ul.style.textAlign = 'left';

removeChild()

// Now let's remove one of those lis.

ul.removeChild(ul.querySelector('li:nth-child(2)'));

element.remove()
// We can just call remove() on the element itself:// 

ul.remove();