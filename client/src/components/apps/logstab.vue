<template>
    <v-container>
        <v-row>
            <v-col cols="6" sm="6" md="6" lg="6" xl="6">
                <h1>
                    Logs for {{ this.app }}
                </h1>
            </v-col>
            <v-col cols="6" sm="6" md="6" lg="6" xl="6" class="d-flex justify-end">
                <v-btn
                    class="ma-2"
                    @click="openInWindow"
                    >Open Logs
                    <v-icon right dark >mdi-open-in-new</v-icon>
                </v-btn>
                <p></p>
            </v-col>
        </v-row>
        <v-row style="height: 1100px">
            <v-col cols="12" sm="12" md="12">
                <logs :pipeline=pipeline :phase=phase :app=app :deploymentstrategy=deploymentstrategy></logs>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    props: {
      pipeline: {
        type: String,
        default: "MISSING"
      },
      phase: {
        type: String,
        default: "MISSING"
      },
      app: {
        type: String,
        default: "new"
      },
      deploymentstrategy: {
        type: String,
        default: "docker"
      },
    },
    data: () => ({
    }),
    components: {
        logs: () => import('./logs.vue'),
    },
    methods: {
        openInWindow() {
            window.open(`#/pipeline/${this.pipeline}/${this.phase}/${this.app}/logspopup?popup=true`, '_blank', 'popup=yes,location=no,height=1000,width=1000,scrollbars=yes,status=no');
        }
    },
}
</script>

<style lang="scss">

a:link { text-decoration: none;}
.v-icon.v-icon {
    vertical-align:inherit;
}
</style>