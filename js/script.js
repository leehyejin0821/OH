document.addEventListener(`DOMContentLoaded`, function () {
  //서브메뉴버튼 클릭이벤트
  const subMenuBtn = document.querySelector(`.sub_menu_btn`);
  const subMenuBox = document.querySelector(`.sub_menu_box`);

  const closeBtn = document.querySelector(`.close_btn`);

  subMenuBtn.addEventListener(`click`, function () {
    subMenuBox.classList.add(`open`);
  });
  closeBtn.addEventListener(`click`, function () {
    subMenuBox.classList.remove(`open`);
  });

  //로그인버튼 클릭이벤트
  const loginBtn = document.querySelector(`.login_btn`);
  const loginBox = document.querySelector(`.login_box`);
  const exitBtn = document.querySelector(`.exit_btn`);
  const blackBg = document.querySelector(`.black_bg`);

  loginBtn.addEventListener(`click`, function () {
    loginBox.classList.add(`open`);
    blackBg.classList.add(`open`);
  });

  exitBtn.addEventListener(`click`, function () {
    loginBox.classList.remove(`open`);
    blackBg.classList.remove(`open`);
  });

  // 헤더 스크롤이벤트
  const header = document.querySelector(`.header_wrap`);
  const headerBox = document.querySelector(`.header_wrap .container`);
  const logoBox = document.querySelector(`.logo_box`);
  const mainMenuBox = document.querySelector(`.main_menu_box`);

  window.addEventListener(`scroll`, () => {
    const scrollTop = window.scrollY;
    console.log(scrollTop);

    if (scrollTop >= 100) {
      header.classList.add(`scroll`);
    } else {
      header.classList.remove(`scroll`);
    }

    if (scrollTop >= 400) {
      header.classList.add(`rescroll`);
      headerBox.classList.add(`rescroll`);
      logoBox.classList.add(`rescroll`);
      mainMenuBox.classList.add(`rescroll`);
      loginBtn.classList.add(`rescroll`);
      subMenuBtn.classList.add(`rescroll`);
    } else {
      header.classList.remove(`rescroll`);
      headerBox.classList.remove(`rescroll`);
      logoBox.classList.remove(`rescroll`);
      mainMenuBox.classList.remove(`rescroll`);
      loginBtn.classList.remove(`rescroll`);
      subMenuBtn.classList.remove(`rescroll`);
    }
  });

  // 서브포토박스 호버이벤트
  const subPhoto = document.querySelector(`.sub_photo_box`);
  const mainPhoto = document.querySelector(`.main_photo`);
  const photoBox = document.querySelector(`.sec_4 .right_box .photo_box`);
  const photoSize = document.querySelector(`.sub_center`);

  photoBox.addEventListener(`mouseenter`, function () {
    mainPhoto.classList.add(`hover`);
    subPhoto.classList.add(`hover`);
    photoSize.style.width = `${60}%`;
    photoSize.style.height = `${70}%`;
  });

  photoBox.addEventListener(`mouseleave`, function () {
    mainPhoto.classList.remove(`hover`);
    subPhoto.classList.remove(`hover`);
    photoSize.style.width = `${30}%`;
    photoSize.style.height = `${35}%`;
  });

  // 인포버튼 호버이벤트
  const circle = document.querySelector(`.infor svg`);
  const view = document.querySelector(`.view`);

  view.addEventListener(`mouseenter`, function () {
    circle.classList.add(`hover`);
  });
  view.addEventListener(`mouseleave`, function () {
    circle.classList.remove(`hover`);
  });

  // 배너 배경 전환
  const viewBtn = document.querySelector(`.infor_box .view`);
  const photo = document.querySelector(`.banner .container`);

  viewBtn.addEventListener(`mouseenter`, function () {
    const changeImage = viewBtn.getAttribute(`data-image`);
    photo.style.backgroundImage = `url(${changeImage})`;
  });
  viewBtn.addEventListener(`mouseleave`, function () {
    photo.style.backgroundImage = ``;
  });

  // 배너 배경밝기 스크롤이벤트
  window.addEventListener(`scroll`, () => {
    const scrollTop = window.scrollY;
    console.log(scrollTop);

    if (scrollTop >= 400) {
      photo.classList.add(`bright`);
    } else {
      photo.classList.remove(`bright`);
    }
  });
}); // end
