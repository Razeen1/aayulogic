<template>
    <v-card class="d-flex flex-column align-center  text-center" flat>
        <h2 class="text-blue-darken-4 mt-14">Mobile App</h2>
        <v-item-group multiple class="mt-10 mb-16 ">
            <v-container>
                <v-row class="mr-16 ml-16 d-flex flex-column d-md-flex flex-md-row">

                    <v-col height="100%" class="order-2 order-md-1">

                        <div class="d-flex flex-column align-start align-md-end mt-0 mt-md-16"
                            v-for="(item, i) in features.slice(0, 4)" :key="i">
                            <h6 class="text-subtitle-1 mt-2">{{ item.text }}</h6>
                            <p class="text-caption mb-2  text-left text-md-right">{{ item.subtext }}</p>
                        </div>

                    </v-col>
                    <v-col class="order-1 order-md-2">
                        <v-img src="../assets/phone.png" height="100%"></v-img>
                    </v-col>
                    <v-col height="100%" class="order-3 order-md-3">
                        <div class="d-flex flex-column align-start mt-0 mt-md-16" v-for="(item, i) in features.slice(4, 8)"
                            :key="i">
                            <h6 class="text-subtitle-1 mt-2">{{ item.text }}</h6>
                            <p class="text-caption mb-2  text-left">{{ item.subtext }}</p>
                        </div>
                    </v-col>

                </v-row>
            </v-container>
        </v-item-group>
    </v-card>
</template>
<script>
export default {


    data: () => ({

        features: [
            { text: 'Noticeboard', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ' },
            { text: 'Attendance', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ' },
            { text: 'Leave', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ' },
            { text: 'Task', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ' },
            { text: 'Insites', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ' },
            { text: 'Payslip', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ' },
            { text: 'Employee Directory', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ' },
            { text: 'Events', subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur. ' },
        ],


    }),

}
</script>