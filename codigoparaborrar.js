const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/*

<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Usuarios
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href=".com">Action</Dropdown.Item>
        <Dropdown.Item href=".com">Another action</Dropdown.Item>
        <Dropdown.Item href=".com">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>*/

/*welcome page card*/ 



<div class="shell">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="wsk-cp-product">
              <div class="wsk-cp-img">
                <img src="https://.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg" alt="Product" class="img-responsive" />
              </div>
              <div class="wsk-cp-text">
                <div class="category">
                  <span>Ethnic</span>
                </div>
                <div class="title-product">
                  <h3>My face not my heart</h3>
                </div>
                <div class="description-prod">
                  <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>
                <div class="card-footer">
                  <div class="wcf-left"><span class="price">Rp500.000</span></div>
                  <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="wsk-cp-product">
              <div class="wsk-cp-img"><img src="https://1.bp.blogspot.com/-b-2SgNUrFHg/WVSvmewWqgI/AAAAAAAAAK0/1K4YCcbYjhokHwV_IgiVJN9mEnQoWunIwCPcBGAYYCw/s1600/fashion-portrait-nicole-6347.jpg" alt="Product" class="img-responsive" /></div>
              <div class="wsk-cp-text">
                <div class="category">
                  <span>Introvert</span>
                </div>
                <div class="title-product">
                  <h3>My face not my heart</h3>
                </div>
                <div class="description-prod">
                  <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>
                <div class="card-footer">
                  <div class="wcf-left"><span class="price">Rp500.000</span></div>
                  <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="wsk-cp-product">
              <div class="wsk-cp-img"><img src="https://1.bp.blogspot.com/-XL_Ba-178Fo/WVSvm5AbApI/AAAAAAAAAK4/X5109HTqUiAhPjbmz4NFVHcpL7ZWe6T3ACPcBGAYYCw/s1600/wow-29.jpg" alt="Product" class="img-responsive" /></div>
              <div class="wsk-cp-text">
                <div class="category">
                  <span>Beauty</span>
                </div>
                <div class="title-product">
                  <h3>My face not my heart</h3>
                </div>
                <div class="description-prod">
                  <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>
                <div class="card-footer">
                  <div class="wcf-left"><span class="price">Rp500.000</span></div>
                  <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="wsk-cp-product">
              <div class="wsk-cp-img"><img src="https://3.bp.blogspot.com/-iUes8qr4uC8/WVSvl6Wf_fI/AAAAAAAAAKs/JiTUUVvdbqEC_QGGaQhuVJiezIN3LIqEgCPcBGAYYCw/s1600/IMG_5367-bp.jpg" alt="Product" class="img-responsive" /></div>
              <div class="wsk-cp-text">
                <div class="category">
                  <span>Drama</span>
                </div>
                <div class="title-product">
                  <h3>My face not my heart cvf ggf gfg g</h3>
                </div>
                <div class="description-prod">
                  <p>Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link</p>
                </div>
                <div class="card-footer">
                  <div class="wcf-left"><span class="price">Rp500.000</span></div>
                  <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>