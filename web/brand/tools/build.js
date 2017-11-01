import del from 'del';
import webpack from 'webpack';
import config from './config';


async function build(){
    await del(['.tmp', 'dist/*', '!dist/.git'], {dot: true});
    await new Promise(resolve => {
        webpack(config).run((error, stats) => {
            error && console.log(error);
            console.log(stats.toString({
                colors: true
            }));
            resolve();
        });
    });
};

export default build;