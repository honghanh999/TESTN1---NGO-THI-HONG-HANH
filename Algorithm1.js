function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let f = () => {
    let d = new Date()
    return d.getMilliseconds() % 2 === 0
};

async function retry(callback, time, maxTimes) {
    for (let i = 0; i < maxTimes.max; i++) {
        console.log(callback())
        await sleep(time)
    }
}

retry(f, 1000, { max: 4 })
