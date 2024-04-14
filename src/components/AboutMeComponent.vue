<template>
    <section class="row">
        <div class="col-md-6 col-12 d-flex justify-content-center align-items-center mb-5">
            <img src="../assets/img/chair.jpg" alt="portfolio picture" class="rounded-3">
        </div>
        <div class="col-md-6 d-flex justify-content-center align-items-center mb-5">
            <div>


                <h2 class="sub-text mb-3">let me tell you a bit about myself,</h2>
                <div class="d-flex justify-content-around about-me-text">
                    <div>

                        <h5>Technical Skills</h5>
                        <ul>
                            <li>C#</li>
                            <li>SQL</li>
                            <li>JavaScript </li>
                            <li>RESTful APIs </li>
                            <li>Node.js </li>
                            <li>HTML/CSS </li>
                            <li>Scrum </li>
                            <li>Mongoose </li>
                            <li>Vue.js </li>
                            <li>Git / GitHub</li>
                            <li>MongoDB</li>
                            <li>CommandLine</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div>

                        <h5>Soft Skills</h5>
                        <ul>
                            <li>Killer work ethic, <br>can't stop, won't stop </li>
                            <li>Excellent oral and written <br>communication </li>
                            <li>Highly collaborative</li>
                            <li>Unfazed by pressure & adversity</li>
                            <li>Efficient && able to prioritize <br>appropriately</li>
                            <li>'Can see the forest and the trees'</li>
                            <li>Time blocking && general time <br>management</li>
                            <li>Consistent && Reliable</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-12 mb-5 about-me-text">
            <p class="mb-5">My path to finding a love for software development was not a direct one, and included quite
                a few educational pit stops along the way. I began my professional life as a cosmetologist, joining a
                talented team at one of the top salons in Boise, Idaho. After over five years learning from best, I
                decided it was time to open my own single chair salon, where the focus was cruelty-free products, and a
                quiet, tranquil environment. This allowed me space to put a focus around giving back to the community as
                well, and I launched Unhoused Haircuts, and initiate where I visited local homeless shelters and
                economically disadvantaged resource center and offer haircuts to the patrons in need. Only after an
                infamous worldwide societal hiatus in 2020 did I decide it was time to search for my next passion. My
                quest took me to the mountains to work in a machine shop making knives, to a big city to manage a
                bakery, and back to my hometown to be a legal assistant. Nothing quite satisfied my need for growth and
                learning, until I decided to dive into the software development industry. I immediately felt at home
                exploring an industry that no matter how hard you try, there will always be more to learn. I was hooked!
                <br><br>
                After completing freeCodeCamp's 300 hour course for Responsive Web Design, I was eager for more, and I
                became a enrolled at CodeWorks software development boot camp. This was no easy feat, as I was living a
                very comfortable life as a legal assistant, but one has to do what one has to do! I dedicated my
                mornings and evenings to learning, and weekend to working a part time job to be able to afford school
                sooner. I saved for months,
                moved in with roommates, and quit my job to become a full time student.<br><br>


                Now, after over 500 hours of instruction and building over 20 applications, I am nearing the end of the
                CodeWorks 13-week intensive boot camp. In addition to expanding my knowledge of HTML, CSS, and
                JavaScript, I've learned to work with C#,
                SQL, Node.js, MongoDB, Vue.js, Git, GitHub, Express.js, and more. I've also gained invaluable experience
                working in agile environments, collaborating on seven different applications alongside other talented
                developers. I have learned so much and will forever be grateful for this experience. <br>
                <br>
                I have developed a profound appreciation for working with back-end technologies and languages, and I've
                found that I particularly enjoy C#, but ultimately the only thing I am seeking in a career is joining a
                team of developers that is as excited about my growth as I am.

            </p>

        </div>

    </section>


</template>


<script>
export default {
    setup() {
        return {
        }
    }
}
</script>


<style lang="scss" scoped>
img {
    max-height: 55vh;
    object-fit: cover;
    aspect-ratio: 1.5/2;
}

.sub-text {
    color: darkgray;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 5vh;
}

.about-me-text {
    color: var(--darkest);
    font-size: 20px;

}
</style>