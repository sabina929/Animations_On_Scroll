const wrapper = document.querySelector('.wrapper');
const navbar = document.querySelector('.navigation');
const header = document.querySelector('header');
const headerText = document.querySelector('.header-text');
const cta = document.querySelector('.cta ');
const logo = document.querySelector('.logo ');
const scrolling = document.querySelector('.scrolling ');
const sectionOne = document.querySelector('.sec-one');
const sectionTwo = document.querySelector('.sec-two');
const mainSections = document.querySelector('main');
// const footer = document.querySelector('footer');


function loading() {
    setTimeout(() => {
        wrapper.style.opacity = 0;
        wrapper.style.display = 'none';

        navbar.style.display = 'block';
        setTimeout(() => (navbar.style.opacity = 1), 50);

        header.style.display = 'block';
        setTimeout(() => (header.style.opacity = 1), 50);

        headerText.style.display = 'block';
        setTimeout(() => (headerText.style.opacity = 1), 50);

        cta.style.display = 'block';
        setTimeout(() => (cta.style.opacity = 1), 50);

        logo.style.display = 'block';
        setTimeout(() => (logo.style.opacity = 1), 50);

        scrolling.style.display = 'block';
        setTimeout(() => (scrolling.style.opacity = 1), 50);

        sectionOne.style.display = 'block';
        setTimeout(() => (sectionOne.style.opacity = 1), 50);

        sectionTwo.style.display = 'block';
        setTimeout(() => (sectionTwo.style.opacity = 1), 50);

        mainSections.style.display = 'block';
        setTimeout(() => (mainSections.style.opacity = 1), 50);

        // footer.style.display = 'block';
        // setTimeout(() => (footer.style.opacity = 1), 50);


    }, 1000);
}

loading();

/* 
main>section.footer {

    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 3fr;
    grid-template-rows: 1fr 1fr 1fr;
    margin: 350px auto 0px 115px;

}

main>section.footer .logo2 {
    display: flex;
    justify-content: center;
    align-items: center;

}

main>section.footer>div.logo2>img {
    width: 200px;
}

main>section.footer>div.container2 {
    display: flex;
    justify-content: center;
    align-items: center;

}

main>section.footer>div.container2 {
    display: grid;
    grid-template-columns: 170px 150px 200px;
    grid-gap: 250px;
    width: 100%;
    opacity: .8;
    font-size: 16px;
    align-items: flex-end;
}

main>section.footer>div.container2>div.left-text {
    color: #fff;
}

main>section.footer>div.container2>div.center-text {
    color: #fff;
    text-align: center;
    margin-left: 30px;
}

main>section.footer>div.container2>div.right-text {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    text-align: right;
    line-height: 40px;

}

main>section.footer>div.copyright {
    display: inline-block;
    margin: 100px auto;
    opacity: .4;
    color: #fff;
    font-size: 14px;
} */

/* < section class="footer" >

  <div class="logo2">
      <img src="./images/bg-21.png" alt="Logo">
          </div>
      <div class="container2">
          <div class="left-text">
              <p>lorem@ipsum.io</p>
              <p>consectetur@ipsum.io</p>
          </div>
          <div class="center-text">
              <p>@adipict_ipsum</p>
          </div>
          <div class="right-text">
              <p>445 Dolor Amet<br>Citum, Incidunt<br>Duis, Quaerat.</p>

              </div>
          </div>
              <div class="copyright">
                  <p>All Rights Reserved. Copyright 2019.</p>
              </div>
       
      </section> */