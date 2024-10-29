import axios from 'axios';

// 何回か実行してみると、上から順に必ずしもthen節の中身が実行されないことがわかる

axios.get('https://yahoo.co.jp').then(() => console.log('done1'));

axios.get('https://swapi.dev/api/people').then(() => console.log('done2'));

axios.get('https://swapi.dev/api/people/1').then(() => console.log('done3'));
