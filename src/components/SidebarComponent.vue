<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <div class="px-3 py-2"></div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      variant: "dark"
    };
  }
};
</script>>