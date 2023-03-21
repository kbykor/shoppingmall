const gnb_chk = document.querySelectorAll('.gnb_mnu_chk');
const productModal = document.querySelector('#productModal');
const new_product_list = document.querySelectorAll('.new_product li');

for(let chk of gnb_chk) {
  chk.addEventListener('change', function(){
    let height = 0;
    for(let li of this.parentElement.lastElementChild.children){
      height += li.offsetHeight;
    }
    (this.checked ? chk.parentElement.lastElementChild.style.height = height+'px' : chk.parentElement.lastElementChild.removeAttribute('style'));
  });
}

productModal.addEventListener('click', (event) => {
  if (event.target.nodeName === 'DIALOG') {
    productModal.close();
    document.querySelector('body').removeAttribute('style');
  }
});

for(let product of new_product_list) {
  product.addEventListener('click', function(){
    productModal.querySelector('')
    productModal.showModal();
    document.querySelector('body').style.overflow = 'hidden';
  });
}