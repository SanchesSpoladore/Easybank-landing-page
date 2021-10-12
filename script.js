const toggle_btn = document.querySelector('.dropdown-toggle');
const navigation = document.querySelector('.navigation');

toggle_btn.addEventListener('click', () =>{
    navigation.classList.toggle('active')
})