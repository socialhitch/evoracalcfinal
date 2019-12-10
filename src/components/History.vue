<template>
    <div class="history">
        <h3>History</h3>
        <p >
            <table>
                <tr>
                    <td>id</td>
                    <td>Spot needed to book for the day</td>
                    <td>Weekly Goal</td>
                    <td>Spots remaining to reach monthly goal</td>
                    <td>Instagram Story poster per day to reach goal</td>
                </tr>
                <tr v-for="item in $store.state.history" v-bind:key="item.id" >
                    <td>{{item.id}}</td>
                    <td>{{item.OD1}}</td>
                    <td>{{item.OD2}}</td>
                    <td>{{item.period}}</td>
                    <td>{{item.doublingTime}}</td>

                </tr>
            </table>
        </p>
    </div>
</template>


<script>

export default {
    name: 'History',
    props: [
    ]

}
</script>

<style>
.history {
    color: #f7c39b;
    text-align: center;
}
</style>
