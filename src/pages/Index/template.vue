<template>
  <div id="index">
    <section class="blog-posts">
      <router-link
        class="item"
        v-for="blog in blogs"
        :to="`/detail/${blog.id}`"
        :key="blog.id"
      >
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username" />
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>
          {{ blog.title }} <span>{{ friendlyDate(blog.createdAt) }}</span>
        </h3>
        <p>
          {{ blog.description }}
        </p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :current-page="page"
        @current-change="onPageChange"
        :page-size="20"
        :total="total"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./template.less" scoped lang="less"></style>
