<template>

    <!-- 
    <div class="col-md-7">
                    <div class="contact-form">
                        <div class="screen-reader-response"></div>
                        <form action="mail.php" id="cf">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="text" id="name" name="name" placeholder="Name Here*">
                                </div>
                                <div class="col-md-6">
                                    <input type="email" id="email" name="email" placeholder="Email Here*">
                                </div>
                            </div>
                            <textarea name="msg" id="msg" placeholder="Message Here*"></textarea>
                            <div class="form-submit">
                                <button type="submit" name="submit" id="cnt_submit">Send Message <i
                                        class="fa fa-long-arrow-right"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- mail.php -->
    <!-- <?php

//Taking all values
$name 		= $_POST['name'];
$email 		= $_POST['email'];
$msg 		= $_POST['msg'];
$output 	= "Name: ".$name."\n\nEmail: ".$email."\n\nMessage: ".$msg;

$to 		= 'email';
$headers	= 'FROM: "'.$email.'"';

$send		= mail($to, $name, $output."\n\n***This message has been sent from Rokstar", $headers);
?> -->
    <section class="row">
        <div class="col-12">
            <p class="sub-text">let's stay in touch!</p><br>
            <p class="title-text text-center d-none d-md-block">MeganHancockDev@gmail.com</p>
        </div>

    </section>

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

.title-text {
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-size: 6vh;
    font-weight: bolder;
    font-style: normal;
    color: black;
}
</style>