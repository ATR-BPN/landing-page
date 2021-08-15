<template>
  <aside id="integrity" class="text-center bg-gradient-primary-to-secondary">
    <div class="container px-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-xl-12">
          <div class="h2 fs-1 text-white mb-4">
            Kantor Pertanahan Kota Bandung<br />Berintegritas
          </div>
          <b-row>
            <b-col
              v-for="item in integrities"
              :key="item.title"
              sm="12"
              md="4"
              lg="4"
              class="my-2"
            >
              <b-card
                no-body
                class="overflow-hidden shadow-sm"
                style="max-width: 540px; min-height: 250px"
              >
                <b-row no-gutters>
                  <b-col class="px-2 py-3">
                    <b-card-body :title="item.title">
                      <b-card-text>
                        {{ item.description }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
    integrities: [
      {
        title: 'Melayani',
        description:
          'Melayani dengan kejelasan prosedur, biaya, dan ketepatan waktu. Bersikap sopan, ramah, cermat, dan teliti serta peduli terhadap lingkungan pelayanan',
      },
      {
        title: 'Profesional',
        description:
          'Bekerja sama, bekerja cerdas, tuntas dan memberikan nilai tambah. Senantiasa mengembangkan diri untuk peningkatan kompetensi dan Pendidikan',
      },
      {
        title: 'Terpercaya',
        description:
          'Bekerja dengan Integritas, dapat dipercaya dan dapat diandalkan, menjaga martabat serta tidak melakukan hal tercela. Patuh dan taat pada peraturan yang ditetapkan sesuai tugas dan tanggung jawab yang diberikan',
      },
    ],
  }),
}
</script>

<style></style>
