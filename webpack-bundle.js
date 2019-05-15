!function(e){var s={};function i(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=s,i.d=function(e,s,a){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)i.d(a,t,function(s){return e[s]}.bind(null,t));return a},i.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="",i(i.s=9)}([function(e,s){e.exports="images/markus-spiske-666905-unsplash_w_1400.jpg"},function(e,s){function i(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}s.install=function(e){e||(e={}),i()&&navigator.serviceWorker.register("sw.js",{})},s.applyUpdate=function(e,s){},s.update=function(){i()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()})}},function(e,s){e.exports="fonts/libre-baskerville-v5-latin-regular.woff"},function(e,s){e.exports="fonts/libre-baskerville-v5-latin-regular.woff2"},function(e,s,i){e.exports='<!doctype html> <html lang=en> <head> <meta charset=UTF-8> <title>tris webpack boilerplate 📦</title> <meta name=viewport content="width=device-width,initial-scale=1"> <meta name=Description content="A simple yet thorough webpack starter boilerplate for static websites that achieves high performance and cover all best practices."> <meta property=og:title content="tris webpack boilerplate"> <meta property=og:type content=website> <meta property=og:url content=https://github.com/tr1s/tris-webpack-boilerplate> <meta property=og:image content=https://i.imgur.com/lxRBpeb.jpg> <meta property=og:image:alt content="A blue package, symbolizing what webpack does."> <meta property=og:description content="A simple yet thorough webpack starter boilerplate for static websites that achieves high performance and cover all best practices."> <meta name=twitter:card content=summary> <meta name=twitter:creator content=@triscodes> <meta name=theme-color content=#2c638f> <meta name=msapplication-navbutton-color content=#2c638f> <meta name=apple-mobile-web-app-status-bar-style content=black-translucent> <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel=stylesheet> <link rel=stylesheet href=https://use.fontawesome.com/releases/v5.8.1/css/all.css integrity=sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf crossorigin=anonymous> <style>.side-nav-visible{background-color:rgba(0,0,0,.6);pointer-events:auto!important}.side-nav-visible .side-nav-container{transition:transform .33s cubic-bezier(0,0,.3,1);transform:translateX(0)!important}</style> </head> <body> \x3c!--[if lte IE 9]>\r\n    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>\r\n  <![endif]--\x3e <a href=#top id=to-top style=opacity:0;pointer-events:none class=visible> <i class=material-icons> expand_less </i> <header> <div class=header-container> <div id=top> <a href=#top> <h1>LB</h1> </a> <nav> <a href=#featured>Featured Projects</a> <a href=#gallery>Portfolio</a> <a href=#skills>Skills</a> </nav> <button class="js-menu-show header__menu-toggle material-icons">menu</button> </div> </div> <aside class=side-nav> <nav class=side-nav-container style=display:none> <div class=header> <button class="js-menu-hide side-nav__hide material-icons">close</button> </div> <a href=#> <h1>Beskriving 1</h1> </a> <a href=#> <h1>Uppgift 1</h1> </a> <a href=#> <h1>Beskrivning 2</h1> </a> </nav> </aside> </header> <main id=index> <div class=background> <div></div> </div> <section id=frontpage> <div class=container> <figure class=round-img> <picture> <img sizes="(max-width: 600px) 150px, (max-width: 1800px) 12vw, 450px" srcset="images/Ov9VQB2_w_150.png 150w, images/Ov9VQB2_w_235.png 235w, images/Ov9VQB2_w_303.png 303w, images/Ov9VQB2_w_358.png 358w, images/Ov9VQB2_w_414.png 414w, images/Ov9VQB2_w_450.png 450w" src='+i(5)+' alt="Headshot picture of Leo Burén"> </picture> <h1>Leo Burén</h1> </figure> <section> <div> <h1>Hey, I\'m Kevin.</h1> <p>I\'m a product designer & engineer with skills and experiences that allow me to take ideas from concept to mock to prototype to production.</p> <p>Formerly AR & VR at Google Daydream, design at Google Lens, product at BayRu. Computer science and creative writing at Stanford University.</p> <button class="btn btn-primary">get in touch</button> </div> <nav> <a href=# aria-label="Send me an email"><i class="fas fa-envelope-square"></i></a> <a href=# aria-label="My twitter profile"><i class="fab fa-twitter-square"></i></a> <a href=# aria-label="My LinkedIn profile"><i class="fab fa-linkedin"></i></a> <a href=https://www.facebook.com/leo.buren aria-label="My Facebook profile"><i class="fab fa-facebook"></i></a> </nav> </section> </div> </section> <nav> <a href=# aria-label="Send me an email"><i class="fas fa-envelope-square"></i></a> <a href=# aria-label="My twitter profile"><i class="fab fa-twitter-square"></i></a> <a href=# aria-label="My LinkedIn profile"><i class="fab fa-linkedin"></i></a> <a href=https://www.facebook.com/leo.buren aria-label="My Facebook profile"><i class="fab fa-facebook"></i></a> </nav> <h1><span>Featured projects</span></h1> <section id=featured class=featured-content> <div class=featured-content__container> <a href=# class=featured-content__container__link aria-label="Read the case study"> <figure class=featured-content__container__link__figure> <noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" srcset="./images/markus-spiske-666905-unsplash_w_200.jpg 200w, ./images/markus-spiske-666905-unsplash_w_391.jpg 391w, ./images/markus-spiske-666905-unsplash_w_531.jpg 531w, ./images/markus-spiske-666905-unsplash_w_672.jpg 672w, ./images/markus-spiske-666905-unsplash_w_792.jpg 792w, ./images/markus-spiske-666905-unsplash_w_904.jpg 904w, ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w, ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w, ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" src='+i(0)+' alt=""> </picture> </noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" data-srcset="\r\n                  ./images/markus-spiske-666905-unsplash_w_200.jpg 200w,\r\n                  ./images/markus-spiske-666905-unsplash_w_391.jpg 391w,\r\n                  ./images/markus-spiske-666905-unsplash_w_531.jpg 531w,\r\n                  ./images/markus-spiske-666905-unsplash_w_672.jpg 672w,\r\n                  ./images/markus-spiske-666905-unsplash_w_792.jpg 792w,\r\n                  ./images/markus-spiske-666905-unsplash_w_904.jpg 904w,\r\n                  ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w,\r\n                  ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w,\r\n                  ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" data-src=./images/markus-spiske-666905-unsplash_w_1400.jpg alt=""> </picture> <p class=featured-content__container__link__figure__date>2016 - 2018</p> <ul class=featured-content__container__link__figure__tag-list> <li class=featured-content__container__link__figure__tag-list__tag>HTML</li> <li class=featured-content__container__link__figure__tag-list__tag>HTML</li> <li class=featured-content__container__link__figure__tag-list__tag>HTML</li> <li class=featured-content__container__link__figure__tag-list__tag>HTML</li> </ul> <div class=featured-content__container__link__figure__container> <i class="featured-content__container__link__figure__container__icon fas fa-baby-carriage"></i> <h1 class=featured-content__container__link__figure__container__title>Daydream</h1> </div> </figure> </a> <div class=featured-content__container__container> <article class=featured-content__container__container__article> <h1 class=featured-content__container__container__article__title>Daydream Labs</h1> <h2 class=featured-content__container__container__article__role>Product Designer & Engineer</h2> <p class=featured-content__container__container__article__content>Daydream Labs is an innovation-driven team at Google that builds prototypes to explore and evaluate use cases and product ideas in VR and AR.</p> <button class="btn btn-primary">case study</button> </article> </div> </div> <div class=featured-content__container> <a href=# class=featured-content__container__link aria-label="Read the case study"> <figure class=featured-content__container__link__figure> <noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" srcset="./images/markus-spiske-666905-unsplash_w_200.jpg 200w, ./images/markus-spiske-666905-unsplash_w_391.jpg 391w, ./images/markus-spiske-666905-unsplash_w_531.jpg 531w, ./images/markus-spiske-666905-unsplash_w_672.jpg 672w, ./images/markus-spiske-666905-unsplash_w_792.jpg 792w, ./images/markus-spiske-666905-unsplash_w_904.jpg 904w, ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w, ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w, ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" src='+i(0)+' alt=""> </picture> </noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" data-srcset="\r\n                    ./images/markus-spiske-666905-unsplash_w_200.jpg 200w,\r\n                    ./images/markus-spiske-666905-unsplash_w_391.jpg 391w,\r\n                    ./images/markus-spiske-666905-unsplash_w_531.jpg 531w,\r\n                    ./images/markus-spiske-666905-unsplash_w_672.jpg 672w,\r\n                    ./images/markus-spiske-666905-unsplash_w_792.jpg 792w,\r\n                    ./images/markus-spiske-666905-unsplash_w_904.jpg 904w,\r\n                    ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w,\r\n                    ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w,\r\n                    ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" data-src=./images/markus-spiske-666905-unsplash_w_1400.jpg alt=""> </picture> <p class=featured-content__container__link__figure__date>2016 - 2018</p> <ul class=featured-content__container__link__figure__tag-list> <li class=featured-content__container__link__figure__tag-list__tag>HTML</li> <li class=featured-content__container__link__figure__tag-list__tag>HTML</li> <li class=featured-content__container__link__figure__tag-list__tag>HTML</li> <li class=featured-content__container__link__figure__tag-list__tag>HTML</li> </ul> <div class=featured-content__container__link__figure__container> <i class="featured-content__container__link__figure__container__icon fas fa-baby-carriage"></i> <h1 class=featured-content__container__link__figure__container__title>Daydream</h1> </div> </figure> </a> <div class=featured-content__container__container> <article class=featured-content__container__container__article> <h1 class=featured-content__container__container__article__title>Daydream Labs</h1> <h2 class=featured-content__container__container__article__role>Product Designer & Engineer</h2> <p class=featured-content__container__container__article__content>Daydream Labs is an innovation-driven team at Google that builds prototypes to explore and evaluate use cases and product ideas in VR and AR.</p> <button class="btn btn-primary">case study</button> </article> </div> </div> </section> <h1>Portfolio</h1> <section id=gallery> <div class=grid> <div class=grid__container> <div class=unfolding-card--project> <figure> <noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" srcset="./images/markus-spiske-666905-unsplash_w_200.jpg 200w, ./images/markus-spiske-666905-unsplash_w_391.jpg 391w, ./images/markus-spiske-666905-unsplash_w_531.jpg 531w, ./images/markus-spiske-666905-unsplash_w_672.jpg 672w, ./images/markus-spiske-666905-unsplash_w_792.jpg 792w, ./images/markus-spiske-666905-unsplash_w_904.jpg 904w, ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w, ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w, ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" src='+i(0)+' alt=""> </picture> </noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" data-srcset="\r\n                      ./images/markus-spiske-666905-unsplash_w_200.jpg 200w,\r\n                      ./images/markus-spiske-666905-unsplash_w_391.jpg 391w,\r\n                      ./images/markus-spiske-666905-unsplash_w_531.jpg 531w,\r\n                      ./images/markus-spiske-666905-unsplash_w_672.jpg 672w,\r\n                      ./images/markus-spiske-666905-unsplash_w_792.jpg 792w,\r\n                      ./images/markus-spiske-666905-unsplash_w_904.jpg 904w,\r\n                      ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w,\r\n                      ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w,\r\n                      ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" data-src=./images/markus-spiske-666905-unsplash_w_1400.jpg alt=""> </picture> </figure> <a href=#> <div> <h1>Kasvi</h1> <p>Product design, ubiquitous computing</p> </div> </a> <div class=mobile> <h1>Kasvi</h1> <p>Product design</p> </div> <div class=tag--project> <i class="fas fa-project-diagram"></i> <h1>Project</h1> </div> <ul class=unfolding-list> <li class=unfolding-list__item> <ul> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> </ul> </li> <li class=unfolding-list__item> <p>Virgin America is making flying fun again. In 2014, the airline also decided to reinvent the digital travel experience.</p> <p>After an exhaustive search for the right partner, the company chose Work & Co to design and engineer a new digital platform that could respond to modern travel needs and behaviors.</p> </li> <li class=unfolding-list__item> <button class="btn btn-lowkey">Launch website</button> </li> </ul> </div> <div class=unfolding-card--illustration> <figure> <noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" srcset="./images/markus-spiske-666905-unsplash_w_200.jpg 200w, ./images/markus-spiske-666905-unsplash_w_391.jpg 391w, ./images/markus-spiske-666905-unsplash_w_531.jpg 531w, ./images/markus-spiske-666905-unsplash_w_672.jpg 672w, ./images/markus-spiske-666905-unsplash_w_792.jpg 792w, ./images/markus-spiske-666905-unsplash_w_904.jpg 904w, ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w, ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w, ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" src='+i(0)+' alt=""> </picture> </noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" data-srcset="\r\n                      ./images/markus-spiske-666905-unsplash_w_200.jpg 200w,\r\n                      ./images/markus-spiske-666905-unsplash_w_391.jpg 391w,\r\n                      ./images/markus-spiske-666905-unsplash_w_531.jpg 531w,\r\n                      ./images/markus-spiske-666905-unsplash_w_672.jpg 672w,\r\n                      ./images/markus-spiske-666905-unsplash_w_792.jpg 792w,\r\n                      ./images/markus-spiske-666905-unsplash_w_904.jpg 904w,\r\n                      ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w,\r\n                      ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w,\r\n                      ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" data-src=./images/markus-spiske-666905-unsplash_w_1400.jpg alt=""> </picture> </figure> <a href=#> <div> <h1>Kasvi</h1> <p>Product design, ubiquitous computing</p> </div> </a> <div class=mobile> <h1>Kasvi</h1> <p>Product design, ubiquitous computing</p> </div> <div class=tag--illustration> <i class="fas fa-paint-brush"></i> <h1>Illustration</h1> </div> <ul class=unfolding-list> <li class=unfolding-list__item> <ul> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> </ul> </li> <li class=unfolding-list__item> <p>Virgin America is making flying fun again. In 2014, the airline also decided to reinvent the digital travel experience.</p> <p>After an exhaustive search for the right partner, the company chose Work & Co to design and engineer a new digital platform that could respond to modern travel needs and behaviors.</p> </li> <li class=unfolding-list__item> <button class="btn btn-lowkey">View illustration</button> </li> </ul> </div> </div> <div class=grid__container> <div class=unfolding-card--project> <figure> <noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" srcset="./images/markus-spiske-666905-unsplash_w_200.jpg 200w, ./images/markus-spiske-666905-unsplash_w_391.jpg 391w, ./images/markus-spiske-666905-unsplash_w_531.jpg 531w, ./images/markus-spiske-666905-unsplash_w_672.jpg 672w, ./images/markus-spiske-666905-unsplash_w_792.jpg 792w, ./images/markus-spiske-666905-unsplash_w_904.jpg 904w, ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w, ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w, ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" src='+i(0)+' alt=""> </picture> </noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" data-srcset="\r\n                        ./images/markus-spiske-666905-unsplash_w_200.jpg 200w,\r\n                        ./images/markus-spiske-666905-unsplash_w_391.jpg 391w,\r\n                        ./images/markus-spiske-666905-unsplash_w_531.jpg 531w,\r\n                        ./images/markus-spiske-666905-unsplash_w_672.jpg 672w,\r\n                        ./images/markus-spiske-666905-unsplash_w_792.jpg 792w,\r\n                        ./images/markus-spiske-666905-unsplash_w_904.jpg 904w,\r\n                        ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w,\r\n                        ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w,\r\n                        ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" data-src=./images/markus-spiske-666905-unsplash_w_1400.jpg alt=""> </picture> </figure> <a href=#> <div> <h1>Kasvi</h1> <p>Product design, ubiquitous computing</p> </div> </a> <div class=mobile> <h1>Kasvi</h1> <p>Product design</p> </div> <div class=tag--project> <i class="fas fa-project-diagram"></i> <h1>Project</h1> </div> <ul class=unfolding-list> <li class=unfolding-list__item> <ul> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> </ul> </li> <li class=unfolding-list__item> <p>Virgin America is making flying fun again. In 2014, the airline also decided to reinvent the digital travel experience.</p> <p>After an exhaustive search for the right partner, the company chose Work & Co to design and engineer a new digital platform that could respond to modern travel needs and behaviors.</p> </li> <li class=unfolding-list__item> <button class="btn btn-lowkey">Launch website</button> </li> </ul> </div> <div class=unfolding-card--illustration> <figure> <noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" srcset="./images/markus-spiske-666905-unsplash_w_200.jpg 200w, ./images/markus-spiske-666905-unsplash_w_391.jpg 391w, ./images/markus-spiske-666905-unsplash_w_531.jpg 531w, ./images/markus-spiske-666905-unsplash_w_672.jpg 672w, ./images/markus-spiske-666905-unsplash_w_792.jpg 792w, ./images/markus-spiske-666905-unsplash_w_904.jpg 904w, ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w, ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w, ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" src='+i(0)+' alt=""> </picture> </noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" data-srcset="\r\n                        ./images/markus-spiske-666905-unsplash_w_200.jpg 200w,\r\n                        ./images/markus-spiske-666905-unsplash_w_391.jpg 391w,\r\n                        ./images/markus-spiske-666905-unsplash_w_531.jpg 531w,\r\n                        ./images/markus-spiske-666905-unsplash_w_672.jpg 672w,\r\n                        ./images/markus-spiske-666905-unsplash_w_792.jpg 792w,\r\n                        ./images/markus-spiske-666905-unsplash_w_904.jpg 904w,\r\n                        ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w,\r\n                        ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w,\r\n                        ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" data-src=./images/markus-spiske-666905-unsplash_w_1400.jpg alt=""> </picture> </figure> <a href=#> <div> <h1>Kasvi</h1> <p>Product design, ubiquitous computing</p> </div> </a> <div class=mobile> <h1>Kasvi</h1> <p>Product design, ubiquitous computing</p> </div> <div class=tag--illustration> <i class="fas fa-paint-brush"></i> <h1>Illustration</h1> </div> <ul class=unfolding-list> <li class=unfolding-list__item> <ul> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> </ul> </li> <li class=unfolding-list__item> <p>Virgin America is making flying fun again. In 2014, the airline also decided to reinvent the digital travel experience.</p> <p>After an exhaustive search for the right partner, the company chose Work & Co to design and engineer a new digital platform that could respond to modern travel needs and behaviors.</p> </li> <li class=unfolding-list__item> <button class="btn btn-lowkey">View illustration</button> </li> </ul> </div> </div> <div class=grid__container> <div class=unfolding-card--project> <figure> <noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" srcset="./images/markus-spiske-666905-unsplash_w_200.jpg 200w, ./images/markus-spiske-666905-unsplash_w_391.jpg 391w, ./images/markus-spiske-666905-unsplash_w_531.jpg 531w, ./images/markus-spiske-666905-unsplash_w_672.jpg 672w, ./images/markus-spiske-666905-unsplash_w_792.jpg 792w, ./images/markus-spiske-666905-unsplash_w_904.jpg 904w, ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w, ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w, ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" src='+i(0)+' alt=""> </picture> </noscript> <picture class=featured-content__container__link__figure__picture> <img class="featured-content__container__link__figure__picture__image lazy" sizes="(max-width: 500px) 30vw, 50vw" data-srcset="\r\n                          ./images/markus-spiske-666905-unsplash_w_200.jpg 200w,\r\n                          ./images/markus-spiske-666905-unsplash_w_391.jpg 391w,\r\n                          ./images/markus-spiske-666905-unsplash_w_531.jpg 531w,\r\n                          ./images/markus-spiske-666905-unsplash_w_672.jpg 672w,\r\n                          ./images/markus-spiske-666905-unsplash_w_792.jpg 792w,\r\n                          ./images/markus-spiske-666905-unsplash_w_904.jpg 904w,\r\n                          ./images/markus-spiske-666905-unsplash_w_1010.jpg 1010w,\r\n                          ./images/markus-spiske-666905-unsplash_w_1134.jpg 1134w,\r\n                          ./images/markus-spiske-666905-unsplash_w_1400.jpg 1400w" data-src=./images/markus-spiske-666905-unsplash_w_1400.jpg alt=""> </picture> </figure> <a href=#> <div> <h1>Kasvi</h1> <p>Product design, ubiquitous computing</p> </div> </a> <div class=mobile> <h1>Kasvi</h1> <p>Product design</p> </div> <div class=tag--project> <i class="fas fa-project-diagram"></i> <h1>Project</h1> </div> <ul class=unfolding-list> <li class=unfolding-list__item> <ul> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> <li>HTML</li> </ul> </li> <li class=unfolding-list__item> <p>Virgin America is making flying fun again. In 2014, the airline also decided to reinvent the digital travel experience.</p> <p>After an exhaustive search for the right partner, the company chose Work & Co to design and engineer a new digital platform that could respond to modern travel needs and behaviors.</p> </li> <li class=unfolding-list__item> <button class="btn btn-lowkey">Launch website</button> </li> </ul> </div> </div> </div> <h1>Skills</h1> </section> <section id=skills> <div class="list container"> <h1 class=list__title>Software development is hard. Managing projects is hard. Working remotely is hard. Here are some things I\'m good at, to help ease the pain.</h1> <div class=list__container> <article class=list__container__article> <h1 class=list__container__article__title>Problem Solving</h1> <p class=list__container__article__content>I\'m can take vague problems and requirements and break them down into steps and solutions.</p> </article> <article class=list__container__article> <h1 class=list__container__article__title>Problem Solving</h1> <p class=list__container__article__content>I\'m can take vague problems and requirements and break them down into steps and solutions.</p> </article> <article class=list__container__article> <h1 class=list__container__article__title>Problem Solving</h1> <p class=list__container__article__content>I\'m can take vague problems and requirements and break them down into steps and solutions.</p> </article> <article class=list__container__article> <h1 class=list__container__article__title>Problem Solving</h1> <p class=list__container__article__content>I\'m can take vague problems and requirements and break them down into steps and solutions.</p> </article> </div> </div> </section> </main> <footer></footer> </a></body> </html>'},function(e,s){e.exports="images/Ov9VQB2_w_450.png"},function(e,s,i){},function(e,s,i){(function(s){var i="Expected a function",a=NaN,t="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,_=/^0o[0-7]+$/i,o=parseInt,c="object"==typeof s&&s&&s.Object===Object&&s,u="object"==typeof self&&self&&self.Object===Object&&self,p=c||u||Function("return this")(),g=Object.prototype.toString,m=Math.max,d=Math.min,f=function(){return p.Date.now()};function h(e,s,a){var t,n,r,l,_,o,c=0,u=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function h(s){var i=t,a=n;return t=n=void 0,c=s,l=e.apply(a,i)}function v(e){var i=e-o;return void 0===o||i>=s||i<0||p&&e-c>=r}function b(){var e=f();if(v(e))return j(e);_=setTimeout(b,function(e){var i=s-(e-o);return p?d(i,r-(e-c)):i}(e))}function j(e){return _=void 0,g&&t?h(e):(t=n=void 0,l)}function y(){var e=f(),i=v(e);if(t=arguments,n=this,o=e,i){if(void 0===_)return function(e){return c=e,_=setTimeout(b,s),u?h(e):l}(o);if(p)return _=setTimeout(b,s),h(o)}return void 0===_&&(_=setTimeout(b,s)),l}return s=k(s)||0,w(a)&&(u=!!a.leading,r=(p="maxWait"in a)?m(k(a.maxWait)||0,s):r,g="trailing"in a?!!a.trailing:g),y.cancel=function(){void 0!==_&&clearTimeout(_),c=0,t=o=n=_=void 0},y.flush=function(){return void 0===_?l:j(f())},y}function w(e){var s=typeof e;return!!e&&("object"==s||"function"==s)}function k(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&g.call(e)==t}(e))return a;if(w(e)){var s="function"==typeof e.valueOf?e.valueOf():e;e=w(s)?s+"":s}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var i=l.test(e);return i||_.test(e)?o(e.slice(2),i?2:8):r.test(e)?a:+e}e.exports=function(e,s,a){var t=!0,n=!0;if("function"!=typeof e)throw new TypeError(i);return w(a)&&(t="leading"in a?!!a.leading:t,n="trailing"in a?!!a.trailing:n),h(e,s,{leading:t,maxWait:s,trailing:n})}}).call(this,i(8))},function(e,s){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,s,i){"use strict";i.r(s);i(2),i(3),i(4),i(6);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function t(e,s){for(var i=0;i<s.length;i++){var a=s[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}var r=function(){function e(){var s=this;!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e);var i=document.querySelectorAll(".lazy"),a={rootMargin:"300px 0px",threshold:e.THRESHOLD};this._count=i.length,this._onIntersection=this._onIntersection.bind(this),this._observer=new IntersectionObserver(this._onIntersection,a),i.forEach(function(i){i.classList.contains(e.HANDLED_CLASS)||s._observer.observe(i)})}return n(e,null,[{key:"init",value:function(){this._instance&&this._instance._disconnect(),this._count=0,this._instance=new e}},{key:"SUPPORTS_INTERSECTION_OBSERVER",get:function(){return"IntersectionObserver"in window}},{key:"HANDLED_CLASS",get:function(){return"js-lazy-image--handled"}},{key:"THRESHOLD",get:function(){return.01}}]),n(e,[{key:"_disconnect",value:function(){this._observer&&this._observer.disconnect()}},{key:"_onIntersection",value:function(e){var s=this;e.forEach(function(e){e.intersectionRatio<=0||(s._count--,s._observer.unobserve(e.target),s._applyImage(e.target))}),this._count>0||this._observer.disconnect()}},{key:"_applyImage",value:function(s){if(console.log("💩"),"VIDEO"===s.tagName)s.querySelectorAll("source").forEach(function(e){return e.src=e.dataset.src}),s.load(),s.classList.add(e.HANDLED_CLASS);else if("IMG"===s.tagName){if(void 0===s.dataset.src||"undefined"===a(s.dataset.src)||!1===s.dataset.src||""===s.dataset.src)return;void 0!==s.dataset.srcset&&"undefined"!==a(s.dataset.srcset)&&!1!==s.dataset.srcset&&""!==s.dataset.srcset&&(s.srcset=s.dataset.srcset),s.src=s.dataset.src,s.classList.add(e.HANDLED_CLASS)}else"IFRAME"===s.tagName&&(s.src=s.dataset.src,s.classList.add(e.HANDLED_CLASS))}}]),e}(),l={throttle:i(7)};document.querySelectorAll('a[href^="#"]').forEach(function(e){return e.addEventListener("click",function(s){s.preventDefault(),window.scroll({behavior:"smooth",left:0,top:document.querySelector(e.getAttribute("href")).offsetTop-186})})}),function(){for(var e,s=function(){},i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],a=i.length,t=window.console=window.console||{};a--;)t[e=i[a]]||(t[e]=s)}();var _=document.querySelector(".js-menu-show"),o=document.querySelector(".js-menu-hide"),c=document.querySelector("aside"),u=document.querySelector(".side-nav-container");_.addEventListener("click",function(){return c.classList.add("side-nav-visible")}),o.addEventListener("click",function(){return c.classList.remove("side-nav-visible")}),c.addEventListener("click",function(e){return e.target==u?null:c.classList.remove("side-nav-visible")});var p=document.querySelector(".header-container"),g=document.querySelector("#to-top"),m=p.scrollHeight-44;window.addEventListener("scroll",l.throttle(function(){console.log("poopa");var e=window.pageYOffset+document.body.offsetHeight,s=document.body.scrollHeight/1.5;window.pageYOffset>=m?p.classList.add("sticky"):p.classList.remove("sticky"),e<=s?g.classList.add("visible"):g.classList.remove("visible")},100),{capture:!0,passive:!0}),document.addEventListener("DOMContentLoaded",function(){u.style.display="flex",new r}),i(1).install()}]);
//# sourceMappingURL=webpack-bundle.js.map