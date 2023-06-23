<template>
    <v-card style="background: linear-gradient(120deg, #0FA597 0%, #0F4EA5 100%);z-index:99" rounded="0" flat>
        <v-container class="mr-md-16 ml-md-16 pl-md-16 pa-md-16">
            <v-row class="mr-md-10 ml-md-10">
                <v-col cols="12" md="6" class="pr-16">
                    <div>
                        <div class=" d-flex flex-column  align-left  ma-6 text-justify text-white ">
                            <h2 class=" text-h3 font-weight-bold mb-4">Contact Us</h2>
                            <h5 class="text-subtitle-1 font-weight-regular">Any question or remarks? Just write us a message
                                & our Team will get back to
                                you within 24 hours.</h5>
                            <v-divider class="mt-6 mb-6"></v-divider>
                            <h5 class="text-subtitle-1 font-weight-regular"><v-icon icon="mdi-phone"
                                    class="mr-2"></v-icon>+977 01
                                487978910</h5>
                            <h5 class="text-subtitle-1 font-weight-regular"><v-icon icon="mdi-email-outline"
                                    class="mr-2"></v-icon>info@reahrsoft.com</h5>
                            <h5 class="text-subtitle-1 font-weight-regular"><v-icon icon="mdi-map-marker-outline"
                                    class="mr-2"></v-icon>Minbhawan,
                                Baneshwor<br />
                                <v-icon class="mr-1"></v-icon> Kathmandu, Nepal
                            </h5>

                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card class="ma-6 mt-2" flat color="transparent">
                        <form>
                            <v-text-field label="Name" variant="underlined" density="compact" class="text-white pt-2"
                                color="white"></v-text-field>
                            <v-text-field label="Company Name" variant="underlined" density="compact" class="text-white"
                                color="white"></v-text-field>
                            <v-text-field label="E-mail" variant="underlined" density="compact" class="text-white"
                                color="white"></v-text-field>
                            <v-text-field label="Mobile Number" variant="underlined" density="compact" class="text-white"
                                color="white"></v-text-field>
                            <v-textarea label="Message" variant="underlined" density="compact" class="text-white"
                                color="white">"></v-textarea>
                            <div class="d-flex " width="100%">
                                <v-btn class="mr-2">
                                    <v-icon icon="mdi-share-variant-outline"></v-icon></v-btn>
                                <v-btn class="text-white flex-grow-1" color="#0BB4AF" type="submit">
                                    Book a Free Demo
                                </v-btn>
                            </div>
                        </form>
                    </v-card>
                </v-col>
            </v-row>
            <v-divider color="white" class="mt-10" :thickness="2"></v-divider>
            <v-row class="mt-10 d-flex align-center align-md-start justify-center justify-md-start">
                <v-col cols="8" md="3" class="pr-md-16">
                    <v-img src="../assets//logoWhite.png"></v-img>
                    <div class="d-flex justify-space-evenly mt-4 pr-6 pl-6"><v-icon icon="mdi-instagram"
                            color="white"></v-icon><v-icon icon="mdi-facebook" color="white"></v-icon><v-icon
                            icon="mdi-twitter" color="white"></v-icon><v-icon icon="mdi-linkedin" color="white"></v-icon>
                    </div>
                </v-col>
                <v-col cols="8" md="3">
                    <div class=" d-flex flex-column  align-center align-md-start   text-justify text-white ">
                        <h2 class=" text-subtitle-1 font-weight-bold mb-1">Contact</h2>
                        <h5 class="text-caption font-weight-regular"> Minbhawan, Kathmandu</h5>

                        <h5 class="text-caption font-weight-regular">info@aayulogic.com</h5>
                        <h5 class="text-caption font-weight-regular"> +977-9802-075555</h5>
                        <h5 class="text-caption font-weight-regular">+977-1-4106706 +977-1-4106708
                        </h5>

                    </div>
                </v-col>
                <v-col cols="8" md="3">



                    <div class=" d-flex flex-column  align-center align-md-start    text-justify text-white ">
                        <h2 class=" text-subtitle-1 font-weight-bold mb-1"> Links</h2>
                        <router-link to="/">
                            <h5 class="text-caption font-weight-regular"> Contact</h5>
                        </router-link>

                        <h5 class="text-caption font-weight-regular"><router-link to="/"> About Us</router-link> </h5>
                        <h5 class="text-caption font-weight-regular"><router-link to="/"> Blog</router-link></h5>
                        <h5 class="text-caption font-weight-regular"><router-link to="/"> Privacy Policy</router-link></h5>

                    </div>
                </v-col>
                <v-col cols="8" md="3">
                    <div class=" d-flex flex-column  align-center align-md-start    text-justify text-white ">
                        <h2 class=" text-subtitle-1 font-weight-bold mb-1"> Help
                        </h2>
                        <h5 class="text-caption font-weight-regular"> Frequently Asked Questions</h5>


                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<style scoped>
a,
a:hover,
a:visited {
    text-decoration: none !important;
    color: white;
}
</style>
  