import React from "react";

const IMAGES = [
{
    index: 0,
    Img: new URL('./bowser.png', import.meta.url).href
},
{
    index: 1,
    Img: new URL('./donkey-kong.png', import.meta.url).href
},
{
    index: 2,
    Img: new URL('./koopa-troopa.png', import.meta.url).href
},
{
    index: 3,
    Img: new URL('./goomba.png', import.meta.url).href
},
{
    index: 4,
    Img: new URL('./luigi.png', import.meta.url).href
},
{
    index: 5,
    Img: new URL('./mario.png', import.meta.url).href
},
{
    index: 6,
    Img: new URL('./princess-peach.png', import.meta.url).href
},
{
    index: 7,
    Img: new URL('./daisy.png', import.meta.url).href
},
{
    index: 8,
    Img: new URL('./toad.jpg', import.meta.url).href
},
{
    index: 9,
    Img: new URL('./waluigi.png', import.meta.url).href
},
{
    index: 10,
    Img: new URL('./wario.png', import.meta.url).href
},
{
    index: 11,
    Img: new URL('./yoshi.png', import.meta.url).href
},
{
    index: 12,
    Img: new URL('./sonic.png', import.meta.url).href
},
{
    index: 13,
    Img: new URL('./knuckles.png', import.meta.url).href
},
{
    index: 14,
    Img: new URL('./dr-eggman.png', import.meta.url).href
},
{
    index: 15,
    Img: new URL('./tails.png', import.meta.url).href
},
{
    index: 16,
    Img: new URL('./amy-rose.png', import.meta.url).href
},
{
    index: 17,
    Img: new URL('./red.png', import.meta.url).href
},
{
    index: 18,
    Img: new URL('./pig.png', import.meta.url).href
},
{
    index: 19,
    Img: new URL('./matilda.png', import.meta.url).href
},
{
    index: 20,
    Img: new URL('./bomb.png', import.meta.url).href
},
{
    index: 21,
    Img: new URL('./chuck.png', import.meta.url).href
},
{
    index: 22,
    Img: new URL('./pigg.png', import.meta.url).href
},
{
    index: 23,
    Img: new URL('./terence.jpg', import.meta.url).href
},
{
    index: 24,
    Img: new URL('./spangebob.png', import.meta.url).href
},
{
    index: 25,
    Img: new URL('./patrick.png', import.meta.url).href
},
{
    index: 26,
    Img: new URL('./squidward.png', import.meta.url).href
},
{
    index: 27,
    Img: new URL('./krabs.png', import.meta.url).href
},
{
    index: 28,
    Img: new URL('./sandy.png', import.meta.url).href
},
{
    index: 29,
    Img: new URL('./mickey.png', import.meta.url).href
},
{
    index: 30,
    Img: new URL('./minnie.png', import.meta.url).href
},
{
    index: 31,
    Img: new URL('./donald.png', import.meta.url).href
},
{
    index: 32,
    Img: new URL('./daffy.png', import.meta.url).href
},
{
    index: 33,
    Img: new URL('./daisy-duck.png', import.meta.url).href
},
{
    index: 34,
    Img: new URL('./goofy.png', import.meta.url).href
},
{
    index: 35,
    Img: new URL('./pluto.png', import.meta.url).href
},
{
    index: 36,
    Img: new URL('./bugs.png', import.meta.url).href
},
{
    index: 37,
    Img: new URL('./lola.png', import.meta.url).href
},
{
    index: 38,
    Img: new URL('./tweety.png', import.meta.url).href
},
{
    index: 39,
    Img: new URL('./porky.png', import.meta.url).href
},
{
    index: 40,
    Img: new URL('./elmer.png', import.meta.url).href
},
{
    index: 41,
    Img: new URL('./sylvester.png', import.meta.url).href
},
{
    index: 42,
    Img: new URL('./tasmanian.png', import.meta.url).href
},
{
    index: 43,
    Img: new URL('./yosemite.png', import.meta.url).href
},
{
    index: 44,
    Img: new URL('./speedy.png', import.meta.url).href
},
{
    index: 45,
    Img: new URL('./marvin.png', import.meta.url).href
},
{
    index: 46,
    Img: new URL('./popeye.png', import.meta.url).href
},
{
    index: 47,
    Img: new URL('./homer.png', import.meta.url).href
},
{
    index: 48,
    Img: new URL('./bart.png', import.meta.url).href
},
{
    index: 49,
    Img: new URL('./marge.png', import.meta.url).href
},
{
    index: 50,
    Img: new URL('./lisa.png', import.meta.url).href
},
{
    index: 51,
    Img: new URL('./wilma.png', import.meta.url).href
},
{
    index: 52,
    Img: new URL('./barney.png', import.meta.url).href
},
{
    index: 53,
    Img: new URL('./peter.png', import.meta.url).href
},
{
    index: 54,
    Img: new URL('./lois.png', import.meta.url).href
},
{
    index: 55,
    Img: new URL('./meg.png', import.meta.url).href
},
{
    index: 56,
    Img: new URL('./chris.png', import.meta.url).href
},
{
    index: 57,
    Img: new URL('./stevie.png', import.meta.url).href
},
{
    index: 58,
    Img: new URL('./brian.png', import.meta.url).href
},
{
    index: 59,
    Img: new URL('./glen.png', import.meta.url).href
},
{
    index: 60,
    Img: new URL('./winnie.png', import.meta.url).href
},
{
    index: 61,
    Img: new URL('./eeyore.png', import.meta.url).href
},
{
    index: 62,
    Img: new URL('./piglet.png', import.meta.url).href
},
{
    index: 63,
    Img: new URL('./tiger.png', import.meta.url).href
},
{
    index: 64,
    Img: new URL('./pikachu.png', import.meta.url).href
},
{
    index: 65,
    Img: new URL('./bulbasaur.png', import.meta.url).href
},
{
    index: 66,
    Img: new URL('./squirtle.png', import.meta.url).href
},
{
    index: 67,
    Img: new URL('./pink.png', import.meta.url).href
},
{
    index: 68,
    Img: new URL('./tom.png', import.meta.url).href
},
{
    index: 69,
    Img: new URL('./jerry.png', import.meta.url).href
},
{
    index: 70,
    Img: new URL('./dog.png', import.meta.url).href
},
{
    index: 71,
    Img: new URL('./scooby.png', import.meta.url).href
},

]

export default IMAGES;