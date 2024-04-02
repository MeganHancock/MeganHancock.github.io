<template>
    <div class="col-md-12">
        <p class="sub-text">applications</p><br>
    </div>
    <div role="button" class="col-12 col-md-4 app-card w-md-75 mb-5" title="Click for application details 🌷"
        data-bs-toggle="modal" data-bs-target="#goOutModal">
        <img src="src\assets\img\tower.png" alt="Go Out! image" class="rounded shadow">
        <p class="app-title pb-0 mb-0">Go Out!</p>
        <p class="app-sub-title">A community event app built using Vue, Express, Node.js, MongoDB, and Mongoose .</p>
    </div>

    <div role="button" class="col-12 col-md-4 app-card w-md-75 mb-5" title="Click for application details 🌹"
        data-bs-toggle="modal" data-bs-target="#inspireModal">
        <img src="src\assets\img\inspire.png" alt="jot image" class="rounded shadow">
        <p class="app-title pb-0 mb-0">Inspire</p>
        <p class="app-sub-title">A to-do app built using JavaScript and the MVC pattern.</p>
    </div>

    <div role="button" class="col-12 col-md-4 app-card w-md-75" title="Click for application details 🪻"
        data-bs-toggle="modal" data-bs-target="#jotModal">
        <img src="src\assets\img\jot.png" alt="jot image" class="rounded shadow">
        <p class="app-title pb-0 mb-0">Jot</p>
        <p class="app-sub-title">A note taking app built using JavaScript and the MVC pattern.</p>
    </div>

    <div role="button" class="col-12 col-md-4 app-card w-md-75" title="Click for application details 🌻"
        data-bs-toggle="modal" data-bs-target="#flowerFrenzyModal">
        <img src="src\assets\img\flowerfrenzy.png" alt="flower frenzy image" class="rounded shadow">
        <p class="app-title pb-0 mb-0">Flower Frenzy</p>
        <p class="app-sub-title">A basic clicker-game built using basic HTML, CSS and JavaScript.</p>
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
.sub-text {
    color: darkgray;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 5vh;
}

img {
    aspect-ratio: 2/1;
    object-fit: cover;
    width: 50dvh;
    max-width: 100% // transition: transform .2s;
}

// img:hover {
//     transform: scale(1.15);
// }

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