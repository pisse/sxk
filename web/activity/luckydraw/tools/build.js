import del from 'del';
import webpack from 'webpack';
import config from './webpack.config';

del(['.tmp', 'dist/*', '!dist/.git'], {dot: true});

webpack(config).run((error, stats) => {
    error && console.log(error);
    console.log(stats.toString({
        colors: true
    }));
});