import React from 'react'

 function Body() {
  return (
    <div>
        <body>

    {/* <!--== Wrapper Start ==--> */}
    <div class="wrapper home-four-wrapper">

   {/* <!--== Start Header Wrapper ==--> */}
        <header class="header-wrapper">
            <div class="header-top d-none d-md-block">
                <div class="container">
                    <div class="header-top-area">
                        <div class="header-top-info">
                            <a href="shop.html">World Wide Completely Free Returns and Free Shipping</a>
                        </div>
                        <div class="header-top-action-area">
                            <div class="header-info-dropdown">
                                <button type="button" class="btn-info dropdown-toggle" id="dropdownLang" data-bs-toggle="dropdown" aria-expanded="false">English</button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownLang">
                                    <li class="dropdown-item active">English</li>
                                    <li class="dropdown-item">Français</li>
                                </ul>
                            </div>
                            <div class="header-info-dropdown">
                                <button type="button" class="btn-info dropdown-toggle" id="dropdownCurrency" data-bs-toggle="dropdown" aria-expanded="false">USD</button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownCurrency">
                                    <li class="dropdown-item active">USD</li>
                                    <li class="dropdown-item">EUR</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-middle d-none d-xl-block">
                <div class="container">
                    <div class="row align-items-center justify-content-between align-items-center">
                        <div class="col-auto">
                            <div class="header-logo-area">
                                <a href="index.html">
                                    <img class="logo-main" src="assets/images/logo.png" width="182" height="31" alt="Logo"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto">
                            <form class="header-search-box header-search-box-two ms-3">
                                <input class="form-control" type="text" id="search" placeholder="Search Products"/>
                                <div class="header-search-box-categories">
                                    <select class="select-active">
                                        <option>All Categories</option>
                                        <option>Headphone</option>
                                        <option>Video Game</option>
                                        <option>Digital Camera</option>
                                        <option>Protable Speakers</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn-src">
                                    <i class="icon-magnifier"></i>
                                </button>
                            </form>
                        </div>
                        <div class="col-auto d-flex justify-content-end align-items-center">
                            <a href="login-register.html" class="header-action-account">Login / SignUp</a>
                            <a class="header-action-wishlist" href="shop-wishlist.html">
                                <i class="icon-heart"></i>
                            </a>
                            <button class="header-action-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithCartSidebar" aria-controls="offcanvasWithCartSidebar">
                                <i class="cart-icon icon-handbag"></i>
                                <span class="cart-count">01</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-middle d-xl-none">
                <div class="container">
                    <div class="row align-items-center justify-content-between align-items-center">
                        <div class="col-auto">
                            <div class="header-logo-area">
                                <a href="index.html">
                                    <img class="logo-main" src="assets/images/logo.png" width="182" height="31" alt="Logo"/>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="header-action d-flex justify-content-end align-items-center">
                                <button class="btn-search-menu d-xl-none me-lg-4 me-xl-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch">
                                    <i class="search-icon icon-magnifier"></i>
                                </button>
                                <a href="login-register.html" class="header-action-account d-none d-xl-block">Login / SignUp</a>
                                <a href="login-register.html" class="header-action-user me-lg-4 me-xl-0 d-xl-none">
                                    <i class="icon icon-user"></i>
                                </a>
                                <a class="header-action-wishlist" href="shop-wishlist.html">
                                    <i class="icon-heart"></i>
                                </a>
                                <button class="header-action-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithCartSidebar" aria-controls="offcanvasWithCartSidebar">
                                    <i class="cart-icon icon-handbag"></i>
                                    <span class="cart-count">01</span>
                                </button>
                                <button class="btn-menu d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                    <i class="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-four-area d-none d-xl-block">
                <div class="container">
                    <div class="header-four-inner-area">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-auto d-flex">
                                <div class="vertical-menu vertical-menu-two">
                                    <button class="vmenu-btn"><i class="icon fa fa-list-ul"></i> All Departments <i class="icon fa fa-angle-down"></i></button>
                                    <ul class="vmenu-content vmenu-content-none">
                                        <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm1.png" alt="Icon"/></span> Headphone</a></li>
                                        <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm2.png" alt="Icon"/></span> Video Game</a></li>
                                        <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm3.png" alt="Icon"/></span> Protable Speakers</a></li>
                                        <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm4.png" alt="Icon"/></span> Digital Camera</a></li>
                                        <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm5.png" alt="Icon"/></span> Gadgets</a></li>
                                        <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm6.png" alt="Icon"/></span> Home Appliances</a></li>
                                        <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm7.png" alt="Icon"/></span> Audio Record</a></li>
                                        <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm8.png" alt="Icon"/></span> Computer/Laptop</a></li>
                                    </ul>
                                    {/* <!-- menu content --> */}
                                </div>
                                <div class="header-navigation d-none d-lg-block ps-xl-4 ps-xxl-10">
                                    <ul class="main-nav">
                                        <li class="main-nav-item has-submenu"><a class="main-nav-link" href="index.html">Home</a>
                                            <ul class="submenu-nav">
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="index.html">Home One</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="index-two.html">Home Two</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="index-three.html">Home Three</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="index-four.html">Home Four</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="index-five.html">Home Five</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="index-six.html">Home Six</a></li>
                                            </ul>
                                        </li>
                                        <li class="main-nav-item"><a class="main-nav-link" href="about-us.html">About</a></li>
                                        <li class="main-nav-item has-submenu position-static"><a class="main-nav-link" href="shop.html">Shop</a>
                                            <ul class="submenu-nav-mega">
                                                <li class="submenu-nav-mega-item"><a href="shop.html" class="mega-title">Shop Layout</a>
                                                    <ul>
                                                        <li><a class="submenu-nav-mega-link" href="shop-three-columns.html">Shop 3 Column</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop-four-columns.html">Shop 4 Column</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop.html">Shop Left Sidebar</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li class="submenu-nav-mega-item"><a href="shop-single-product.html" class="mega-title">Single Product</a>
                                                    <ul>
                                                        <li><a class="submenu-nav-mega-link" href="shop-single-product.html">Single Product Normal</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop-single-product-variable.html">Single Product Variable</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop-single-product-group.html">Single Product Group</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop-single-product-affiliate.html">Single Product Affiliate</a></li>
                                                    </ul>
                                                </li>
                                                <li class="submenu-nav-mega-item"><a href="shop-cart.html" class="mega-title">Others Pages</a>
                                                    <ul>
                                                        <li><a class="submenu-nav-mega-link" href="shop-cart.html">Shopping Cart</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop-checkout.html">Checkout</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop-wishlist.html">Wishlist</a></li>
                                                        <li><a class="submenu-nav-mega-link" href="shop-compare.html">Compare</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="main-nav-item has-submenu"><a class="main-nav-link" href="account.html">Pages</a>
                                            <ul class="submenu-nav">
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="account.html">Account</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="login-register.html">Login/Register</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="page-not-found.html">Page Not Found</a></li>
                                            </ul>
                                        </li>
                                        <li class="main-nav-item has-submenu"><a class="main-nav-link" href="blog.html">Blog</a>
                                            <ul class="submenu-nav">
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="blog.html">Blog Grid</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="blog-details.html">Blog Details</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                                <li class="submenu-nav-item"><a class="submenu-nav-link" href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li class="main-nav-item"><a class="main-nav-link" href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="header-action">
                                    <div class="phone-item-action phone-item-action--two">
                                        <div class="phone-item-icon">
                                            <img src="assets/images/icons/phone2.png" alt="Icon" width="32" height="36"/>
                                        </div>
                                        <div class="phone-item-content">
                                            <span>Call Us 24/7</span> <a href="tel:+00123456789">+00 123 456 789</a>
                                        </div>
                                    </div>
                                    <button class="btn-search-menu d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch">
                                        <span class="search-icon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"/>
                    </svg>
                  </span>
                                    </button>
                                    <button class="btn-menu d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                        <i class="fa fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!--== End Header Wrapper ==--> */}


        <main class="main-content">

            {/* <!--== Start Hero Area Wrapper ==--> */}
            <div class="hero-four-slider-area pt-xl-6">
                <div class="container">
                    <div class="hero-four-wrp d-xl-flex">
                        <div class="swiper hero-four-slider-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide hero-four-slide-item bg-img h-100" data-bg-img="assets/images/slider/slider4-bg1.jpg">
                                    <div class="row align-items-center position-relative h-100">
                                        <div class="col-12 col-sm-6 col-lg-6">
                                            <div class="hero-four-slide-content">
                                                <h1 class="hero-four-slide-title">Bang and Olufsen Smart Speaker</h1>
                                                <p class="hero-four-slide-desc">Wireless Connection With Computer, Laptop and TV</p>
                                                <a class="btn btn-white" href="shop.html">Shop Now <i class="icon fa fa-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6 col-lg-6">
                                            <div class="hero-four-slide-thumb">
                                                <img src="assets/images/slider/slider4.png" width="372" height="437" alt="Image"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product-banner-area">
                            {/* <!--== Start Product Banner Item ==--> */}
                            <div class="product-banner-item mb-xl-4">
                                <div class="product-banner-thumb">
                                    <img src="assets/images/shop/banner/11.jpg" width="530" height="310" alt=""/>
                                </div>
                                <div class="product-banner-content ps-3 ps-sm-8">
                                    <h5 class="product-banner-desc">Sparing Sales Coming</h5>
                                    <h2 class="product-banner-title">Smart Phone <span class="d-block">With Touch</span></h2>
                                    <a class="btn-link text-hover-headings-color fw-semi-bold" href="shop.html">Shop Now <i class="icon ms-1 fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            {/* <!--== End Product Banner Item ==--> */}

                            {/* <!--== Start Product Banner Item ==--> */}
                            <div class="product-banner-item">
                                <div class="product-banner-thumb">
                                    <img src="assets/images/shop/banner/12.jpg" width="530" height="310" alt=""/>
                                </div>
                                <div class="product-banner-content ps-3 ps-sm-8">
                                    <h5 class="product-banner-desc">Sparing Sales Coming</h5>
                                    <h2 class="product-banner-title">Smart 4K Tv <span class="d-block">Watch Now</span></h2>
                                    <a class="btn-link text-hover-headings-color fw-semi-bold" href="shop.html">Shop Now <i class="icon ms-1 fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            {/* <!--== End Product Banner Item ==--> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End Hero Area Wrapper ==--> */}

            {/* <!--== Start Features Area Wrapper ==--> */}
            <div class="features-area">
                <div class="container">
                    <div class="features-wrp bg-gray-light">
                        <div class="row mb-n6">
                            <div class="col-sm-6 col-md-6 col-lg-3 mb-6">
                                {/* <!--== Start Feature Item ==--> */}
                                <div class="feature-item justify-content-center">
                                    <div class="feature-icon">
                                        <img src="assets/images/icons/1.png" width="44" height="38" alt="Icon"/>
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="feature-title">Support 24/7</h4>
                                        <p>Delicated 24/7 Support</p>
                                    </div>
                                </div>
                                {/* <!--== End Feature Item ==--> */}
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 mb-6">
                                {/* <!--== Start Feature Item ==--> */}
                                <div class="feature-item justify-content-center">
                                    <div class="feature-icon">
                                        <img src="assets/images/icons/2.png" width="38" height="38" alt="Icon"/>
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="feature-title">Easy Returns</h4>
                                        <p>Shop With Confidence</p>
                                    </div>
                                </div>
                                {/* <!--== End Feature Item ==--> */}
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 mb-6">
                                {/* <!--== Start Feature Item ==--> */}
                                <div class="feature-item justify-content-center">
                                    <div class="feature-icon">
                                        <img src="assets/images/icons/3.png" width="48" height="38" alt="Icon"/>
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="feature-title">Card Payment</h4>
                                        <p>12 Months Installments</p>
                                    </div>
                                </div>
                                {/* <!--== End Feature Item ==--> */}
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-3 mb-6">
                                {/* <!--== Start Feature Item ==--> */}
                                <div class="feature-item justify-content-center border-0">
                                    <div class="feature-icon">
                                        <img src="assets/images/icons/4.png" width="50" height="38" alt="Icon"/>
                                    </div>
                                    <div class="feature-content">
                                        <h4 class="feature-title">Free Shipping</h4>
                                        <p>Capped at $50 per order</p>
                                    </div>
                                </div>
                                {/* <!--== End Feature Item ==--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End Features Area Wrapper ==--> */}

            {/* <!--== Start Product Tab Area Wrapper ==--> */}
            <div class="product-area section-space">
                <div class="container">
                    <h2 class="text-center text-lg-start mt-n2 mb-8">New Top Sales!</h2>
                    <div class="product-tab-content">
                        <ul class="nav nav-tabs mb-6" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="product-audio-video-tab" data-bs-toggle="tab" data-bs-target="#product-audio-video" type="button" role="tab" aria-controls="product-audio-video" aria-selected="true">Audio & Video</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="product-gamming-tab" data-bs-toggle="tab" data-bs-target="#product-gamming" type="button" role="tab" aria-controls="product-gamming" aria-selected="false">Gamming</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="product-heahphone-tab" data-bs-toggle="tab" data-bs-target="#product-heahphone" type="button" role="tab" aria-controls="product-heahphone" aria-selected="false">Heahphone</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="myTabContent">

                            <div class="tab-pane fade show active" id="product-audio-video" role="tabpanel" aria-labelledby="product-audio-video-tab">
                                <div class="swiper product-tab-two-slider swiper-button-style swiper-button-style10">
                                    <div class="swiper-wrapper">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/1.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="product-item-price">$160.00 - <span class="price-old">$260.00</span></div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/12.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="product-item-price">$256.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/13.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="product-item-price">$283.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/9.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="product-item-price">$160.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/11.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="product-item-price">$183.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/5.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="product-item-price">$160.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/6.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Android Tablet 8.1 Mini Old - 256Gj</a></h5>
                                                <div class="product-item-price">$183.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    {/* <!--== Start Swiper Navigation ==--> */}
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="product-gamming" role="tabpanel" aria-labelledby="product-gamming-tab">
                                <div class="swiper product-tab-two-slider swiper-button-style swiper-button-style10">
                                    <div class="swiper-wrapper">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/13.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="product-item-price">$283.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/9.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="product-item-price">$160.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/1.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="product-item-price">$160.00 - <span class="price-old">$260.00</span></div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/12.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="product-item-price">$256.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/11.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="product-item-price">$183.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/5.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="product-item-price">$160.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/6.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Android Tablet 8.1 Mini Old - 256Gj</a></h5>
                                                <div class="product-item-price">$183.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    {/* <!--== Start Swiper Navigation ==--> */}
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="product-heahphone" role="tabpanel" aria-labelledby="product-heahphone-tab">
                                <div class="swiper product-tab-two-slider swiper-button-style swiper-button-style10">
                                    <div class="swiper-wrapper">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/12.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="product-item-price">$256.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/1.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="product-item-price">$160.00 - <span class="price-old">$260.00</span></div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/13.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="product-item-price">$283.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/9.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="product-item-price">$160.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/11.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="product-item-price">$183.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/5.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="product-item-price">$160.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/6.jpg" width="270" height="264" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info text-center pb-6">
                                                <h5 class="product-item-title mb-2"><a href="shop-single-product.html">Android Tablet 8.1 Mini Old - 256Gj</a></h5>
                                                <div class="product-item-price">$183.00</div>
                                                <div class="product-item-review-icon">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    {/* <!--== Start Swiper Navigation ==--> */}
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End Product Tab Area Wrapper ==--> */}

            {/* <!--== Start Product Banner Area Wrapper ==--> */}
            <div class="product-banner-area">
                <div class="container">
                    <div class="row mb-n6">
                        <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-6">
                            {/* <!--== Start Product Banner Item ==--> */}
                            <div class="product-banner-item">
                                <div class="product-banner-thumb">
                                    <img src="assets/images/shop/banner/13.jpg" width="566" height="330" alt=""/>
                                </div>
                                <div class="product-banner-five-content text-center">
                                    <h5 class="product-banner-desc">Sparing Sales Coming</h5>
                                    <h2 class="product-banner-five-title">Smart Watch <span class="d-block">Android</span></h2>
                                    <a class="btn-link" href="shop.html">Shop Now <i class="icon ms-1 fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            {/* <!--== End Product Banner Item ==--> */}
                        </div>
                        <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-6">
                            {/* <!--== Start Product Banner Item ==--> */}
                            <div class="product-banner-item">
                                <div class="product-banner-thumb">
                                    <img src="assets/images/shop/banner/14.jpg" width="566" height="330" alt=""/>
                                </div>
                                <div class="product-banner-five-content text-center">
                                    <h5 class="product-banner-desc">Sparing Sales Coming</h5>
                                    <h2 class="product-banner-five-title">New Smart Phone <span class="d-block">With Touch</span></h2>
                                    <a class="btn-link" href="shop.html">Shop Now <i class="icon ms-1 fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            {/* <!--== End Product Banner Item ==--> */}
                        </div>
                        <div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-6 ms-xl-0 ms-auto me-xl-0 me-auto">
                            {/* <!--== Start Product Banner Item ==--> */}
                            <div class="product-banner-item">
                                <div class="product-banner-thumb">
                                    <img src="assets/images/shop/banner/15.jpg" width="566" height="330" alt=""/>
                                </div>
                                <div class="product-banner-five-content text-center">
                                    <h5 class="product-banner-desc">Sparing Sales Coming</h5>
                                    <h2 class="product-banner-five-title">Smart Phone <span class="d-block">With Pen</span></h2>
                                    <a class="btn-link" href="shop.html">Shop Now <i class="icon ms-1 fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            {/* <!--== End Product Banner Item ==--> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End Product Banner Area Wrapper ==--> */}

            {/* <!--== Start Product Area Wrapper ==--> */}
            <div class="product-area section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-xl-5 col-xxl-4">
                            <div class="daily-deals-area daily-deals-style2 pb-6 pb-lg-8 pb-xl-0 mb-10 mb-xl-0">
                                <h3 class="daily-deals-title ps-7">Daily Deals!</h3>
                                <div class="daily-deals-swiper-button swiper-button-style3">
                                    {/* <!--== Start Swiper Navigation ==--> */}
                                    <div class="swiper-button-prev"><i class="icon-arrow-left"></i></div>
                                    <div class="swiper-button-next"><i class="icon-arrow-right"></i></div>
                                </div>
                                <div class="swiper product-daily-deals-three-slider">
                                    <div class="swiper-wrapper">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item product-item-border product-daily-deals-item">
                                            <div class="product-item-info">
                                                <div class="countdown1 justify-content-start mb-6" data-countdown="2023/12/01"></div>
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Headphone Supersonic New Adi-25</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$256.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/d3.jpg" width="308" height="328" alt=""/>
                                            </a>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}

                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="swiper-slide product-item product-item-border product-daily-deals-item">
                                            <div class="product-item-info">
                                                <div class="countdown1 justify-content-start mb-6" data-countdown="2023/12/01"></div>
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Smart Watch New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$256.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/d4.jpg" width="308" height="328" alt=""/>
                                            </a>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-xl-7 col-xxl-8">
                            <div class="product-tab3-content">
                                <ul class="nav nav-tabs" id="myTab2" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="product-audio-video2-tab" data-bs-toggle="tab" data-bs-target="#product-audio-video2" type="button" role="tab" aria-controls="product-audio-video2" aria-selected="true">Audio & Video</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="product-gamming2-tab" data-bs-toggle="tab" data-bs-target="#product-gamming2" type="button" role="tab" aria-controls="product-gamming2" aria-selected="false">Gamming</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="product-heahphone2-tab" data-bs-toggle="tab" data-bs-target="#product-heahphone2" type="button" role="tab" aria-controls="product-heahphone2" aria-selected="false">Heahphone</button>
                                    </li>
                                </ul>

                                <div class="tab-content" id="myTabContent2">
                                    <div class="tab-pane fade show active" id="product-audio-video2" role="tabpanel" aria-labelledby="product-audio-video2-tab">
                                        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-2 row-cols-xxl-3 mb-n8">
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p7.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">D-Phone Android Latest UI New XP</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p8.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Digital Lens Camera HYU-259Xl</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item border-0">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p9.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Vivi Movi Box Black HK With Eye Protect</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p10.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Bluetooth Speaker Without Cable</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p11.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Headphone Supersonic New Adi-25</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item border-0">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p12.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="product-gamming2" role="tabpanel" aria-labelledby="product-gamming2-tab">
                                        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-2 row-cols-xxl-3 mb-n8">
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p9.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Vivi Movi Box Black HK With Eye Protect</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p10.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Bluetooth Speaker Without Cable</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item border-0">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p7.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">D-Phone Android Latest UI New XP</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p8.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Digital Lens Camera HYU-259Xl</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p11.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Headphone Supersonic New Adi-25</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item border-0">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p12.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade" id="product-heahphone2" role="tabpanel" aria-labelledby="product-heahphone2-tab">
                                        <div class="row row-cols-1 row-cols-sm-2 row-cols-xl-2 row-cols-xxl-3 mb-n8">
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p11.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Headphone Supersonic New Adi-25</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p12.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item border-0">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p7.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">D-Phone Android Latest UI New XP</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p8.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Digital Lens Camera HYU-259Xl</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p9.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Vivi Movi Box Black HK With Eye Protect</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                            <div class="col mb-8">
                                                {/* <!--== Start Product Item ==--> */}
                                                <div class="product-list-item border-0">
                                                    <a class="product-list-thumb" href="shop-single-product.html">
                                                        <img src="assets/images/shop/p10.jpg" width="107" height="107" alt=""/>
                                                    </a>
                                                    <div class="product-list-info">
                                                        <h5 class="product-list-title"><a href="shop-single-product.html">Bluetooth Speaker Without Cable</a></h5>
                                                        <div class="info-bottom">
                                                            <div class="product-list-price">$256.00</div>
                                                            <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                            <div class="product-list-review-icon">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!--== End Product Item ==--> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End Product Area Wrapper ==--> */}

            {/* <!--== Start Product Categories Area Wrapper ==--> */}
            <div class="product-categories-area">
                <div class="container">
                    <div class="product-categories-wrp section-space bg-img" data-bg-img="assets/images/shop/category/bg2.jpg">
                        <div class="section-title text-center">
                            <h2 class="title mt-n2 mb-0">Top Categories</h2>
                        </div>
                        <div class="swiper product-categories-three-slider swiper-button-style product-categories-items">
                            <div class="swiper-wrapper">
                                {/* <!--== Start Product Categorie Item ==--> */}
                                <a href="shop.html" class="swiper-slide product-category-item">
                                    <div class="product-category-thumb">
                                        <img src="assets/images/shop/category/1.png" width="101" height="101" alt=""/>
                                    </div>
                                    <h5 class="product-category-title">Audio/Dideo</h5>
                                </a>
                                {/* <!--== End Product Categorie Item ==--> */}

                                {/* <!--== Start Product Categorie Item ==--> */}
                                <a href="shop.html" class="swiper-slide product-category-item">
                                    <div class="product-category-thumb">
                                        <img src="assets/images/shop/category/2.png" width="101" height="101" alt=""/>
                                    </div>
                                    <h5 class="product-category-title">Gamming</h5>
                                </a>
                                {/* <!--== End Product Categorie Item ==--> */}

                                {/* <!--== Start Product Categorie Item ==--> */}
                                <a href="shop.html" class="swiper-slide product-category-item">
                                    <div class="product-category-thumb">
                                        <img src="assets/images/shop/category/3.png" width="101" height="101" alt=""/>
                                    </div>
                                    <h5 class="product-category-title">Headphone</h5>
                                </a>
                                {/* <!--== End Product Categorie Item ==--> */}

                                {/* <!--== Start Product Categorie Item ==--> */}
                                <a href="shop.html" class="swiper-slide product-category-item">
                                    <div class="product-category-thumb">
                                        <img src="assets/images/shop/category/4.png" width="101" height="101" alt=""/>
                                    </div>
                                    <h5 class="product-category-title">Digital Camera</h5>
                                </a>
                                {/* <!--== End Product Categorie Item ==--> */}

                                {/* <!--== Start Product Categorie Item ==--> */}
                                <a href="shop.html" class="swiper-slide product-category-item">
                                    <div class="product-category-thumb">
                                        <img src="assets/images/shop/category/5.png" width="101" height="101" alt=""/>
                                    </div>
                                    <h5 class="product-category-title">Mobile Phone</h5>
                                </a>
                                {/* <!--== End Product Categorie Item ==--> */}

                                {/* <!--== Start Product Categorie Item ==--> */}
                                <a href="shop.html" class="swiper-slide product-category-item">
                                    <div class="product-category-thumb">
                                        <img src="assets/images/shop/category/6.png" width="101" height="101" alt=""/>
                                    </div>
                                    <h5 class="product-category-title">Computer/Laptop</h5>
                                </a>
                                {/* <!--== End Product Categorie Item ==--> */}

                                {/* <!--== Start Product Categorie Item ==--> */}
                                <a href="shop.html" class="swiper-slide product-category-item">
                                    <div class="product-category-thumb">
                                        <img src="assets/images/shop/category/7.png" width="101" height="101" alt=""/>
                                    </div>
                                    <h5 class="product-category-title">Smart TV</h5>
                                </a>
                                {/* <!--== End Product Categorie Item ==--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End Product Categories Area Wrapper ==--> */}

            {/* <!--== Start Product Tab Area Wrapper ==--> */}
            <div class="product-area section-space">
                <div class="container">
                    <h2 class="text-center text-lg-start mt-n2 mb-6 mb-l-8">Bestseller Products!</h2>
                    <div class="product-tab-content">
                        <ul class="nav nav-tabs mb-6" id="myTab3" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="product-audio-video3-tab" data-bs-toggle="tab" data-bs-target="#product-audio-video3" type="button" role="tab" aria-controls="product-audio-video3" aria-selected="true">Audio & Video</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="product-gamming3-tab" data-bs-toggle="tab" data-bs-target="#product-gamming3" type="button" role="tab" aria-controls="product-gamming3" aria-selected="false">Gamming</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="product-heahphone3-tab" data-bs-toggle="tab" data-bs-target="#product-heahphone3" type="button" role="tab" aria-controls="product-heahphone3" aria-selected="false">Heahphone</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="myTabContent3">

                            <div class="tab-pane fade show active" id="product-audio-video3" role="tabpanel" aria-labelledby="product-audio-video3-tab">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 g-0 product-two-items">
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b7.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$256.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b8.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$258.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b9.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$268.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b10.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4 rounded-0">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$298.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b11.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$260.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b5.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b12.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b2.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Tablet 8.1 Mini Old - 256Gj</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b3.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b13.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4 rounded-0">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b14.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b15.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="product-gamming3" role="tabpanel" aria-labelledby="product-gamming3-tab">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 g-0 product-two-items">
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b11.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$260.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b15.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b7.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$256.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b8.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$258.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b9.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$268.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b10.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4 rounded-0">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$298.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b5.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b12.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b2.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Tablet 8.1 Mini Old - 256Gj</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b3.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b13.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4 rounded-0">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b14.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="product-heahphone3" role="tabpanel" aria-labelledby="product-heahphone3-tab">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 g-0 product-two-items">
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b10.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4 rounded-0">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$298.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b11.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$260.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b7.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$256.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b8.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$258.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b9.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$268.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b5.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b12.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b2.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Tablet 8.1 Mini Old - 256Gj</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b3.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">Sold Out</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Headphone Supersonic Pew Adi -25</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b13.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme4 rounded-0">HOT</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Bluetooth Speaker New Without Cable</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b14.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges rounded-0">-10%</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Game Triger Finger New Insulated PH-X</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                    <div class="col">
                                        {/* <!--== Start Product Item ==--> */}
                                        <div class="product-item product-item-border">
                                            <a class="product-item-thumb" href="shop-single-product.html">
                                                <img src="assets/images/shop/b15.jpg" width="290" height="248" alt=""/>
                                            </a>
                                            <span class="badges bg-theme3 rounded-0">New</span>
                                            <div class="product-item-action">
                                                <button type="button" class="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                    <i class="icon-heart"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-compare" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                    <i class="icon-shuffle"></i>
                                                </button>
                                                <button type="button" class="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                                    <i class="icon-magnifier"></i>
                                                </button>
                                            </div>
                                            <div class="product-item-info">
                                                <h5 class="product-item-title"><a href="shop-single-product.html">Android Television Super New DGT -256</a></h5>
                                                <div class="info-bottom">
                                                    <div class="product-item-price">$265.00</div>
                                                    <button type="button" class="info-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"><i class="icon-handbag"></i></button>
                                                    <div class="product-item-review-icon">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--== End Product Item ==--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End Product Tab Area Wrapper ==--> */}

            {/* <!--== Start Product Banner Area Wrapper ==--> */}
            <div class="product-banner-area">
                <div class="container">
                    <div class="row mb-n6">
                        <div class="col-12 col-lg-6 mb-6">
                            {/* <!--== Start Product Banner Item ==--> */}
                            <div class="product-banner-item">
                                <div class="product-banner-thumb">
                                    <img src="assets/images/shop/banner/16.jpg" width="860" height="357" alt=""/>
                                </div>
                                <div class="product-banner-six-content text-center">
                                    <h5 class="product-banner-desc">Get 50% Off</h5>
                                    <h2 class="product-banner-nine-title text-uppercase">Smart Television <span class="d-block">With Pen</span></h2>
                                    <a class="btn product-banner-five-btn d-none d-sm-inline-block" href="shop.html">Shop Now <i class="icon fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            {/* <!--== End Product Banner Item ==--> */}
                        </div>
                        <div class="col-12 col-lg-6 mb-6">
                            {/* <!--== Start Product Banner Item ==--> */}
                            <div class="product-banner-item">
                                <div class="product-banner-thumb">
                                    <img src="assets/images/shop/banner/17.jpg" width="860" height="357" alt=""/>
                                </div>
                                <div class="product-banner-six-content text-center">
                                    <h5 class="product-banner-desc">Get 50% Off</h5>
                                    <h2 class="product-banner-nine-title text-uppercase">Smart Phone <span class="d-block">With Pen</span></h2>
                                    <a class="btn product-banner-five-btn d-none d-sm-inline-block" href="shop.html">Shop Now <i class="icon fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            {/* <!--== End Product Banner Item ==--> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End Product Banner Area Wrapper ==--> */}

            {/* <!--== Start Brand Logo Area Wrapper ==--> */}
            <div class="section-space">
                <div class="container">
                    <div class="swiper brand-logo-two-slider-container swiper-button-style swiper-button-style8">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide brand-logo-item">
                                {/* <!--== Start Brand Logo Item ==--> */}
                                <img src="assets/images/brand-logo/1.png" width="124" height="79" alt=""/>
                                {/* <!--== End Brand Logo Item ==--> */}
                            </div>
                            <div class="swiper-slide brand-logo-item">
                                {/* <!--== Start Brand Logo Item ==--> */}
                                <img src="assets/images/brand-logo/2.png" width="124" height="79" alt=""/>
                                {/* <!--== End Brand Logo Item ==--> */}
                            </div>
                            <div class="swiper-slide brand-logo-item">
                                {/* <!--== Start Brand Logo Item ==--> */}
                                <img src="assets/images/brand-logo/3.png" width="124" height="79" alt=""/>
                                {/* <!--== End Brand Logo Item ==--> */}
                            </div>
                            <div class="swiper-slide brand-logo-item">
                                {/* <!--== Start Brand Logo Item ==--> */}
                                <img src="assets/images/brand-logo/4.png" width="124" height="79" alt=""/>
                                {/* <!--== End Brand Logo Item ==--> */}
                            </div>
                            <div class="swiper-slide brand-logo-item">
                                {/* <!--== Start Brand Logo Item ==--> */}
                                <img src="assets/images/brand-logo/5.png" width="124" height="79" alt=""/>
                                {/* <!--== End Brand Logo Item ==--> */}
                            </div>
                            <div class="swiper-slide brand-logo-item">
                                {/* <!--== Start Brand Logo Item ==--> */}
                                <img src="assets/images/brand-logo/6.png" width="124" height="79" alt=""/>
                                {/* <!--== End Brand Logo Item ==--> */}
                            </div>
                            <div class="swiper-slide brand-logo-item">
                                {/* <!--== Start Brand Logo Item ==--> */}
                                <img src="assets/images/brand-logo/7.png" width="124" height="79" alt=""/>
                                {/* <!--== End Brand Logo Item ==--> */}
                            </div>
                        </div>
                        {/* <!--== Start Swiper Navigation ==--> */}
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
            {/* <!--== End Brand Logo Area Wrapper ==--> */}

            {/* <!--== Start News Letter Area Wrapper ==--> */}
            <div class="newsletter-area bg-img" data-bg-img="assets/images/photos/bg2.jpg">
                <div class="container">
                    <div class="newsletter-two-content-wrap border-0">
                        <div class="row align-items-center">
                            <div class="col-lg-5 offset-lg-1">
                                <div class="newsletter-two-content">
                                    <img class="icon-img" src="assets/images/icons/5.png" alt="Icon"/>
                                    <div class="info">
                                        <h3 class="title text-white">Join our newsletter and 10% Off</h3>
                                        <p class="text-white">Sign up for our newsletter to get up-to-date from us</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <form class="newsletter-two-form mt-5 mt-lg-0 ms-lg-6">
                                    <input type="email" class="form-control" placeholder="Enter Your Mail"/>
                                    <button class="btn-submit" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--== End News Letter Area Wrapper ==--> */}

        </main>








        {/* <!--== Start Footer Area Wrapper ==--> */}
        <footer class="footer-area footer-two-area bg-img" data-bg-img="assets/images/photos/bg-footer.jpg">
            <div class="container"/>
                {/* <!--== Start Footer Main ==--> */}
                <div class="footer-main">
                    <div class="row justify-content-lg-between mb-n6">
                        <div class="col-md-6 col-lg-4 col-xl-auto mb-6">
                            <div class="widget-item">
                                <h4 class="widget-title">Download App</h4>
                                <h4 class="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-4">Download App</h4>
                                <div id="widgetTitleId-4" class="collapse widget-collapse-body">
                                    <div class="widget-app-info p-4 p-md-0">
                                        <p class="widget-app-desc">Elehaus App is now available on App Store <span class="d-md-block">And Google Play. Get it now.</span></p>
                                        <div class="d-sm-flex">
                                            <img src="assets/images/photos/store-apple.png" alt="" width="160" height="49"/>
                                            <img class="ms-0 ms-sm-2 mt-2 mt-sm-0" src="assets/images/photos/store-android.png" alt="" width="160" height="49"/>
                                
                                        <div class="social-items">
                                            <a class="social-item facebook-item" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i></a>
                                            <a class="social-item twitter-item" href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i></a>
                                            <a class="social-item youtube-item" href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i class="fa fa-youtube"></i></a>
                                            <a class="social-item linkedin-item" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a>
                                            <a class="social-item rss-item" href="https://www.rss.com/" target="_blank" rel="noreferrer"><i class="fa fa-rss"></i></a>
                                            <a class="social-item dribbble-item" href="https://www.dribbble.com/" target="_blank" rel="noreferrer"><i class="fa fa-dribbble"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-auto mb-6">
                            <div class="widget-item">
                                <h4 class="widget-title">Information</h4>
                                <h4 class="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-1">Information</h4>
                                <div id="widgetTitleId-1" class="collapse widget-collapse-body">
                                    <ul class="widget-nav">
                                        <li><a href="about-us.html">About us</a></li>
                                        <li><a href="account.html">Delivery information</a></li>
                                        <li><a href="contact.html">Privacy Policy</a></li>
                                        <li><a href="shop.html">Sales</a></li>
                                        <li><a href="contact.html">Terms And Conditions</a></li>
                                        <li><a href="contact.html">Shipping Policy</a></li>
                                        <li><a href="contact.html">EMI Payment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-auto mb-6">
                            <div class="widget-item">
                                <h4 class="widget-title">Account</h4>
                                <h4 class="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-2">Account</h4>
                                <div id="widgetTitleId-2" class="collapse widget-collapse-body">
                                    <ul class="widget-nav">
                                        <li><a href="account.html">My account</a></li>
                                        <li><a href="account.html">My orders</a></li>
                                        <li><a href="account.html">Returns</a></li>
                                        <li><a href="account.html">Shipping</a></li>
                                        <li><a href="shop-wishlist.html">Wishlist</a></li>
                                        <li><a href="contact.html">How Does It Work</a></li>
                                        <li><a href="account.html">Merchant Sign Up</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-auto mb-6">
                            <div class="widget-item">
                                <h4 class="widget-title">Store</h4>
                                <h4 class="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-3">Store</h4>
                                <div id="widgetTitleId-3" class="collapse widget-collapse-body">
                                    <ul class="widget-nav">
                                        <li><a href="shop.html">Affiliate</a></li>
                                        <li><a href="shop.html">Bestsellers</a></li>
                                        <li><a href="shop.html">Discount</a></li>
                                        <li><a href="shop.html">Latest products</a></li>
                                        <li><a href="shop.html">Sale</a></li>
                                        <li><a href="shop.html">All Collection</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4 col-xl-auto mb-6">
                            <div class="widget-item">
                                <h4 class="widget-title">Contact Us</h4>
                                <h4 class="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetTitleId-5">Contact Us</h4>
                                <div id="widgetTitleId-5" class="collapse widget-collapse-body">
                                    <div class="widget-contact widget-contact-two">
                                        <p class="widget-contact-desc">If you have any question. please <span class="d-md-block">contact us <a href="mailto://demo@example.com">demo@example.com</a></span></p>
                                        <div class="widget-info-item mb-6">
                                            <img src="assets/images/icons/pin.png" alt="Icon"/>
                                            <p>Your address goes here. <span class="d-md-block">123, Address.</span></p>
                                        </div>
                                        <div class="widget-info-item">
                                            <img src="assets/images/icons/mobile.png" alt="Icon"/>
                                            <div class="info-item-call">
                                                <a href="tel://+0123456789 "> + 0 123 456 789 </a>
                                                <a href="tel://+0129456789 "> + 0 129 456 789 </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--== End Footer Main ==--> */}

                {/* <!--== Start Footer Bottom ==--> */}
                <div class="footer-bottom-two">
                    <div class="footer-bottom-nav">
                        <a href="shop.html">Our Stores</a> /
                        <a href="shop.html">Shipping</a> /
                        <a href="contact.html">Payments</a> /
                        <a href="shop-checkout.html">Checkout</a> /
                        <a href="shop.html">Discount</a> /
                        <a href="contact.html">Terms and Conditions</a> /
                        <a href="contact.html">Policy Shipping</a> /
                        <a href="contact.html">Returns</a> /
                        <a href="contact.html">Refunds</a>
                    </div>
                    <a href="shop.html"><img src="assets/images/shop/payment.png" alt=""/></a>
                    <p class="copyright">© 2022 <span class="text-primary">Elehaus</span>. Made with <i class="fa fa-heart"></i> by <a class="text-primary" target="_blank" href="https://themeforest.net/user/hastech/portfolio">HasTech</a></p>
                </div>
                {/* <!--== End Footer Bottom ==--> */}
            </div>
        </footer>
        {/* <!--== End Footer Area Wrapper ==--> */}




        {/* <!--== Scroll Top Button ==--> */}
        <div class="scroll-to-top"><span class="fa fa-angle-double-up"></span></div>

        {/* <!--== Start Product Quick View Modal ==--> */}
        <aside class="product-cart-view-modal modal fade" id="action-QuickViewModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="product-quick-view-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal"><span>×</span></button>
                            <div class="row row-gutter-0">
                                <div class="col-lg-6">
                                    <div class="single-product-slider">
                                        <div class="single-product-thumb">
                                            <div class="swiper single-product-quick-view-slider">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="thumb-item">
                                                            <img src="assets/images/shop/details/m1.jpg" alt="Image" width="640" height="710"/>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="thumb-item">
                                                            <img src="assets/images/shop/details/m2.jpg" alt="Image" width="640" height="710"/>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="thumb-item">
                                                            <img src="assets/images/shop/details/m3.jpg" alt="Image" width="640" height="710"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Add Arrows --> */}
                                                <div class="swiper-button-next"></div>
                                                <div class="swiper-button-prev"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="product-detail-content mt-6 mt-lg-0">
                                        <h2 class="product-detail-title mt-n1 me-10">Android Television Super Salon New DGT -256</h2>
                                        <div class="product-detail-price">$160.00 - <span class="price-old">$260.00</span></div>
                                        <div class="product-detail-review">
                                            <div class="product-detail-review-icon">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-half-o"></i>
                                            </div>
                                            <p class="product-detail-review-show">( 1 Review )</p>
                                        </div>
                                        <p class="product-detail-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimo veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                        <div class="mb-3">
                                            <div class="pro-qty mb-2 mb-sm-0">
                                                <input type="text" title="Quantity" value="01"/>
                                            </div>
                                            <button class="product-detail-cart-btn" type="button" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Add to cart</button>
                                        </div>
                                        <div>
                                            <button type="button" class="product-detail-compare-btn" data-bs-toggle="modal" data-bs-target="#action-CompareModal">
                                                <i class="icon icon-shuffle"></i> Compare
                                            </button>
                                            <button type="button" class="product-detail-wishlist-btn" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                                <i class="icon icon-heart"></i> Add to wishlist
                                            </button>
                                        </div>
                                        <ul class="product-detail-meta pt-6">
                                            <li><span>SKU:</span> WX-256HG</li>
                                            <li><span>Categories:</span> Home, Electronic</li>
                                            <li><span>Tag</span> Electronic</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        {/* <!--== End Product Quick View Modal ==--> */}

        {/* <!--== Start Product Quick Wishlist Modal ==--> */}
        <aside class="product-action-modal modal fade" id="action-WishlistModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="product-action-view-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </button>
                            <div class="modal-action-messages">
                                <i class="fa fa-check-square-o"></i> Added to wishlist successfully!
                            </div>
                            <div class="modal-action-product">
                                <div class="thumb">
                                    <img src="assets/images/shop/modal1.jpg" alt="Organic Food Juice" width="466" height="320"/>
                                </div>
                                <h4 class="product-name"><a href="shop-single-product.html">CRAS NEQUE METUS</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        {/* <!--== End Product Quick Wishlist Modal ==--> */}

        {/* <!--== Start Product Quick Add Cart Modal ==--> */}
        <aside class="product-action-modal modal fade" id="action-CartAddModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="product-action-view-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </button>
                            <div class="modal-action-messages">
                                <i class="fa fa-check-square-o"></i> Added to cart successfully!
                            </div>
                            <div class="modal-action-product">
                                <div class="thumb">
                                    <img src="assets/images/shop/modal1.jpg" alt="Organic Food Juice" width="466" height="320"/>
                                </div>
                                <h4 class="product-name"><a href="shop-single-product.html">CRAS NEQUE METUS</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        {/* <!--== End Product Quick Add Cart Modal ==--> */}

        {/* <!--== Start Product Quick Add Cart Modal ==--> */}
        <aside class="product-action-modal modal fade" id="action-CompareModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="product-action-view-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </button>
                            <div class="modal-action-messages">
                                <i class="fa fa-check-square-o"></i> Added to compare successfully!
                            </div>
                            <div class="modal-action-product">
                                <div class="thumb">
                                    <img src="assets/images/shop/modal1.jpg" alt="Organic Food Juice" width="466" height="320"/>
                                </div>
                                <h4 class="product-name"><a href="shop-single-product.html">CRAS NEQUE METUS</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        {/* <!--== End Product Quick Add Cart Modal ==--> */}

        {/* <!--== Start Sidebar Cart Menu ==--> */}
        <aside class="sidebar-cart-modal offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithCartSidebar">
            <div class="offcanvas-header">
                <button type="button" class="btn-close cart-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
            </div>
            <div class="sidebar-cart-inner offcanvas-body">
                <div class="sidebar-cart-content">
                    <div class="sidebar-cart-all">
                        <div class="cart-header">
                            <h3>Shopping Cart</h3>
                            <div class="close-style-wrap">
                                <span class="close-style close-style-width-1 cart-close"></span>
                            </div>
                        </div>
                        <div class="cart-content cart-content-padding">
                            <ul>
                                <li class="single-product-cart">
                                    <div class="cart-img">
                                        <a href="shop-single-product.html"><img src="assets/images/shop/s3.jpg" alt="Image" width="70" height="67"/></a>
                                    </div>
                                    <div class="cart-title">
                                        <h4><a href="shop-single-product.html">Game Triger Finger New</a></h4>
                                        <span> 1 × <span class="price"> $12.00 </span></span>
                                    </div>
                                    <div class="cart-delete">
                                        <a href="#/"><i class="pe-7s-trash icons"></i></a>
                                    </div>
                                </li>
                                <li class="single-product-cart">
                                    <div class="cart-img">
                                        <a href="shop-single-product.html"><img src="assets/images/shop/s4.jpg" alt="Image" width="70" height="67"/></a>
                                    </div>
                                    <div class="cart-title">
                                        <h4><a href="shop-single-product.html">Android Smart Watch XAD0</a></h4>
                                        <span> 1 × <span class="price"> $59.90 </span></span>
                                    </div>
                                    <div class="cart-delete">
                                        <a href="#/"><i class="pe-7s-trash icons"></i></a>
                                    </div>
                                </li>
                            </ul>
                            <div class="cart-total">
                                <h4>Subtotal: <span>$71.90</span></h4>
                            </div>
                            <div class="cart-checkout-btn">
                                <a class="cart-btn" href="shop-cart.html">view cart</a>
                                <a class="checkout-btn" href="shop-checkout.html">checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        {/* <!--== End Sidebar Cart Menu ==--> */}

        {/* <!--== Start Aside Search Menu ==--> */}
        <aside class="aside-search-box-wrapper offcanvas offcanvas-top" data-bs-scroll="true" tabindex="-1" id="AsideOffcanvasSearch">
            <div class="offcanvas-header">
                <h5 class="d-none" id="offcanvasTopLabel">Aside Search</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
            </div>
            <div class="offcanvas-body">
                <div class="container pt--0 pb--0">
                    <div class="search-box-form-wrap">
                        <div class="search-note">
                            <p>Start typing and press Enter to search</p>
                        </div>
                        <form action="#" method="post">
                            <div class="search-form position-relative">
                                <label for="search-input" class="visually-hidden">Search</label>
                                <input id="search-input" type="search" class="form-control" placeholder="Search entire store…"/>
                                <button class="search-button" type="button"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
        {/* <!--== End Aside Search Menu ==--> */}

        {/* <!--== Start Side Menu ==--> */}
        <aside class="aside-side-menu-wrapper off-canvas-area offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions">
            <div class="sidemenu-top">
                <div class="header-top-info">
                    <a href="shop.html"><span>World Wide Completely </span>Free Returns and Free Shipping</a>
                </div>
                <div class="header-info-dropdown">
                    <button type="button" class="btn-info dropdown-toggle" id="dropdownLang2" data-bs-toggle="dropdown" aria-expanded="false">English</button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownLang2">
                        <li class="dropdown-item active">English</li>
                        <li class="dropdown-item">Français</li>
                    </ul>
                </div>
                <div class="header-info-dropdown">
                    <button type="button" class="btn-info dropdown-toggle" id="dropdownCurrency2" data-bs-toggle="dropdown" aria-expanded="false">USD</button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownCurrency2">
                        <li class="dropdown-item active">USD</li>
                        <li class="dropdown-item">EUR</li>
                    </ul>
                </div>
            </div>
            <div class="offcanvas-header" data-bs-dismiss="offcanvas">
                <h5>Menu</h5>
                <button type="button" class="btn-close">×</button>
            </div>
            <div class="offcanvas-body">
                {/* <!-- Start Mobile Menu Wrapper --> */}
                <div class="res-mobile-menu">
                    <nav id="offcanvasNav" class="offcanvas-menu">
                        <ul>
                            <li><a href="javascript:void(0)">Home</a>
                                <ul>
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="index-two.html">Home Two</a></li>
                                    <li><a href="index-three.html">Home Three</a></li>
                                    <li><a href="index-four.html">Home Four</a></li>
                                    <li><a href="index-five.html">Home Five</a></li>
                                    <li><a href="index-six.html">Home Six</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Shop</a>
                                <ul>
                                    <li><a href="javascript:void(0)">Shop Layout</a>
                                        <ul>
                                            <li><a href="shop.html">Shop 3 Column</a></li>
                                            <li><a href="shop-four-columns.html">Shop 4 Column</a></li>
                                            <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                            <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Single Product</a>
                                        <ul>
                                            <li><a href="shop-single-product.html">Single Product Normal</a></li>
                                            <li><a href="shop-single-product-variable.html">Single Product Variable</a></li>
                                            <li><a href="shop-single-product-group.html">Single Product Group</a></li>
                                            <li><a href="shop-single-product-affiliate.html">Single Product Affiliate</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)">Others Pages</a>
                                        <ul>
                                            <li><a href="shop-cart.html">Shopping Cart</a></li>
                                            <li><a href="shop-checkout.html">Checkout</a></li>
                                            <li><a href="shop-wishlist.html">Wishlist</a></li>
                                            <li><a href="shop-compare.html">Compare</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Pages</a>
                                <ul>
                                    <li><a href="about-us.html">About</a></li>
                                    <li><a href="account.html">Account</a></li>
                                    <li><a href="login-register.html">Login/Register</a></li>
                                    <li><a href="page-not-found.html">Page Not Found</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Blog Grid</a></li>
                                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                    <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                    <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                            <li class="vmenu-menu-item"><a href="javascript:void(0)">All Departments</a>
                                <ul class="vmenu-content">
                                    <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm1.png" alt="Icon"/></span> Headphone</a></li>
                                    <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm2.png" alt="Icon"/></span> Video Game</a></li>
                                    <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm3.png" alt="Icon"/></span> Protable Speakers</a></li>
                                    <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm4.png" alt="Icon"/></span> Digital Camera</a></li>
                                    <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm5.png" alt="Icon"/></span> Gadgets</a></li>
                                    <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm6.png" alt="Icon"/></span> Home Appliances</a></li>
                                    <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm7.png" alt="Icon"/></span> Audio Record</a></li>
                                    <li class="vmenu-item"><a href="shop.html"> <span class="icon"><img src="assets/images/icons/vm8.png" alt="Icon"/></span> Computer/Laptop</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- End Mobile Menu Wrapper --> */}
            </div>
        </aside>
        {/* <!--== Start Side Menu ==--> */}

    </div>
    {/* <!--== Wrapper End ==--> */}

    {/* <!-- JS Vendor, Plugins & Activation Script Files --> */}

    {/* <!-- Vendors JS --> */}
    <script src="assets/js/vendor/modernizr-3.11.7.min.js"></script>
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/vendor/jquery-migrate-3.3.2.min.js"></script>
    <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>

    {/* <!-- Plugins JS --> */}
    <script src="assets/js/plugins/swiper-bundle.min.js"></script>
    <script src="assets/js/plugins/fancybox.min.js"></script>
    <script src="assets/js/plugins/jquery.nice-select.min.js"></script>
    <script src="assets/js/plugins/jquery.countdown.min.js"></script>
    <script src="assets/js/plugins/isotope.pkgd.min.js"></script>

    {/* <!-- Custom Main JS --> */}
    <script src="assets/js/main.js"></script>

</body>
</div>
  )
}
export default Body;