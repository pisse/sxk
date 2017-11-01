import {logger} from './utils';

function run(module, options){
    const task = typeof module.default === 'undefined' ? module : module.default;
    const start = new Date().getTime();
    logger(`Starting '${task.name}${options ? ` (${options})` : ''}'...`);
    return task(options).then(resolution => {
        const end = new Date().getTime();
        logger(`Finished '${task.name}${options ? ` (${options})` : ''}' after ${end - start} ms`);
        return resolution;
    });
}

if(require.main === module && process.argv.length > 2){
    delete require.cache[__filename];
    let module = require(`./${process.argv[2]}`).default;
    run(module).catch(error => {
        console.error(error.stack);
        process.exit(1);
    });
}

export default run;