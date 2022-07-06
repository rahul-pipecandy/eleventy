// const fs = require('fs');

// global.maxFilesInFlight = 5000; // Set this value to some number safeish for your system
// var origRead = fs.readFile;
// var origWrite = fs.writeFile;

// var activeCount = 0;
// var pending = [];

// var wrapCallback = function(cb){
//     return function(){
//         activeCount--;
//         cb.apply(this,Array.prototype.slice.call(arguments));
//         if (activeCount < global.maxFilesInFlight && pending.length){
//             console.log("Processing Pending read/write");
//             pending.shift()();
//         }
//     };
// };
// fs.readFile = function(){
//     var args = Array.prototype.slice.call(arguments);
//     if (activeCount < global.maxFilesInFlight){
//         if (args[1] instanceof Function){
//             args[1] = wrapCallback(args[1]);
//         } else if (args[2] instanceof Function) {
//             args[2] = wrapCallback(args[2]);
//         }
//         activeCount++;
//         origRead.apply(fs,args);
//     } else {
//         console.log("Delaying read:",args[0]);
//         pending.push(function(){
//             fs.readFile.apply(fs,args);
//         });
//     }
// };

// fs.writeFile = function(){
//     var args = Array.prototype.slice.call(arguments);
//     if (activeCount < global.maxFilesInFlight){
//         if (args[1] instanceof Function){
//             args[1] = wrapCallback(args[1]);
//         } else if (args[2] instanceof Function) {
//             args[2] = wrapCallback(args[2]);
//         }
//         activeCount++;
//         origWrite.apply(fs,args);
//     } else {
//         console.log("Delaying write:",args[0]);
//         pending.push(function(){
//             fs.writeFile.apply(fs,args);
//         });
//     }
// };

module.exports = function (eleventyConfig) {
    const markdownIt = require('markdown-it');
    // const markdownInEmoji = require('markdown-it-emoji');
    let config = {
        html: true,
        break: true,
        linkify: true
    };
    eleventyConfig.setLibrary("md", markdownIt(config));
    // eleventyConfig.addPassthroughCopy("./src/css/");
    // eleventyConfig.addWatchTarget("./src/css/");
    // // eleventyConfig.amendLibrary("md", mdLib => mdLib.enable("code"));
    return {
        dir: {
            input: "_includes",
            // input: "post",
            output: "public",
        },
    };
};