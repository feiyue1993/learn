import axios from '../../src/index';
console.log('test');
axios({
    method: 'get',
    url: '/simple/get',
    params: {
        a: 1,
        b: 2
    }
});

