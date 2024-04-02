<template>
    <div class="container-fluid page-container mb-md-5">
        <section class="row ">

            <div class="col-12 d-flex justify-content-center align-items-center">
                <div>
                    <p class="sub-text">hi, I'm</p><br>
                    <h1 class="title-text">Megan Hancock</h1><br>
                    <p class="sub-text">and I'm a <br><span class="title-text">software developer</span></p>
                </div>
            </div>


        </section>

    </div>

    <div class="container page-container mb-md-5 mt-md-5" id="aboutMe">


        <AboutMeComponent />


    </div>

    <div class="container  page-container mt-md-5 mb-md-5" id="applications">
        <section class="row justify-content-center">
            <ApplicationsComponent />
        </section>
    </div>

    <div class="container" id="contactMe">

        <ContactComponent />

    </div>


    <ModalComponent />
</template>


<script>
import AboutMeComponent from '../components/AboutMeComponent.vue'
import ApplicationsComponent from '../components/ApplicationsComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import ModalComponent from '../components/ModalComponent.vue'


export default {
    setup() {
        return {}
    },
    components: { AboutMeComponent, ApplicationsComponent, ContactComponent, ModalComponent }

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

.title-text {
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-size: 15vh;
    font-weight: bolder;
    font-style: normal;
    color: black;
}

.page-container {
    position: relative;
    min-height: 90vh;
}


@media (max-width: 391px) {

    p {
        font-size: 30px !important;
    }

    h1,
    span {
        font-size: 80px !important;
    }
}

// @media (max-width: 376px) {

//     p {
//         font-size: 20px !important;
//     }

//     h1,
//     span {
//         font-size: 60px !important;
//     }
// }

// @media (max-width: 415px) {

//     p {
//         font-size: 25px !important;
//     }

//     h1,
//     span {
//         font-size: 80px !important;
//     }
// }

// @media (max-width: 431px) {

//     p {
//         font-size: 25px !important;
//     }

//     h1,
//     span {
//         font-size: 80px !important;
//     }
// }

// @media (max-width: 361px) {

//     p {
//         font-size: 25px !important;
//     }

//     h1,
//     span {
//         font-size: 70px !important;
//     }
// }

// @media (max-width: 769px) {

//     p {
//         font-size: 40px !important;
//     }

//     h1,
//     span {
//         font-size: 100px !important;
//     }
// }

// @media (max-width: 413px) {

//     p {
//         font-size: 30px !important;
//     }

//     h1,
//     span {
//         font-size: 80px !important;
//     }
// }

// @media (max-width: 854px) {

//     p {
//         font-size: 20px !important;
//     }

//     h1,
//     span {
//         font-size: 60px !important;
//     }
// }


// @media (max-width: 281px) {

//     p {
//         font-size: 20px !important;
//     }

//     h1,
//     span {
//         font-size: 55px !important;
//     }
// }


// @media (max-width: 541px) {

//     p {
//         font-size: 30px !important;
//     }

//     h1,
//     span {
//         font-size: 70px !important;
//     }
// }


// @media (max-width: 913px) {

//     p {
//         font-size: 50px !important;
//     }

//     h1,
//     span {
//         font-size: 140px !important;
//     }
// }</style>