<template>
  <div id="root">
        <p>{{originPrice}}</p>
        <p>{{dublePrice}}</p>
        <p>{{triplePrice}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    ...mapGetters(['originPrice', 'dublePrice', 'triplePrice']),
}
</script>
