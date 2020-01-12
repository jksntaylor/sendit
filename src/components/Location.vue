<template>
    <div class="location">
        <h1 class="my-resort">My Resort: {{this.$cookie.get('resort')}}</h1>
        <button v-if="!edit" @click="openEdit" class="change">change</button>
        <div v-else class="editor">
            <select name="resorts">
                <option value="Alta">Alta</option>
                <option value="Brighton">Brighton</option>
                <option value="Park City">Park City</option>
                <option value="Snowbird">Snowbird</option>
                <option value="Solitude">Solitude</option>
            </select>
            <button @click="cancel" class="cancel">Cancel</button>
            <button class="confirm">Confirm</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Location',
    data() {
        return {
            edit: false
        }
    },
    methods: {
        openEdit() {
            this.$data.edit = true;
        },
        cancel() {
            this.$data.edit = false;
        },
        confirm() {

        }
    }
}
</script>

<style scoped lang="scss">
    .my-resort {
        text-transform: capitalize;
    }
</style>