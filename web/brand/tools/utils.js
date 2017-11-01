import path from 'path';

Date.prototype.format = function(){
    return this.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, `$1`)
};

function logger(...message){
    const time = new Date().format();
    console.log(`[${time}]`, message.join());
}

function paths(){
    return path.resolve.apply(path, arguments);
}

for(let name of ['src', 'dist']){
    paths[name] = paths.bind(null, name);
}

export {
    paths,
    logger
};