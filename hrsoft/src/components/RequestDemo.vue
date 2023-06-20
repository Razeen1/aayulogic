<template>
    <v-dialog v-model="this.$store.state.dialog" width="60%" style="z-index:9999;">
        <v-card>
            <v-card-title>
                <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="First name*" required variant="solo"
                                hint="Enter Your Full Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Middle name" variant="solo" hint="Enter Your Middle Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field variant="solo" label="Last name*" hint="Enter Your Last Name"
                                required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <v-text-field variant="solo" label="Mobile Number*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <v-text-field variant="solo" label="Designation*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field variant="solo" label="Select Data Option" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-checkbox><template v-slot:label>
                                    <div class="d-flex">I agree with this <p class="text-blue"> &nbsp;Terms and Conditions.
                                        </p>
                                    </div>
                                </template>
                            </v-checkbox>
                        </v-col>

                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>

            <v-btn color="teal-accent-3" variant="solo" class="mb-4">Request a
                demo </v-btn>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
    data() {

    },
    methods: {
        changeState() {
            this.$store.commit('changeState');
        }
    }
}
</script>
