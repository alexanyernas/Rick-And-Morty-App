<template>
    <div class="col">
        <div class="card p-3 text-light bg-dark" style="width: 18rem;">
            <img :src="data.image" class="card-img-top" :alt="data.name">
            <div class="card-body">
                <h5 class="card-title">{{ data.name }}</h5>
                <p class="card-text">
                    <i 
                        v-if="data.status !== 'unknown'"
                        class="bi bi-circle-fill me-1" 
                        :style=" data.status === 'Alive' ? { 'color': '#7ACBCD' } : { 'color': '#FFC0CB' }">
                    </i>
                    <i
                        v-else
                        class="bi bi-question-lg"
                    >
                    </i>
                    {{ data.status }}
                </p>
            </div>
            <div class="accordion accordion-flush" :id="`accordionFlushExample${ data.id }`">
                
                <div class="accordion-item">
                    <h2 class="accordion-header" :id="`flush-headingOne${ data.id }`">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#flush-collapseOne${ data.id }`" aria-expanded="false" :aria-controls="`flush-collapseOne${ data.id }`">
                            <i class="bi bi-info-circle me-2"></i>
                            Specie
                        </button>
                    </h2>
                    <div :id="`flush-collapseOne${ data.id }`" class="accordion-collapse collapse" :aria-labelledby="`flush-headingOne${ data.id }`" :data-bs-parent="`#accordionFlushExample${ data.id }`">
                        <div class="accordion-body text-dark">
                            {{ data.species }}
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" :id="`flush-headingTwo${ data.id }`">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#flush-collapseTwo${ data.id }`" aria-expanded="false" :aria-controls="`flush-collapseTwo${ data.id }`">
                            <i class="bi bi-gender-ambiguous me-2"></i>
                            Gender
                        </button>
                    </h2>
                    <div :id="`flush-collapseTwo${ data.id }`" class="accordion-collapse collapse" :aria-labelledby="`flush-headingTwo${ data.id }`" :data-bs-parent="`#accordionFlushExample${ data.id }`">
                        <div class="accordion-body text-dark">
                            {{ data.gender }}
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" :id="`flush-headingThree${ data.id }`">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#flush-collapseThree${ data.id }`" aria-expanded="false" :aria-controls="`flush-collapseThree${ data.id }`">
                            <i class="bi bi-house-door me-2"></i>
                            Origin
                        </button>
                    </h2>
                    <div :id="`flush-collapseThree${ data.id }`" class="accordion-collapse collapse" :aria-labelledby="`flush-headingThree${ data.id }`" :data-bs-parent="`#accordionFlushExample${ data.id }`">
                        <div class="accordion-body text-dark">
                            {{ data.origin.name }}
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" :id="`flush-headingFour${ data.id }`">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#flush-collapseFour${ data.id }`" aria-expanded="false" :aria-controls="`flush-collapseFour${ data.id }`">
                            <i class="bi bi-geo me-2"></i>
                            Location
                        </button>
                    </h2>
                    <div :id="`flush-collapseFour${ data.id }`" class="accordion-collapse collapse" :aria-labelledby="`flush-headingFour${ data.id }`" :data-bs-parent="`#accordionFlushExample${ data.id }`">
                        <div class="accordion-body text-dark">
                            {{ data.location.name }}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        data: Object
    }
}
</script>