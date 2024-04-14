<template>
    <div class="container  page-container mt-md-4 mb-md-5" id="applications">
        <section class="row justify-content-center">
            <!-- <div class="col-md-12">
                <p class="sub-text">applications</p><br>
            </div> -->

            <!-- 
            <div class="col-12  mb-md-5">
                <div>
                    <p><span class="subtle">Hi, I'm</span><br>
                        <span class="louder">Megan Hancock</span>
                    </p>
                    <div class="d-flex justify-content-center align-items-center">
                        <div>
                            <span class="subtle">and I'm a
                            </span><br><br>
                            <span class="louder">software developer.</span>
                        </div>
                    </div>
                    <div><span class="subtle">Here is some of my work:</span>
                    </div>
                </div>
            </div> -->

            <!-- <div class="col-9">
                <p class="subtle p-0 m-0">hi, my name is </p>
                <p class="louder p-0 m-0 ms-5">Megan Hancock,</p>
                <div class="d-flex justify-content-end">
                    <p class="subtle p-0 m-0">and I'm a </p>
                    <p class="louder p-0 m-0">software developer</p><br>
                </div>
                <p class="subtle p-0 m-0">here is some of my work:</p>
            </div> -->
            <div class="col-12">
                <p class="text-center mb-5 pb-2"><span class="subtle">hi, I'm </span><span class="louder">Megan
                        Hancock</span><span class="subtle">,
                        and I'm a </span><span class="louder">software developer.</span><br><span class="subtle">here is
                        some of my work:</span></p>
            </div>

            <div role="button" class="col-12 col-md-4 app-card w-md-75 mb-5 " title="Click for application details 🌷"
                data-bs-toggle="modal" data-bs-target="#digInModal">
                <img src="../assets/img/digin.png" alt="dig in image" class="rounded shadow">
                <p class="app-title pb-0 mb-0">Dig In!</p>
                <p class="app-sub-title">A fullstack recipe sharing app built using Vue, C#, and MySQL. Self hosted with
                    AWS.
                </p>
            </div>

            <div role="button" class="col-12 col-md-4 app-card w-md-75 mb-5" title="Click for application details 🌷"
                data-bs-toggle="modal" data-bs-target="#goOutModal">
                <img src="../assets/img/go.png" alt="Go Out! image" class="rounded shadow">
                <p class="app-title pb-0 mb-0">Go Out!</p>
                <p class="app-sub-title">A fullstack community event app built using Vue, Express, Node.js, MongoDB, and
                    Mongoose.
                    Self hosted with AWS.</p>
            </div>

            <div role="button" class="col-12 col-md-4 app-card w-md-75 mb-5" title="Click for application details 🌹"
                data-bs-toggle="modal" data-bs-target="#inspireModal">
                <img src="../assets/img/inspire.png" alt="jot image" class="rounded shadow">
                <p class="app-title pb-0 mb-0">Inspire</p>
                <p class="app-sub-title">A to-do app built using JavaScript and the MVC pattern. Self hosted
                    with AWS.
                </p>
            </div>

            <div role="button" class="col-12 col-md-4 app-card w-md-75" title="Click for application details 🪻"
                data-bs-toggle="modal" data-bs-target="#jotModal">
                <img src="../assets/img/jotedit.png" alt="jot image" class="rounded shadow img-fluid">
                <p class="app-title pb-0 mb-0">Jot</p>
                <p class="app-sub-title">A note taking app built using JavaScript and the MVC pattern.</p>
            </div>

            <div role="button" class="col-12 col-md-4 app-card w-md-75" title="Click for application details 🌻"
                data-bs-toggle="modal" data-bs-target="#flowerFrenzyModal">
                <img src="../assets/img/flowerfrenzy.png" alt="flower frenzy image" class="rounded shadow">
                <p class="app-title pb-0 mb-0">Flower Frenzy</p>
                <p class="app-sub-title">A basic clicker-game built using basic HTML, CSS and JavaScript.</p>
            </div>
        </section>
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
body {
    background-color: lightgray;
}

.subtle {
    color: darkgray;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 2vh;
}

.louder {
    color: var(--darkest);
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 4.9vh;
}

img {
    aspect-ratio: 2/1;
    object-fit: cover;
    width: 50dvh;
    max-width: 100% // transition: transform .2s;
}

.page-container {
    position: relative;
    // height: 100vh;
}



.app-card:hover {
    transition: transform .2s;
    transform: scale(1.1);
}

.app-title {
    color: var(--darkest);
    // text-shadow: 3px 3px var(--light-accent);
    font-size: 3vh;
    text-align: center;
}

.app-sub-title {
    color: var(--darkest);
    font-size: 2.2vh;
}
</style>