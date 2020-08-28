<script>
export default {
  name: "ArtisanItem",
  props: {
    artisan: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="stylus" scoped>
.artisan-item {
  .icon {
    width: 80px;
    height: 80px;
    background-color: #404850;
  }
}
</style>
