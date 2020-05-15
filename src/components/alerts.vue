<template>
    <div style='position:absolute' class='custom-font'>
        <div v-show="waiting.status" class='alerts-load'>
            <div class="bg"></div>
                        <v-row style='height:100vh' align="center">
                <v-col cols=12 class='text-center'>
                    <v-progress-circular indeterminate color="primary" size=50></v-progress-circular>
                </v-col>
            </v-row>

        </div>

        <v-snackbar v-model="notification.status" :timeout="notification.timeout" top :color="notification.color">
            <span :style='"color:"+notification.textColor'>{{notification.text}}</span>
            <v-btn icon @click.native="notification.status = false" :style='"color:"+notification.textColor'>
                <v-icon :color="notification.textColor">close</v-icon>
            </v-btn>
        </v-snackbar>

        <v-dialog v-model="wconfirm.status" persistent max-width="500px" transition="dialog-transition">
            <v-card>
                <v-toolbar color="white" elevation="0" >
                    <v-toolbar-title :class="'custom-font '+wconfirm.color+'--text'">{{wconfirm.title}}
                    </v-toolbar-title>
                </v-toolbar>
                <v-divider></v-divider>
                <v-card-text class='text-center pa-5' style='font-size:12pt' v-html='wconfirm.text'>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="black" outlined @click='wconfirm.onCancel'>{{wconfirm.textCancel}}</v-btn>
                    <v-btn color="primary" outlined @click='wconfirm.onConfirm'>{{wconfirm.textConfirm}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <!-- <notifications group="all" position="top center" width="300px" :ignoreDuplicates="true">
            <template slot="body" slot-scope="props">
                <div>
                    <v-card :color='props.item.type' class='ma-1 text-center pa-2' style='color:white'>
                        <v-row align="center" justify="center">
                            <v-col cols="10">{{props.item.text}}</v-col>
                            <v-col cols="2">
                                <v-btn icon @click.native="props.close">
                                    <v-icon color="white">close</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>
            </template>
        </notifications> -->
    </div>

</template>

<script>
    export default {
        data() {
            return {
                waiting: {
                    status: false,
                    text: "",
                },
                notification: {
                    status: false,
                    timeout: 0,
                    text: "",
                    color: "primary",
                    textColor: "white"
                },
                wconfirm: {
                    status: false,
                    color: 'primary',
                    title: "",
                    text: "",
                    textConfirm: "",
                    textCancel: "",
                    onConfirm: () => {},
                    onCancel: () => {},
                }
            }
        },
        methods: {
            show(configs) {
                switch (configs.type) {
                    case "load":
                        this.wait(configs.status, configs.text);
                        break;
                    case "notify":
                        this.$notify({
                            group: 'all',
                            //title: 'Important message',
                            type: configs.color,
                            text: configs.text,
                            duration: configs.timeout
                        });
                        // this.notify(configs.text, {
                        //     color: configs.color,
                        //     timeout: configs.timeout
                        // });
                        break;
                }
            },
            wait(status, {
                text = ""
            } = {}) {
                this.waiting.status = status;
                this.waiting.text = text;
            },
            notify(text, {
                color = "white",
                textColor = "black",
                timeout = 5000
            } = {}) {
                this.notification.status = true;
                this.notification.text = text;
                this.notification.color = color;
                this.notification.textColor = textColor;
                this.notification.timeout = timeout;
            },
            confirm(text, onConfirm, {
                title = "Confirm",
                color = 'black',
                textConfirm = 'OK',
                textCancel = 'Cancel',
                onCancel = () => {}
            } = {}) {
                this.wconfirm.status = true;
                this.wconfirm.color = color;
                this.wconfirm.title = title;
                this.wconfirm.text = text;
                this.wconfirm.textConfirm = textConfirm;
                this.wconfirm.textCancel = textCancel;
                this.wconfirm.onConfirm = () => {
                    this.wconfirm.status = false;
                    onConfirm();
                }
                this.wconfirm.onCancel = () => {
                    this.wconfirm.status = false;
                    onCancel();
                }
            }

        },
    }
</script>
<style lang="scss" scoped>
    .alerts-load {
        transition: 0.2s;
        position: fixed;
        top:0;
        left:0;
        z-index: 10;
        height: 100vh;
        width: 100vw;
    }
    .alerts-load .bg{
        background: white;
        opacity: 0.5;
        position: absolute;
        top:0;
        left:0;
        height: 100%;
        width: 100%;
    }
</style>