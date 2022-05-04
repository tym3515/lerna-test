


function MyPromise(executorFn) {
    this.obj = {
        state: 'pending'//'pending' // pending | fulfilled | rejected
    }
    this.thenCallback = null
    this.thenResult = null
    this.catchCallback = null
    this.cathcError = null

    const this_ = this

    this.objProxy = new Proxy(this.obj, {
        set: function (target, prop, value) {
            console.log('proxy set');
            if (prop !== 'state') {
                return;
            }
            if (value === 'fulfilled') {
                this_.thenCallback(this_.thenResult)
            } else if (value === 'rejected') {
                this_.catchCallback(this_.cathcError)
            }
        }
    })

    this.resolve = function (result) {
        this_.thenResult = result
        this_.objProxy.state = 'fulfilled'
        console.log('this_.obj: ', this_.obj);
    }
    this.reject = function (error) {
        this_.cathcError = error
        this_.objProxy.state = 'rejected'
    }

    this.then = function (thenCallback) {
        this_.thenCallback = thenCallback
        return this_
    }
    this.catch = function (catchCallback) {
        this_.catchCallback = catchCallback
        return this_
    }
    executorFn(this.resolve, this.reject)
}


// new MyPromise((resolve, reject)=>{

//     setTimeout(() => {
//         // resolve('done')
//         reject('error')
//     }, 500);

// }).then(result => {
//     console.log('result: ', result);
// }).catch(error =>{
//     console.log('error', error);
// })
