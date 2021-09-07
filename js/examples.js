let tab = jQuery('.tab'); 
let tabNav = tab.find('.tab-toggle__item');

tabNav.on('mouseover, click', function(e) {
    e.preventDefault();
    jQuery(this).toggleClass('tab-toggle__item_active').siblings().removeClass('tab-toggle__item_active');

    let tabIndex = jQuery(this).index();

    console.log(tabIndex);
    let tabContent = jQuery('.tab-content');
    tabContent.find('.tab-content__item').eq(tabIndex).addClass('tab-content__item_visible').siblings().removeClass('tab-content__item_visible');
});