<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm" id="mainNav">
    <div class="container px-5">
        <router-link class="navbar-brand fw-bold" to="/">NEMO</router-link>
        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation">
          Menu
          <i class="bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li class="nav-item">
              <router-link class="nav-link me-lg-3" to="/howtouse">How to Use</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link me-lg-3" to="/contribute">Contribute</router-link>
            </li>
          </ul>
      </div>
    </div>
  </nav>
</template>
