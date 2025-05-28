<script setup lang="ts">
</script>

<template>
  <div class="container">
    <CsArrowSeparator lenght="medium" class="arrow-separator">
      <template #default>
        <h1>Csodaszarvas Íjászbarlang</h1>
      </template>
    </CsArrowSeparator>
    <div class="intro-container">
      <img class="intro-image" src="/img/single_arrow.jpg" alt="">
      <div class="intro-text">
        <p>
          Buda szívében az egyetlen fedett íjászpálya várja 5 lőállással az érdeklődőket, akik kíváncsiak ennek a sportágnak a kihívásaira. Pályánkon lehetőség van megtanulni az alapokat gyakorlott íjászok által. Haladó íjászoknak lehetőségük van a pálya íjászatban a 18 méteres lőtáv gyakorlására.
        </p>
        <p>
          Legyen szó bármilyen íj típusról, várjuk az érdeklődőket és a sportolni vágyókat. Külön rendezvények lebonyolítására is lehetőséget biztosítunk az egész pálya kibérlése során gyerekeknek és felnőtteknek egyaránt. Mindezt a Móricz Zsigmond körtér-től 3 perc sétára.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-inline-size: 1000px;
  margin-inline: auto;
}

.intro-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  flex-grow: 1;
  justify-content: space-evenly;
  text-align: justify;

  .intro-image {
    max-width: 40%;
  }

  .intro-text {
    max-width: 50%;
  }
}
</style>
