let openPopup = document.querySelector(".profile__edit")
let closePopup = document.querySelector('.popup__close-btn')
let saveEdit = document.querySelector(".popup__save")
let editName = document.querySelector("#inputName")
let editAbout = document.querySelector("#inputSobre")
let profileName = document.querySelector(".profile__user")
let profileAbout = document.querySelector(".profile__about")
let like = document.querySelector(".element__like")


function openPopupContent(){
  document.getElementById('popup').style.display='flex';

  editName.value = profileName.textContent;
  editAboutMe.value = profileAboutMe.textContent;
}
openPopup.addEventListener("click", openPopupContent);


function closePopupContent(){
  document.getElementById('popup').style.display='none';
}

closePopup.addEventListener("click", closePopupContent);

saveEdit.addEventListener("click", function() {
profileName.textContent = editName.value;
profileAbout.textContent = editAbout.value;

closePopupContent();

})




like.addEventListener('click', function () {
  if(like.src.includes("like.png")){
like.src = "./images/like_active.png"
  } else {
    like.src = "./images/like.png"
  }

})