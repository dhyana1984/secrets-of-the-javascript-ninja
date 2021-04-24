//synchronized to call some APIs, the progress will be blocked
callAPI("data/getAmount")
    .then(url => callAPI(url[0].missionsUrl))                           // Wait for server response
    .then(missions => callAPI(missions[0].detailsUrl))                  // Wait for server response
    .then(mission => callAPI(mission !== null, "mission obtained!"))    // Wait for server response
    .catch(error => fail("An error has occured"))



// async function receive a generator object
function async(generator) {
    const iterator = generator()

    function handle(iteratorResult) {
        if (iteratorResult.done) { return }

        const iteratorValue = iteratorResult.value

        // All the yield items in generator are promise object
        if (iteratorValue instanceof Promise) {
            /* 
            In fact, this is a iteration like we saw before, 
            the purpose is to traverse the generator
            */
            iteratorValue.then(res => handle(
                iterator.next(res) // Note here, the progress will not be blocked.
            ))
                .catch(err => iterator.throw(err))
        }
    }

    try {
        handle(iterator.next())
    }
    catch (e) { iterator.throw(e) }
}

// All the yield items in generator are promise object
const generator = function* () {
    try {
        // The porogress will jump here to return yield result when get server response
        const urls = yield callAPI("data/urls.json")
        const missions = yield callAPI(urls[0].missionsUrl) //urls is from iterator.next(yield callAPI("data/urls.json")) 
        const result = yield callAPI(missions[0].detailsUrl) // missions is from iterator.next( yield callAPI(urls[0].missionsUrl)) 

        print(result)
        //Some real logic with result
    }
    catch (e) {
        fail("We weren't able to get mission details")
    }
}

async(generator)

