(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{fa0b:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"q-pa-md"},[n("q-carousel",{attrs:{animated:"",swipeable:"",infinite:"",autoplay:!0,thumbnails:"",height:"75vh",fullscreen:e.fullscreen},on:{"update:fullscreen":function(t){e.fullscreen=t}},scopedSlots:e._u([{key:"control",fn:function(){return[n("q-carousel-control",{attrs:{position:"bottom-right",offset:[18,18]}},[n("q-btn",{attrs:{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:e.fullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(t){e.fullscreen=!e.fullscreen}}})],1)]},proxy:!0}]),model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(15,(function(t){return n("q-carousel-slide",{key:t,attrs:{name:t,"img-src":e.imgs[t]}})})),1)],1)},s=[],o=(n("e6cf"),{name:"Dettagli",data(){return{fullscreen:!1,slide:1,lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",imgs:[]}},created(){let e=[];function t(t){fetch(`https://source.unsplash.com/featured/?nature,water&sig=${t}`).then((t=>{e.push(t.url)}))}for(let n=0;n<25;n++)t(n);this.imgs=e}}),r=o,a=n("2877"),i=n("9989"),c=n("880c"),u=n("62cd"),f=n("32a7"),d=n("9c40"),p=n("eebe"),m=n.n(p),h=Object(a["a"])(r,l,s,!1,null,"61fa2594",null);t["default"]=h.exports;m()(h,"components",{QPage:i["a"],QCarousel:c["a"],QCarouselSlide:u["a"],QCarouselControl:f["a"],QBtn:d["a"]})}}]);