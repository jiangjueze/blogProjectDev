import blog from "@/api/blog.js";

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    };
  },

  created() {
    console.log(parseInt(this.$route.query.page), "this.$route.query.page");
    this.page = parseInt(this.$route.query.page) || 1;
    blog.getIndexBlogs({ page: this.page }).then(res => {
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page;
      console.log(this.page, "this.page");
    });
  },

  methods: {
    onPageChange(newPage) {
      console.log(newPage, "newPage");
      blog.getIndexBlogs({ page: newPage }).then(res => {
        this.blogs = res.data;
        this.total = res.total;
        this.page = res.page;
        this.$router.push({ path: "/", query: { page: newPage } });
      });
    }
  }
};
