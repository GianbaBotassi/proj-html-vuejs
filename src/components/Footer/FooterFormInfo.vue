<script>
export default {
    name: "FooterFormInfo",
    props: {
        info: Array
    }
}

</script>

<template>
    <section class="cont">
        <div id="form-info-cont">
            <div id="form">
                <h5>SEND A MESSAGE</h5>
                <h2>Get in <span class="select-bg">Touch</span></h2>
                <p>We will respond to your message as soon as possible.
                </p>

                <!-- Form -->
                <form method="post">
                    <div class="flex-form">
                        <input type="text" id="name" name="name" placeholder="Name">
                        <input type="email" id="email" name="email" placeholder="Email">
                        <input type="text" id="phone" name="phone" placeholder="Phone">
                        <input type="text" id="info" name="info" placeholder="More info">
                        <textarea name="message" id="message" rows="10" placeholder="Message"></textarea>
                    </div>
                    <button class="btn bg-green-btn" type="submit" value="Submit">SEND
                    </button>

                </form>
            </div>
            <div id="info">
                <h3>Example Inc.</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore </p>
                <p> Sit a laboriosam placeat fuga voluptas repellat tempore esse perf</p>

                <!-- V-for per contatti -->
                <div v-for="contact in info">
                    <div>
                        <i :class="contact.icon"></i>
                        <span>{{ contact.text }}</span>
                    </div>
                </div>


                <button class="btn border-green-btn ">VIEW MAP</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use 'styles/partials/variables.scss' as *;
@use 'styles/partials/mixins.scss' as *;

#form-info-cont {
    display: flex;
    gap: 30px;
    color: white;
    padding: 80px 0;

    #form {
        width: 65%;

        .flex-form {
            @include flex-content(both);
            flex-wrap: wrap;
            gap: 10px;
            padding: 20px 0;

            input,
            textarea {
                background-color: $form;
                border: 0;
                color: $shuttle-gray;
                font-size: 0.6rem;
                font-family: inherit;
                padding: 10px 5px;
            }

            input {
                flex-basis: calc((100%/2) - 10px);
            }

            textarea {
                width: calc(100% - 10px);
                resize: none;
            }
        }

        button {
            border: 0;
            font-family: inherit;
            font-size: 0.6rem;
            cursor: pointer;
        }
    }

    #info {
        width: 35%;

        p {
            margin-top: 15px;
        }

        div {
            margin-top: 15px;

            i {
                border-radius: 50%;
                padding: 10px;
                color: $atoll;
                background-color: $ebony-clay;
                margin-right: 10px;
            }
        }

        button {
            margin-top: 20px;
        }

    }
}
</style>
