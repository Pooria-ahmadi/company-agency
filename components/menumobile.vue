<template>
    <div>
        <nav class="navbar is-transparent is-hidden-desktop">
      <div class="navbar-brand is-flex-direction-row-reverse box py-0">
        <a class="is-hidden-desktop" href="/">
          <img src="logo.png" alt="logoagency" class="fifty-px-logo-agency">
        </a>
        <div class="navbar-burger" :class="active ? 'is-active' : ''" @click="showMobilemenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu pr-6 is-hidden-desktop" :class="active ? 'is-active' : ''">
        <ul>
          <li class="my-4">
            <a class="has-text-black has-text-weight-bold" href="#">
              <i class="fa-solid fa-plane-departure pl-1"></i>
              پرواز
            </a>
          </li>
          <li class="my-4">
            <a class="has-text-black has-text-weight-bold" href="#">
              <i class="fa-solid fa-train pl-1"></i>
              قطار
            </a>
          </li>
          <li class="my-4">
            <a class="has-text-black has-text-weight-bold" href="#">
              <i class="fa-solid fa-hotel pl-1"></i>
              هتل
            </a>
          </li>
          <li class="my-4">
            <a class="has-text-black has-text-weight-bold" href="#">
              <i class="fa-solid fa-umbrella-beach pl-1"></i>
              تور
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: '',
      active: false,
    }
  },

  methods: {
    showMobilemenu() {
      //this.navbarBurgers
      console.log('is-active');
      this.active = !this.active;
    }
  }
}


</script>

