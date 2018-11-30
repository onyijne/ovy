<template>
    <div class="tabs-container">
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }"  v-bind:key="tab.href">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>
      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
   name: 'Tabs',
   data () {
    return { tabs: [] }
   },
   created () {
    this.tabs = this.$children
   },
   methods: {
    selectTab (selectedTab) {
      this.tabs.forEach (tab => {
        tab.isActive = (tab.name === selectedTab.name)
      })
    }
  }
}
</script>
