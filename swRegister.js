const isServiceWorkerAvailable = () => "serviceWorker" in navigator.serviceWorker
async function swRegister(){
    if( !isServiceWorkerAvailable ) return

    try {
        await navigator.serviceWorker.register("sw.js")
    } catch (error) {
        console.warn(error)
    }
}

swRegister()
