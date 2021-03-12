<template>
  <!-- 게시판 목록 -->
  <div id="board_list">
    <h3>Board</h3>
    <select name="" id="changeSize" @change="changeSize">
      <option value="5">Limit 5</option>
      <option value="10" selected>Limit 10</option>
      <option value="20">Limit 20</option>
    </select>
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Title</th>
          <th>Author</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='post in posts' :key="post.id">
          <td class="postid">{{post.id}}</td>
          <td @click="getDetail" style="cursor: pointer;">{{post.title}}</td>
          <td>{{post.author}}</td>
          <td>{{post.date}}</td>
        </tr>
      </tbody>
    </table>
    <div class="board_list_btn">
      <button @click="prev">Previous</button> | {{currentPage + 1}}/{{maxPage}} | <button
        v-on:click="next">Next</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Board',
    data() {
      return {
        posts: [],
        currentPage: 0,
        sort: "desc",
        size: 10,
        maxPage: 0
      }
    },
    created() {
      this.getBoardPaging();
    },
    methods: {
      prev: function () {
        if (this.currentPage != 0) {
          this.currentPage--;
          this.getBoardPaging();
        }
      },
      next: function () {
        if (this.currentPage < this.maxPage - 1) {
          this.currentPage++;
          this.getBoardPaging();
        }
      },
      getDetail: function () {
        console.log(this._self)
        
      },
      changeSize: function () {
        var newSize = Number(document.querySelector('#changeSize').value);
        console.log(newSize);
        this.size = newSize;
        this.currentPage = 0;
        this.getBoardPaging();
      },
      rendar: function (data = {}) {
        this.posts = [];
        data.forEach(element => {
          this.posts.push({
            id: element.id,
            title: element.title,
            author: element.author,
            date: element.date
          })
        });
      },
      getBoard: function (no) {
        fetch('http://localhost:8080/api/board/' + no)
          .then(response => response.json())
          .then((json) => {
            var area = document.querySelector('#board_detail');
            area.textContent = json;
          }).catch((error) => {
            console.log(error)
          })
      },
      getBoardPaging: function () {
        var params = {
          page: this.currentPage,
          size: this.size,
          sort: this.sort
        }
        var esc = encodeURIComponent;
        var query = Object.keys(params)
          .map(k => esc(k) + '=' + esc(params[k])).join('&');

        // axios
        this.$http.get('http://localhost:8080/api/board?' + query)
          .then((result) => {
            // console.log(result)
            // console.log(result.data)

            var data = result.data;
            this.maxPage = data.totalPages;
            this.rendar(data.content)
          }).catch((error) => {
            console.log(error)
          })

        /*  fetch('http://localhost:8080/api/board?' + query)
          .then(response => response.json())
          .then((json)=>{
              this.maxPage = json.totalPages; // json.last = true 
              var data = json.content;
              this.rendar(data)
              console.log(json)
          }).catch((error)=>{
              console.log(error)
          })*/
      },
    }
  }
</script>
