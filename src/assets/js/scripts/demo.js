$(function() {

//    Morris.Bar({
//         element: 'morris_bar_chart',
//         data: [{ y: 'Yes', a: 60, b: 50 },],
//         xkey: ['y'],
//         ykeys: ['a', 'b'],
//         labels: ['Series A', 'Series B'],
//         hideHover: 'auto',
//         resize: true,
//         barColors: ['#2ecc71', '#c7cccf'],
//     });



var barData = {
    labels: [],
    datasets: [
        {
            label: "Yes",
            backgroundColor:'#DADDE0',
            data: [45]
        },
        {
            label: "No",
            backgroundColor: '#2ecc71',
            borderColor: "#fff",
            data: [29]
        }
    ]
};
var barOptions = {
    responsive: true,
    maintainAspectRatio: false
};

var ctx = document.getElementById("bar_chart").getContext("2d");
new Chart(ctx, {type: 'bar', data: barData, options:barOptions}); 



});