import path from 'path';

function paths(){
    return path.resolve.apply(path, arguments);
}
for(let name of ['src', 'dist']){
    paths[name] = paths.bind(null, name);
}

export {
    paths
};