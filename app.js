Vue.component("punchbag", {
    template: `<!--Bag Image-->
    <div>
        <div id="bag" v-bind:class="{ burst: ended}"></div>

            <!--Bag Health-->
                <div id="bag-health">
                    <div v-bind:style="{width: health + '%'}"></div>
                </div>

            <!--Bag controls-->
                <div id="controls">
                    <button @click ="punch" v-show="!ended">Punch</button>
                    <button @click="restart" >Restart</button>
                </div>
    </div>
    `,
    data() {
        return {
            health: 100,
            ended: false,
        }
    },

    methods: {
        punch() {
            //reduce the health by 10
            this.health -= 10

            if (this.health <= 0) {
                this.ended = true
            }
            console.log(this.health)
        },
        restart() {
            // restore the health to 100
            this.health = 100
            this.ended = false
            console.log(this.health)
        }
    },
    computed: {

    }

})

let vapp = new Vue({
    el: "#vapp"
})