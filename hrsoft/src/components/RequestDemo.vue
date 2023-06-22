<template>
    <v-dialog v-model="this.$store.state.dialog" max-width="600px" height=100% style="z-index:9999;">
        <v-card>

            <span class="text-h5 ml-10 mt-8">Request a Free Trial</span>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="First name*" variant="underlined" density="compact"
                                hint="Enter Your Full Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Middle name" variant="underlined" density="compact"
                                hint="Enter Your Middle Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field variant="underlined" density="compact" label="Last name*"
                                hint="Enter Your Last Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <v-text-field variant="underlined" density="compact" label="Mobile Number*"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <v-text-field variant="underlined" density="compact" label="Designation*"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <v-text-field variant="underlined" density="compact" label="Employee Size"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <v-text-field variant="underlined" density="compact" label="Organization Name*"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="10" md="8" class="pr-0">
                            <v-text-field variant="underlined" density="compact" label="Domain"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4" class="pl-0">
                            <v-text-field variant="outlined" density="compact" model-value="realhrsoft.com" readonly flat
                                bg-color="#0BB4AF" class="text-white pl-0 rounded-0"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <v-text-field variant="underlined" density="compact" label="Country*"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="6">
                            <v-text-field variant="underlined" density="compact"
                                label="Organizational Email"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field variant="underlined" density="compact" label="Select Data Option"></v-text-field>
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

                <v-btn color="teal-accent-3" variant="flat" class="mb-4 ml-4">Request a
                    demo </v-btn>
            </v-card-text>


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
