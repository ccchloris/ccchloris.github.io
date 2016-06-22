<!-- 目前一个页面上只能有一个 tinymce -->
<template>
  <textarea></textarea>
</template>

<script type="text/babel">
  export default {
    props: {
      height: {
        type: Number,
        default: 300
      }
    },
    methods: {
      /**
       * 设置编辑器的内容
       * @param {String} content
       */
      setContent (content) {
        return this.$_promise.then(editor => editor.setContent(content))
      },

      /**
       * 获取编辑器的内容
       * @returns {Promise.<String>}
       */
      getContent () {
        return this.$_promise.then(editor => editor.getContent())
      }
    },
    created () {
      this.$_promise = new Promise(resolve => {
        this.$_resolve = resolve
      })
    },
    ready () {
      tinymce.init({
        selector: 'textarea',
        height: this.height,
        theme: 'modern',
        plugins: [
          'advlist autolink lists link image charmap print preview hr anchor pagebreak',
          'searchreplace visualblocks visualchars code fullscreen',
          'insertdatetime media nonbreaking save table contextmenu directionality',
          'template paste textcolor colorpicker textpattern imagetools'
        ],
        toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        toolbar2: 'print preview media | forecolor backcolor',
        image_advtab: true,
        templates: [
          {
            title: '点击购买',
            content: '<div class="buy-it"><div class="info"><div class="value">￥63.00</div><div class="likes">2345人喜欢</div></div><div><a href="填写链接" target="_blank">查看详情</a></div>'
          }
        ]
      }).then(() => {
        this.$_resolve(tinymce.activeEditor)
      })
    },
    beforeDestroy () {
      this.$_promise.then(() => {
        tinymce.remove()
      })
    }
  }
</script>
