Vue.component("modal", {
    template: `
    <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nobis enim illum fugit
                            atque? Nisi ipsa, deleniti quaerat aspernatur beatae consectetur iure et a optio porro
                            veritatis fugiat accusamus veniam.</p>
                    </div>
                </div>
                <button class="modal-close is-large" @click="$emit('close-modal')" aria-label="close"></button>
    </div>
    `,
    data() {
        return {
            isVisible: false,
        }
    },

})

new Vue({
    el: "#root",
    data: {
        isVisible: false
    },
    methods: {
        showModal() {
            this.isVisible = !this.isVisible;
        }
    }
})