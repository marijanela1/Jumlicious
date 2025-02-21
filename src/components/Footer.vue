<template>
  <div class="container">
    <div class="cont">
      <a href="https://www.flaticon.com/free-icons/parsley" title="parsley icons"
        >Parsley icons created by Icongeek26 - Flaticon</a
      >
      <a href="https://www.flaticon.com/free-icons/red-chili-pepper" title="red chili pepper icons"
        >Red chili pepper icons created by smashingstocks - Flaticon</a
      >
      <a href="https://www.flaticon.com/free-icons/user" title="user icons"
        >User icons created by Freepik - Flaticon</a
      >
      <a href="https://www.flaticon.com/free-icons/search" title="search icons"
        >Search icons created by Royyan Wijaya - Flaticon</a
      >

      <a href="https://www.flaticon.com/free-icons/rating" title="rating icons"
        >Rating icons created by IconBaandar - Flaticon</a
      >
    </div>
    <div>
      <img src="../assets/logo/logo.png" alt="" width="200px" />
    </div>
    <div>
      <h2>Petra Sušac</h2>
      <h2>Marta Bulić</h2>
      <h2>Marijanela Pranjić</h2>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  background-color: var(--primary);
  height: 300px;
  margin-top: 400px;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr;
}
.container a {
  display: flex;
  margin: var(--spacing-lg);
  text-decoration: none;
  color: var(--app-bg-lighter);
}
.container h2 {
  color: var(--app-bg-lighter);
}
</style>
