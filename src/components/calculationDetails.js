import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function CalculationDetails(props) {

    const chartRef = useRef(null);
    const chartRef2 = useRef(null);

    function round(x) {
        return Math.round((x + Number.EPSILON) * 100) / 100;
    }

    useEffect(() => {
        // Line Graph
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext("2d")

            let lList = getData();
            console.log(lList)

            const newChart = new Chart(
                context,
                {
                    type: 'line',
                    data: {
                        labels: lList.map(row => row.payment),
                        datasets: [
                            {
                                label: 'Pricipal Remaining',
                                data: lList.map(row => row.value),
                                fill: true,
                                showLine: false,
                                pointStyle: false,
                                backgroundColor: '#0179c1b3',
                                borderColor: '#0179C1',
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                ticks: {
                                    maxTicksLimit: 10,
                                }
                            },
                            y: {
                                ticks: {
                                    callback: function (value) {
                                        return '$' + value;
                                    },
                                    stepSize: props.data.principal / 10
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                intersect: false,
                                callbacks: {
                                    title: function (context) {
                                        return 'After ' + context[0].label + ' Months';
                                    }
                                }
                            }
                        }
                    }
                }
            );
            chartRef.current.chart = newChart
        }

        // Bar Graph
        if (chartRef2.current) {
            if (chartRef2.current.chart) {
                chartRef2.current.chart.destroy();
            }
            const context = chartRef2.current.getContext("2d")
            const newChart2 = new Chart(
                context,
                {
                    type: 'bar',
                    data: {
                        labels: [''],
                        datasets: [
                            {
                                label: 'Pricipal Payments',
                                data: [props.data.principal],
                                fill: true,
                                showLine: false,
                                pointStyle: false,
                                backgroundColor: '#0179c1b3',
                                borderColor: '#0179C1',
                                borderWidth: 1
                            },
                            {
                                label: 'Interest Payments',
                                data: [round(props.data.interestPayment)],
                                fill: true,
                                showLine: false,
                                pointStyle: false,
                                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                                borderColor: 'rgb(255, 159, 64)',
                                borderWidth: 1
                            },

                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: {
                                stacked: true
                            },
                            y: {
                                stacked: true,
                                position: 'right',
                                ticks: {
                                    callback: function (value) {
                                        return '$' + value;
                                    },
                                    stepSize: Math.ceil((props.data.principal + props.data.interestPayment) / 10000) * 10000 / 10
                                }
                            }
                        },
                        plugins: {
                            tooltip: {
                                enabled: true
                            }
                        }
                    }
                }
            );
            chartRef2.current.chart = newChart2
        }
    }, [getData]);

    function getData() {
        let remainingBalance = props.data.principal;
        let principalPayments = [{
            payment: 0,
            value: remainingBalance
        }];

        for (let i = 0; i < props.data.numberOfPayments; i++) {
            const interestPayment = remainingBalance * props.data.rate;
            const principalPayment = props.data.monthlyPayment - interestPayment;
            remainingBalance -= principalPayment;
            principalPayments.push({
                payment: i + 1,
                value: round(remainingBalance)
            });
        }
        return principalPayments;
    }

    return (
        <div className="flex flex-col mx-8 my-12">
            <h2 className="font-dText text-3xl font-semibold mb-12">Details</h2>
            <div className="flex flex-row gap-4">
                <canvas className="max-w-[50%] h-[500px]" ref={chartRef}></canvas>
                <canvas className="max-w-[50%] h-[500px]" ref={chartRef2}></canvas>
            </div>
        </div>
    )
}