<template>
    <v-card class="d-flex flex-column align-center  text-center" color="#F0FBFF99" flat>
        <h2 class="text-blue-darken-4 mt-md-14">Mobile App</h2>

        <v-item-group multiple class="mt-md-10 mb-md-16 ">
            <v-container>
                <div
                    class="mr-md-16 ml-md-16 d-flex fill-height justify-end align-center flex-column d-md-flex flex-md-row">
                    <div class="">
                        <div class="pl-md-6 mr-md-6 d-flex flex-column align-center align-md-end "
                            v-for="(item, i) in features.slice(0, 4)" :key="i">
                            <h6 class="text-subtitle-1 mt-2">{{ item.text }}</h6>
                            <p class="text-caption mb-2  text-center text-md-right">{{ item.subtext }}</p>
                        </div>

                    </div>

                    <v-img src="../assets/phone.png" cover max-width="250px"></v-img>

                    <div class=" ">
                        <div class="pr-md-6 d-flex ml-md-6 flex-column align-center align-md-start "
                            v-for="(item, i) in features.slice(4, 8)" :key="i">
                            <h6 class="text-subtitle-1 mt-2">{{ item.text }}</h6>
                            <p class="text-caption mb-2  text-center text-md-left">{{ item.subtext }}</p>
                        </div>
                    </div>

                </div>
            </v-container>
        </v-item-group>
        <div class="d-flex mb-6 ">
            <v-img src="../assets/playstore.png" class="pa-2"></v-img><v-img src="../assets/appstore.png"
                class="pa-2"></v-img>
        </div>
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