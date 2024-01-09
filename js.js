function myFunc(evt, menu) {
    let content = document.querySelectorAll('.content')
    let i;
    for(i = 0; i < content.length; i++) {
        content[i].style.display = 'none'
    }
    let btns = document.getElementsByTagName('button')
    for(i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '')
    }
    document.getElementById(menu).style.display = ' block';
    evt.currentTarget.className += ' active';
}
function myFunc(evt, menu) {
    let bread = document.querySelectorAll('.bread')
    let i;
    for(i = 0; i < bread.length; i++) {
        bread[i].style.display = 'none'
    }
    let btns = document.getElementsByTagName('button')
    for(i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace(' active', '')
    }
    document.getElementById(menu).style.display = ' block';
    evt.currentTarget.className += ' active';
}