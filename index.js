(async function(){
    impute = await import('./impute.js')
    console.log('https://episphere.github.io/impute/impute.js module loaded')
    
    // testing
    
    txt = await impute.getData()
    //console.log(txt)
    dt = await impute.txt2csv(txt)
    console.log(dt)
    tb = impute.dt2tb(dt)
    console.log(tb)
    document.body.appendChild(tb)
    
})()