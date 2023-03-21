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
    let src = this.querySelector('.img_wrap > img').getAttribute('src');
    let title = this.querySelector('.txt_wrap > a > h4').innerHTML;
    let price = this.querySelector('.price').innerHTML;
    productModal.querySelector('.img_wrap > img').setAttribute('src', src);
    productModal.querySelector('.txt_wrap > h4').innerHTML = title;
    productModal.querySelector('.txt_wrap > .price').innerHTML = price;

    productModal.showModal();
    document.querySelector('body').style.overflow = 'hidden';
  });
}