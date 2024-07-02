import Inputs_IconLeft from "@/components/inputs/iconLeft"
import Inputs_Numbers from "@/components/inputs/numbers"
import Inputs_Select from "@/components/inputs/select"
import { useState } from "react";
import Table from "@/components/table";
import CalculationDetails from "./calculationDetails";

export default function Calculator() {
    const [dataNeeded, setDataNeeded] = useState([]);
    const [graphData, setGraphData] = useState({});

    function formatNumbers(x) {
        let rounded = Math.round((x + Number.EPSILON) * 100) / 100;
        let final = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if (final.substring(final.length - 3, final.length - 2) != '.' && final.includes('.')) {
            final = final + '0'
        }
        return final
    }

    async function calculateMortgage(e) {
        e.preventDefault();
        const submittedMortgageData = {
            [e.target.mAmount.name]: e.target.mAmount.value,
            [e.target.rate.name]: e.target.rate.value,
            [e.target.aPeriod.name]: e.target.aPeriod.value,
            [e.target.paymentFrequency.name]: e.target.paymentFrequency.value,
            [e.target.term.name]: e.target.term.value
        }
        const monthlyInterestRate = submittedMortgageData.rate / 100 / submittedMortgageData.paymentFrequency;
        const plusR = (1 + monthlyInterestRate) ** (submittedMortgageData.aPeriod * submittedMortgageData.paymentFrequency);
        const plusR2 = (1 + monthlyInterestRate) ** (submittedMortgageData.term * submittedMortgageData.paymentFrequency);
        const monthlyMortgagePayment = submittedMortgageData.mAmount * (monthlyInterestRate * plusR) / (plusR - 1);

        setDataNeeded([
            {
                id: 1,
                name: "Number of Payments",
                aValue: submittedMortgageData.aPeriod * submittedMortgageData.paymentFrequency,
                tValue: submittedMortgageData.term * submittedMortgageData.paymentFrequency
            },
            {
                id: 2,
                name: "Mortgage Payment",
                aValue: '$ ' + formatNumbers(monthlyMortgagePayment),
                tValue: '$ ' + formatNumbers(monthlyMortgagePayment)
            },
            {
                id: 3,
                name: "Pricipal Payments",
                aValue: '$ ' + formatNumbers(Number(submittedMortgageData.mAmount)),
                tValue: '$ ' + formatNumbers(submittedMortgageData.mAmount * (1 - ((plusR - plusR2) / (plusR - 1))))
            },
            {
                id: 4,
                name: "Interest Payments",
                aValue: '$ ' + formatNumbers((submittedMortgageData.aPeriod * submittedMortgageData.paymentFrequency * monthlyMortgagePayment) - submittedMortgageData.mAmount),
                tValue: '$ ' + formatNumbers((submittedMortgageData.term * submittedMortgageData.paymentFrequency * monthlyMortgagePayment) - (submittedMortgageData.mAmount * (1 - ((plusR - plusR2) / (plusR - 1)))))
            },
            {
                id: 5,
                name: "Total Cost",
                aValue: '$ ' + formatNumbers(submittedMortgageData.aPeriod * submittedMortgageData.paymentFrequency * monthlyMortgagePayment),
                tValue: '$ ' + formatNumbers(monthlyMortgagePayment * submittedMortgageData.term * submittedMortgageData.paymentFrequency)
            }
        ])

        setGraphData({
            "rate": monthlyInterestRate,
            "numberOfPayments": submittedMortgageData.aPeriod * submittedMortgageData.paymentFrequency,
            "monthlyPayment": monthlyMortgagePayment,
            "principal": Number(submittedMortgageData.mAmount),
            "interestPayment": (submittedMortgageData.aPeriod * submittedMortgageData.paymentFrequency * monthlyMortgagePayment) - submittedMortgageData.mAmount
        })

        document.getElementById("cover").style.visibility = "hidden";
    }

    return (
        <section className="bg-gradient-to-b from-white to-artic-blue">
            <div className="flex flex-col max-w-7xl mx-auto">
                <form onSubmit={calculateMortgage} autoComplete="off">
                    <div className="flex flex-row flex-wrap gap-4 xl:gap-0 lg:justify-between items-end pt-36 mx-8">
                        <Inputs_IconLeft id={"mAmount"} label={"Mortgage Amount"} icon={"$"} placeholder={"100,000,000"} />
                        <Inputs_Numbers id={"rate"} label={"Interest Rate"} icon={"%"} placeholder={"5.00"} min={0.00} max={100.00} step={0.01} />
                        <Inputs_Numbers id={"aPeriod"} label={"Amortization Period"} icon={"years"} placeholder={"10"} min={10} max={30} step={1} />
                        <Inputs_Select id={"paymentFrequency"} label={"Payment Frequency"}
                            content={[{ name: 'Weekly', value: 52 },
                            { name: 'Bi-Weekly', value: 26 },
                            { name: 'Semi-Monthly', value: 24 },
                            { name: 'Monthly', value: 12 }]}
                        />
                        <Inputs_Numbers id={"term"} label={"Term"} icon={"years"} placeholder={"5"} min={1} max={20} step={1} />

                        <button type="submit" className="bg-bmo-blue cursor-pointer text-white rounded-full py-2 px-8 hover:bg-opacity-80 transition-opacity duration-300 text-lg font-medium font-headings">
                            Calculate
                        </button>
                    </div>
                </form>
                <div id="cDetailsSection" className="relative my-12">
                    <div id="cover" className="absolute w-full h-full rounded-3xl flex flex-col items-center justify-center gap-8 backdrop-blur-sm bg-green-100/80 border-green-500 border-2">
                        <h2 className="font-dText font-semibold text-6xl">Detailed Report</h2>
                        <p className="font-jSans text-2xl">
                            Enter Your Mortgage Values to Get a Detailed Report!
                        </p>
                    </div>
                    <Table content={dataNeeded} />
                    <CalculationDetails data={graphData} />
                </div>
            </div>
        </section>
    )
}