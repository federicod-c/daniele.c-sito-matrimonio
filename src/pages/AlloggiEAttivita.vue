<template>
  <q-page class="row justify-around">
    <q-card class="col-md-6 col-xs-12 q-pt-lg" flat>
      <q-card-section>
        <p class="">
          Ecco alcune soluzioni per chi arriva da lontano ed è alla ricerca di
          un luogo dove soggiornare. Le strutture di seguito indicate vi hanno
          dedicato una tariffa speciale in quanto nostri invitati.
        </p>
      </q-card-section>

      <q-card-section>
        <p>
          Per chi volesse visitare la città natale della sposa e vantarsi di
          aver soggiornato nello stesso albergo dello sposo, ma, soprattutto,
          per i più intrepidi che non temono di affrontare il viaggio in auto
          dopo averci dato dentro con i festeggiamenti:
        </p>

        <q-img src="foto/alloggi/nani.jpg" :ratio="4/3">
          <div class="absolute-bottom text-subtitle2 text-center">
            <p> Hotel dei Nani
              Viale del Lavoro, 34
              Jesi (AN) – 60035
              <br/>
              <a href="http://www.hoteldeinani.it/" style="color: white">http://www.hoteldeinani.it/</a>
            </p>
          </div>
        </q-img>
        <q-img src="https://media.tenor.com/images/511b4f6334317b3d0e820f78f60aa4a9/tenor.gif" :ratio="4/3" style="width: 150px; margin-top: 5px;margin-left: auto; margin-right: auto; text-align: center; display: block;"/>

      </q-card-section>

      <q-card-section>
        <p>
          Per chi sa già che non andrà troppo lontano dopo la festa, a furia di ancheggiare sulle note di tormentoni estivi e di trenini improvvisati:
        </p>
        <q-img src="foto/alloggi/uliveto.jpg" :ratio="4/3">
          <div class="absolute-bottom text-subtitle2 text-center">
            <p>
              L’Antico Uliveto
              Via Palazzo Rosso, 1
              Potenza Picena (MC)- 62018
              Contatto: Sara – 3914674329
              <br/>
              <a href=" http://www.anticouliveto.com/index.php/it/" style="color: white"> http://www.anticouliveto.com/index.php/it/</a>
            </p>
          </div>
        </q-img>
        <q-img src="https://67.media.tumblr.com/tumblr_ldysh5OeiS1qeno54o1_500.gif" :ratio="4/3" style="width: 150px; margin-top: 5px;margin-left: auto; margin-right: auto; text-align: center; display: block;"/>

      </q-card-section>


      <q-card-section>
        <p>
          Per chi gli inguaribili centristi, amanti dei compromessi e delle soluzioni a metà strada:
        </p>
        <q-img src="foto/alloggi/miramare.png" :ratio="4/3">
          <div class="absolute-bottom text-subtitle2 text-center">
            <p>
              Hotel Miramare
              Viale Giacomo Matteotti, 1
              Civitanova Marche (MC) – 62012
              <br/>
              <a href="https://www.miramarecivitanova.com/" style="color: white">https://www.miramarecivitanova.com/</a>
            </p>
          </div>
        </q-img>
        <q-img src="https://giffetteria.it/archivio/129935339769b.gif" :ratio="4/3" style="width: 150px; margin-top: 5px;margin-left: auto; margin-right: auto; text-align: center; display: block;"/>


      </q-card-section>


    </q-card>

  </q-page>
</template>

<script>
export default {
  name: "AlloggiEAttivita"
}
</script>

<style lang="sass" scoped>
.flex-break
  flex: 1 0 100% !important

.row
  .flex-break
    height: 0 !important

.column
  .flex-break
    width: 0 !important
</style>
