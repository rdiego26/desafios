"use strict";

const path = require("path"),
	stringUtils = require(path.resolve("src/util/strings.js"));

const text = "Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.";
const result = stringUtils.chunkString(text, 40);

console.log(result);