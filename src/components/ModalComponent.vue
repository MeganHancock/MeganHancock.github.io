<template>
    <!-- //NOTE - DIG IN MODAL -->
    <div class="modal fade" id="digInModal" tabindex="-1" aria-labelledby="digInLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-body pt-0 px-0">
                    <img src="../assets/img/digin.png" alt="Go Out! image" class="rounded-top">
                    <div class="mx-4">
                        <p class="app-title pb-0 mb-0">Dig In!</p>
                        <div class="d-flex justify-content-center">
                            <a href="https://github.com/MeganHancock/dig_in" target="_blank" class="mb-3 mx-2">View
                                Code</a>
                            <!-- TODO ADD LIVE APPLICATION -->
                            <a href="https://digin.mgnhnck.com/#/" target="_blank" class="mb-3 mx-2">View
                                App</a>

                        </div>
                        <p class="app-sub-title mb-2">Dig In is a a full stack application used to create, share, and
                            save recipes. This was built utilizing a Vue.js frontend and on the server side the DotNet
                            WebApi, Auth0 for user management, Dapper as an ORM, and a MySQL server. This application is
                            self hosted on AWS.</p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4 flex-wrap">
                        <p class="stack aws rounded-5 p-2 fw-bold">AWS</p>
                        <p class="stack vue rounded-5 p-2 fw-bold">Vue.js</p>
                        <p class="stack csharp rounded-5 p-2 fw-bold">C#</p>
                        <p class="stack mysql rounded-5 p-2 fw-bold">MySQL</p>
                        <p class="stack dapper rounded-5 p-2 fw-bold">Dapper</p>
                        <p class="stack auth rounded-5 p-2 fw-bold">Auth0</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- NOTE go out modal -->
    <div class="modal fade" id="goOutModal" tabindex="-1" aria-labelledby="towerModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">

                <div class="modal-body pt-0 px-0">
                    <img src="../assets/img/go.png" alt="Go Out! image" class="rounded-top">
                    <div class="mx-4">
                        <p class="app-title pb-0 mb-0">Go Out!</p>
                        <div class="d-flex justify-content-center">
                            <a href="https://github.com/MeganHancock/goOut" target="_blank" class="mb-3 mx-2">View
                                Code</a>
                            <!-- TODO ADD LIVE APPLICATION -->
                            <a href="https://github.com/MeganHancock/goOut" target="_blank" class="mb-3 mx-2 disabled"
                                title="LIVE APP UNDER CONSTRUCTION">View
                                App</a>
                            <!-- <p class="text-center ms-1" style="">Live App Under<br> Construction</p> -->

                        </div>
                        <p class="app-sub-title mb-2">Go Out is a community event app built using Vue.js, Express with
                            Node.js,
                            MongoDB with
                            Mongoose, and Auth0 for user management. Users may create events as well as browse local
                            events by category, RSVP to them,
                            and leave
                            comments to interact with other attendees. This application is self hosted on AWS.</p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4 flex-wrap">
                        <p class="stack aws rounded-5 p-2 fw-bold">AWS</p>
                        <p class="stack vue rounded-5 p-2 fw-bold">Vue.js</p>
                        <p class="stack express rounded-5 p-2 fw-bold">Express.js</p>
                        <p class="stack node rounded-5 p-2 fw-bold">Node.js</p>
                        <p class="stack mongo rounded-5 p-2 fw-bold">MongoDB</p>
                        <p class="stack mongoose rounded-5 p-2 fw-bold">Mongoose</p>
                        <p class="stack auth rounded-5 p-2 fw-bold">Auth0</p>

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
                            <a href="https://github.com/MeganHancock/inspire" target="_blank" class="mb-3 mx-2">View
                                Code</a>
                            <!-- TODO ADD LIVE APPLICATION -->
                            <a href="https://meganhancock.github.io/inspire/" target="_blank" class="mb-3 mx-2">View
                                App</a>

                        </div>
                        <p class="app-sub-title mb-2">Inspire to-do app built using JavaScript and the MVC pattern and
                            user authentication with Auth0.
                            Users can
                            create to-dos and store them on an external API. The home page also features random scenic
                            backgrounds, rotating inspiring quotes, live weather, and date and time.
                        </p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4 flex-wrap">
                        <p class="stack javascript rounded-5 p-2 fw-bold">JavaScript</p>
                        <p class="stack bootstrap rounded-5 p-2 fw-bold">Bootstrap</p>
                        <p class="stack html rounded-5 p-2 fw-bold">HTML5</p>
                        <p class="stack css rounded-5 p-2 fw-bold">CSS3</p>
                        <p class="stack auth rounded-5 p-2 fw-bold">Auth0</p>

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
                            <a href="https://github.com/MeganHancock/jot" target="_blank" class="mb-3 mx-2">View
                                Code</a>
                            <!-- <p class="text-center ms-1" style="">Live App Under<br> Construction</p> -->
                            <a href="https://meganhancock.github.io/jot/" target="_blank" class="mb-3 mx-2">View App</a>
                        </div>
                        <p class="app-sub-title mb-2">Jot is note taking app built using JavaScript, and it was the
                            first full application I built using the MVC pattern. Users can create, edit, and save notes
                            to local storage. <span class="fine-print">(Not suitable for mobile - <b>yet</b>)</span></p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4 flex-wrap">
                        <p class="stack javascript rounded-5 p-2 fw-bold">JavaScript</p>
                        <p class="stack bootstrap rounded-5 p-2 fw-bold">Bootstrap</p>
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
                            <a href="https://github.com/MeganHancock/flower_frenzy" target="_blank"
                                class="mb-3 mx-2">View Code</a>

                            <a href="https://meganhancock.github.io/flower_frenzy/" target="_blank"
                                class="mb-3 mx-2">View App</a>
                        </div>
                        <p class="app-sub-title mb-2">Flower Frenzy is a basic clicker-game built using basic HTML, CSS,
                            Bootstrap,
                            and JavaScript. The most remarkable aspect of this app (aside from how darn cute it is) is
                            how far my skill level has come since it's completion.<span class="fine-print"> (Not
                                suitable for mobile -
                                <b>yet</b>)</span>
                        </p>
                    </div>
                    <div class="d-flex justify-content-evenly mt-4 flex-wrap">
                        <p class="stack javascript rounded-5 p-2 fw-bold">JavaScript</p>
                        <p class="stack bootstrap rounded-5 p-2 fw-bold">Bootstrap</p>
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

.disabled {
    color: rgb(48, 49, 49);
    text-decoration: line-through;
    text-shadow: none !important;
    text-shadow: none !important;



}

a:hover {
    text-shadow: 3px 3px yellow;

}

.stack {
    color: white;
    font-size: 2vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

.aws {
    background-color: #ec912d;
}

.dapper {
    background-color: #001425;
}

.csharp {
    background-color: #6647d1;
}

.auth {
    background-color: #eb5424;
}

.mysql {
    background-color: #005d88;
}

.bootstrap {
    background-color: #8011f5;
}


.fine-print {
    font-size: 16px;
}
</style>