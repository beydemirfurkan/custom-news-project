<template>
  <header class="bg-light">
    <!-- Navbar Top -->
    <div class="topbar d-none d-sm-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-7">
            <div class="list-unstyled topbar-right">
              <ul class="topbar-link">
                <li>
                  <NuxtLink to="/iletisim">İletişim</NuxtLink>
                </li>
              </ul>
              <ul class="topbar-sosmed">
                <li v-for="social in socialLinks" :key="social.name">
                  <a :href="social.url"><i :class="social.icon"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Navbar Top -->

    <!-- Navbar menu -->
    <div class="navigation-wrap navigation-shadow bg-white">
      <nav class="navbar navbar-hover navbar-expand-lg navbar-soft">
        <div class="container">
          <figure class="mb-0 mx-auto">
            <NuxtLink to="/">
              <img src="/images/placeholder/logo.jpg" alt="Logo" class="img-fluid logo" />
            </NuxtLink>
          </figure>
          <div class="collapse navbar-collapse justify-content-between" id="main_nav99">
            <ul class="navbar-nav ml-auto">
              <li v-for="menuItem in menuItems" :key="menuItem?.name" class="nav-item">
                <NuxtLink :to="menuItem?.path" class="nav-link">{{ menuItem?.name }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <!-- End Navbar menu -->

    <!-- Navbar sidebar menu -->
    <div id="modal_aside_right" class="modal fixed-left fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-aside" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="widget__form-search-bar">
              <div class="row no-gutters">
                <div class="col">
                  <input class="form-control border-secondary border-right-0 rounded-0" value="" placeholder="Search">
                </div>
                <div class="col-auto">
                  <button class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right">
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <nav class="list-group list-group-flush">
              <ul class="navbar-nav">
                <li v-for="sidebarItem in sidebarMenuItems" :key="sidebarItem.name" class="nav-item">
                  <NuxtLink :to="sidebarItem.path" class="nav-link text-dark">{{ sidebarItem.name }}</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- End Navbar sidebar menu -->
  </header>
</template>
  
<script setup>
const socialLinks = [
  { name: 'Facebook', icon: 'fa fa-facebook', url: '#' },
  { name: 'Twitter', icon: 'fa fa-twitter', url: '#' },
  { name: 'Instagram', icon: 'fa fa-instagram', url: '#' }
];

const menuItems = [
  { name: 'Anasayfa', path: '/' },
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'İletişim', path: '/iletisim' }
];

const sidebarMenuItems = [
  { name: 'Anasayfa', path: '/' },
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'İletişim', path: '/iletisim' }
];
</script>
  
<style scoped></style>
  