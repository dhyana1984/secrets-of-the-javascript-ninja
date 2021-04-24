


//synchronized to call some APIs, the progress will be blocked
callAPI("data/getAmount")
    .then(url => callAPI(url[0].missionsUrl))
    .then(missions => callAPI(missions[0].detailsUrl))
    .then(mission => callAPI(mission))
    .then(res => {
        //some real logic with res
    })
    .catch(error => print("An error has occured"))

//Above is the same as getMission
const getMission = async (url) => {
    try {
        const urls = await callAPI(url)
        const missions = await callAPI(urls[0].missionsUrl)
        const mission = await callAPI(missions[0].detailsUrl)
        const res = await callAPI(mission)
        //some real logic with res

    } catch (error) {
        print("An error has occured")
    }
}

await getMission("data/getAmount")

// Call multiple API parallelly, this will block the progress, it depends on the longest time the api takes.
const getData = async (url1, url2, url3) => {
    /*
        url1, url2, url3 these 3 API will be called in the same time,
        and res1 will be assigned to the result of callAPI(url1), the same as res2, res3
        Please note that Promise.all return a array, so we have to use de-structure assignment
        Also, these result don't depend on each other. If no, we need to use async/await to get result step by step
    */
    const [res1, res2, res3] = await Promise.all([callAPI(url1), callAPI(url2), callAPI(url3)])

    //Real logic with res1/res2/res3
}

await getData("data/getAmount", "data/getOrders", "data/getCustomers")

/*
    Above is very similar as this, but obviously, url1,url2,url3 are not called at the SAME time, 
    there are some millseconds gap, the effect is so small that we can ignore that.
    But Promise.all is the best practice if you need call Call multiple API parallelly
*/
const getData1 = async (url1, url2, url3) => {
    const promiseRes1 = callAPI(url1)
    const promiseRes2 = callAPI(url2)
    const promiseRes3 = callAPI(url3)

    const res1 = await promiseRes1
    const res2 = await promiseRes2
    const res3 = await promiseRes3

    //Real logic with res1/res2/res3
}

