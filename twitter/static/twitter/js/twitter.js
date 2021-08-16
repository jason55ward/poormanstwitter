new Vue({
  el: '#vueStart',
  delimiters: ['${', '}'],
  data: {
    currentSort: 'timestamp',
    currentSortDir: 'desc',
    tweetList: [],
    loading: false,
    message: null,
    newTweet: {'name': null, 'message': null},
  },
  computed: {
    sortedTweets() {
      return this.tweetList
          .sort((a, b) => {
            if (this.currentSortDir === 'asc') {
              return a[this.currentSort] >= b[this.currentSort];
            }
            return a[this.currentSort] <= b[this.currentSort];
          })
    },
  },
  mounted: function () {
    this.getTweetList();
  },
  methods: {
    getTweetList: async function () {
      try {
        const response = await axios.get('/api/tweet/');
        console.log(response.data);
        this.tweetList = response.data;
      } 
      catch (error) {
        console.error(error);
      }
    },
    addTweet: async function () {
      try {
        const response = await axios.post('/api/tweet/', this.newTweet);
        this.getTweetList();
        this.newTweet = {};
      } 
      catch (error) {
        console.error(error);
      }
    },
    sort: function (col) {
      if (this.currentSort == col) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      } 
      else {
        this.currentSort = col;
      } 
    }, 
  }
});