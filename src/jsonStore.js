const subscribeRequest = JSON.stringify({
    "typeid": "malcolm:core/Subscribe:1.0",
    "id": 1,
    "path": ["HELLO","signal"]
})

const unsubscribeRequest = JSON.stringify({
    "typeid": "malcolm:core/Unsubscribe:1.0",
    "id": 1
})

export function getSubRequest(){
    return subscribeRequest
}

export function getUnsubRequest() {
    return unsubscribeRequest
}
