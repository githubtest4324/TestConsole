var fc = require('../compare-folders/filecompare')

var progress = console.log;
function sleep (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
debugger;
var t1 = new Date();
var x = fc.compareSync('/media/data/f/temp/00/filecompare/3/.gitignore1', '/media/data/f/temp/00/filecompare/3/.gitignore2', 16, progress);
//var x = fc.compareSync('/media/data/f/temp/00/filecompare/1/gcov-4.8', '/media/data/f/temp/00/filecompare/1/gcov-4.8.2', null, progress);
//var x = fc.compareSync('/home/liviu/.kde/share/apps/kio_magnet/UFC.180.Werdum.vs.Hunt.HDTV.x264-KOENiG[rarbg]/UFC.180.Werdum.vs.Hunt.HDTV.x264-KOENiG.mp4',
//        '/media/data/f/temp/00/filecompare/4/UFC.180.Werdum.vs.Hunt.HDTV.x264-KOENiG.mp4', 4096, progress);
console.log(x);


var t2 = new Date();
var time = (t2.getTime() - t1.getTime()) / 1000
console.log(time + " seconds");