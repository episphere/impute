

async function getData(url='https://episphere.github.io/qaqc/iris.csv'){
    let txt = await (await fetch(url)).text()
    return txt
}

function txt2csv(txt){
    let dt = txt.split(/[\n\r]/g).map(x=>x.split(/[,\t]/g))
    return dt
}

function dt2tb(dt){ // generates html table, tb, from data array dt
    let tb = document.createElement('table')
    return tb
}

function table(dt){
    if(typeof(dt)=='string'){ // assume csv
        dt=txt2csv(dt)
    }
    this.dt=dt
    this.createTable=(dt=this.dt)=>dt2tb(dt)
}


export{getData,txt2csv,dt2tb,table}

