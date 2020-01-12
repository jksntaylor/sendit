<template>
    <div class="location">
        <h1 class="my-resort">My Resort: {{this.$store.state.resortInfo.name}}</h1>
        <button v-if="!edit" @click="openEdit" class="change">change</button>
        <div v-else class="editor">
            <select v-model="newResort" name="resorts">
                <option value="alta">Alta</option>
                <option value="brighton">Brighton</option>
                <option value="deer-valley">Deer Valley</option>
                <option value="jackson-hole">Jackson Hole</option>
                <option value="parkcity">Park City</option>
                <option value="snowbird">Snowbird</option>
                <option value="solitude">Solitude</option>
            </select>
            <button @click="cancel" class="cancel">Cancel</button>
            <button @click="confirm" class="confirm">Confirm</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Location',
    data() {
        return {
            edit: false,
            newResort: ''
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
            this.$cookie.set('resort', this.$data.newResort, {expires: '5Y'});
            this.$data.edit = false;
            this.$emit('update');
        }
    }
}
</script>

<style scoped lang="scss">
    .my-resort {
        text-transform: capitalize;
    }
</style>