import blog from "@/api/blog";

export default {
  name: "Create",
  data() {
    return {
      title: "",
      description: "",
      content: "",
      atIndex: false
    };
  },
  methods: {
    onCreate() {
      blog
        .createBlog({
          title: this.title,
          content: this.content,
          description: this.description,
          atIndex: this.atIndex
        })
        .then(res => {
          this.$message.success(res.msg);
          this.$router.push({ path: `/detail/${res.data.id}` });
        });
    },
    tips(value) {
      if (value.length > 30) {
        alert("超过最大字数限制");
        console.log(value);
      }
    }
  }
};
