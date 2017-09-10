new Vue({
    el: '#app',
    data: {
        word: '',
        words: ["hello"],
    },

    methods:{
        addWord: function () {
            this.words.push(this.word);
            this.word ='';
        }
    }
});