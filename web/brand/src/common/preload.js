let retry = 0;

export default (images) => {
    return new Promise((resolve, reject) => {
        let queues = [];
        let count = images.length || 0;
        let completed = 0;
        if(images.length){
            for(let i = 0;i < images.length;i++){
                queues[i] = new Image();
                load(images[i]);
            }

            function load(url){
                for(let i = 0;i < queues.length;i++){
                    let queue = queues[i];
                    queue.onload = () => {
                        validate(queue);
                    };
                    queue.onerror = () => {
                        validate(queue);
                    };
                    // queue.retry = 0;
                    queue.src = url;

                }
            }
            function validate(queue){
                if(!queue.complete){
                    reject();
                }else if(typeof queue.naturalWidth !== 'undefined' && queue.naturalWidth === 0){
                    reject();
                }else{
                    completed++;
                    if(completed === count){
                        resolve();
                    }
                }
                // if(retry && retry > queue.retry){
                //     queue.retry++;
                //     setTimeout(function(){
                //         validate(queue);
                //     },200);
                // }
            }
        }else{
            resolve();
        }
    });
};