<script>
export default {
  props: {
    type: {
      required: false,
      type: String,
      default: "border",
      validator: value => {
        return ["border", "grow"].indexOf(value) !== -1;
      }
    }
  }
};
</script>
