<template>
    <!-- //NOTE - TOWER MODAL -->
    <div class="modal fade" id="goOutModal" tabindex="-1" aria-labelledby="towerModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-body pt-0 px-0">
                    <img src="../assets/img/tower.png" alt="Go Out! image" class="rounded-top">
                    <div class="mx-4">
                        <p class="app-title pb-0 mb-0">Go Out!</p>
                        <div class="d-flex justify-content-center">
                            <a href="https://github.com/MeganHancock/goOut" class="mb-3 mx-2">View Code</a>
                            <!-- TODO ADD LIVE APPLICATION -->
                            <a href="https://github.com/MeganHancock/goOut" class="mb-3 mx-2">View App</a>
                        </div>
                        <p class="app-sub-title mb-2">Go Out is a community event app built using Vue, Express, Node.js,
                            MongoDB, and
                            Mongoose. Users may create events as well as browse local events by category, RSVP to them,
                            and leave
                            comments to interact with other attendees.</p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4">
                        <p class="stack vue rounded-5 p-2 fw-bold">Vue.js</p>
                        <p class="stack express rounded-5 p-2 fw-bold">Express.js</p>
                        <p class="stack node rounded-5 p-2 fw-bold">Node.js</p>
                        <p class="stack mongo rounded-5 p-2 fw-bold">MongoDB</p>
                        <p class="stack mongoose rounded-5 p-2 fw-bold">Mongoose</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- NOTE INSPIRE MODAL -->
    <div class="modal fade" id="inspireModal" tabindex="-1" aria-labelledby="inspireModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-body pt-0 px-0">
                    <img src="../assets/img/inspire.png" alt="inspire image" class="rounded-top">
                    <div class="mx-4">
                        <p class="app-title pb-0 mb-0">Inspire</p>
                        <div class="d-flex justify-content-center">
                            <a href="https://github.com/MeganHancock/inspire" class="mb-3 mx-2">View Code</a>
                            <!-- TODO ADD LIVE APPLICATION -->
                            <a href="" class="mb-3 mx-2">View App</a>
                        </div>
                        <p class="app-sub-title mb-2">Inspire to-do app built using JavaScript and the MVC pattern.
                            Users can
                            create to-dos and store them on an external API. The home page also features random scenic
                            backgrounds, rotating inspiring quotes, live weather, and date and time.</p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4">
                        <p class="stack javascript rounded-5 p-2 fw-bold">JavaScript</p>
                        <p class="stack html rounded-5 p-2 fw-bold">HTML5</p>
                        <p class="stack css rounded-5 p-2 fw-bold">CSS3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- NOTE JOT MODAL -->
    <div class="modal fade" id="jotModal" tabindex="-1" aria-labelledby="towerModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-body pt-0 px-0">
                    <img src="../assets/img/jot.png" alt="Jot image" class="rounded-top">
                    <div class="mx-4">
                        <p class="app-title pb-0 mb-0">Jot</p>
                        <div class="d-flex justify-content-center">
                            <a href="https://github.com/MeganHancock/jot" class="mb-3 mx-2">View Code</a>
                            <!-- TODO ADD LIVE APPLICATION -->
                            <a href="https://meganhancock.github.io/jot/" class="mb-3 mx-2">View App</a>
                        </div>
                        <p class="app-sub-title mb-2">Jot is note taking app built using JavaScript, and it was the
                            first full application I built using the MVC pattern. Users can create, edit, and save notes
                            to local storage. </p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4">
                        <p class="stack javascript rounded-5 p-2 fw-bold">JavaScript</p>
                        <p class="stack html rounded-5 p-2 fw-bold">HTML5</p>
                        <p class="stack css rounded-5 p-2 fw-bold">CSS3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- NOTE FLOWER FRENZY MODAL -->
    <div class="modal fade" id="flowerFrenzyModal" tabindex="-1" aria-labelledby="towerModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-body pt-0 px-0">
                    <img src="../assets/img/flowerfrenzy.png" alt="Flower Frenzy image" class="rounded-top">
                    <div class="mx-4">
                        <p class="app-title pb-0 mb-0">Flower Frenzy</p>
                        <div class="d-flex justify-content-center">
                            <a href="https://github.com/MeganHancock/flower_frenzy" class="mb-3 mx-2">View Code</a>
                            <!-- TODO ADD LIVE APPLICATION -->
                            <a href="https://meganhancock.github.io/flower_frenzy/" class="mb-3 mx-2">View App</a>
                        </div>
                        <p class="app-sub-title mb-2">Flower Frenzy is a basic clicker-game built using basic HTML, CSS
                            and JavaScript. The only thing remarkable about this app (aside from how darn cute it is) is
                            how far my skill level has come since it's completion.</p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4">
                        <p class="stack javascript rounded-5 p-2 fw-bold">JavaScript</p>
                        <p class="stack html rounded-5 p-2 fw-bold">HTML5</p>
                        <p class="stack css rounded-5 p-2 fw-bold">CSS3</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
export default {
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
img {
    aspect-ratio: 2/1;
    max-width: 100%;
}

.app-title {
    color: var(--darkest);
    // text-shadow: 3px 3px var(--light-accent);
    font-size: 4vh;
    text-align: center;
}

.app-sub-title {
    color: var(--darkest);
    font-size: 2.2vh;
}

a {
    color: var(--darkest);
    text-shadow: 3px 3px var(--light-accent);
    font-size: 2.5vh;

}

a:hover {
    text-shadow: 3px 3px yellow;

}

.stack {
    color: white;
    font-size: 20px;
}

.vue {
    background-color: #3fb27f;
}

.express {
    background-color: #ebd81c;
}

.node {
    background-color: #4cb156;
}

.mongo {
    background-color: #001d2a;
    // background-color: #4da53f;
}

.mongoose {
    background-color: #840000;
    // background-color: #4da53f;
}

.javascript {
    background-color: #e8d44d;
}

.html {
    background-color: #dc4d25;
}

.css {
    background-color: #2e4ad7;
}
</style>