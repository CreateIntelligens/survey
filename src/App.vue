<script setup lang="ts"></script>
<template>
  <div>
    <nav>
      <router-link to="/survey-creator">survey-creator</router-link> |
      <router-link to="/survey-dashboard">survey-dashboard</router-link> |
      <router-link to="/quiz">quiz</router-link>
    </nav>
  </div>
  <router-view />
</template>

