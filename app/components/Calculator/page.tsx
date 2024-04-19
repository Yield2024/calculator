"use client";
import React, { useMemo, useState } from "react";
import { SelectPicker, Input, InputGroup } from "rsuite";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./calculator.module.scss";
import "rsuite/SelectPicker/styles/index.css";
import "rsuite/InputNumber/styles/index.css";
import "rsuite/Slider/styles/index.css";

export default function Calculator() {
    const [accTypes, setAccTypes] = useState("Odyssey");
    const [interestState, setInterestState] = useState("Annually");
    const [deposit, setDeposit] = useState("240,000");
    const [termState, setTermState] = useState("10");

    const accountTypes = useMemo(
        () =>
            ["Orbit", "Odyssey"].map((item) => ({
                label: item,
                value: item,
            })),
        []
    );

    const interests = useMemo(
        () =>
            ["Monthly", "Quarterly", "Annually"].map((item) => ({
                label: item,
                value: item,
            })),
        []
    );

    const terms = useMemo(
        () =>
            ["5", "7", "10"].map((item) => ({ label: `${item} Years`, value: item })),
        []
    );

    const calcularTasaNominal = (
        tasaEfectiva: number,
        frecuenciaReinversion: number
    ) => {
        return (
            (Math.pow(1 + tasaEfectiva, 1 / frecuenciaReinversion) - 1) *
            frecuenciaReinversion *
            100
        );
    };

    const calcularInteresCompuestoReinversion = (
        P: number,
        n: number,
        tasaEfectiva: number
    ) => {
        // Calcular la tasa nominal
        const tasaNominal = calcularTasaNominal(tasaEfectiva, 1);

        // Calcular el monto futuro
        const montoFuturo = P * Math.pow(1 + tasaNominal / 100, n);

        return montoFuturo;
    };

    const calcApy = () => {
        const orbitTable: any = {
            5: [5.5, 6, 7.5, 12],
            7: [7, 7.5, 9, 13.5],
            10: [7.5, 8, 9.5, 14],
        };

        const odysseyTable: any = {
            5: [6.5, 7, 8.5, 13],
            7: [7.5, 8, 9.5, 14],
            10: [8.5, 9, 10.5, 15],
        };

        const selectedTable = accTypes === "Orbit" ? orbitTable : odysseyTable;

        let apyValue;

        if (interestState === "Monthly") {
            apyValue = selectedTable[termState][0];
        } else if (interestState === "Quarterly") {
            apyValue = selectedTable[termState][1];
        } else if (interestState === "Annually") {
            apyValue = selectedTable[termState][2];
        } else if (interestState === "Term") {
            apyValue = selectedTable[termState][3];
        }

        return apyValue;
    };

    const calcApyAnual = () => {
        const orbitTable: any = {
            5: [5.5, 6, 7.5, 12],
            7: [7, 7.5, 9, 13.5],
            10: [7.5, 8, 9.5, 14],
        };

        const odysseyTable: any = {
            5: [6.5, 7, 8.5, 13],
            7: [7.5, 8, 9.5, 14],
            10: [8.5, 9, 10.5, 15],
        };

        const selectedTable = accTypes === "Orbit" ? orbitTable : odysseyTable;

        let apyValue;

        apyValue = selectedTable[termState][2];

        return apyValue;
    };

    const calcEarned = () => {
        const apy = calcApy();
        let numericValue = parseFloat(deposit.replace(/,/g, ""));

        if (
            (accTypes === "Orbit" && numericValue < 50000) ||
            (accTypes === "Odyssey" && numericValue < 100000)
        ) {
            numericValue = 0;
        }

        const interest = +numericValue * (apy / 100) * +termState;

        const totalAmount = +numericValue + +interest;

        return {
            interest: Number(interest.toFixed(2)),
            totalAmount: Number(totalAmount.toFixed(2)),
        };
    };

    const generateDataPoints = () => {
        const sortedDataPoints = [];
        const numericValue = parseFloat(deposit.replace(/,/g, ""));
        switch (interestState) {
            case "Monthly":
                for (let i = 1; i <= 12; i++) {
                    const interest = calcEarned().interest;
                    const totalAmount = numericValue + +interest;
                    const value = Number(
                        (
                            numericValue +
                            (totalAmount - numericValue) * (i / +termState / 12)
                        ).toFixed(2)
                    );
                    sortedDataPoints.push({ title: `Month`, value });
                }
                break;
            case "Quarterly":
                for (let i = 1; i <= 4; i++) {
                    const interest = calcEarned().interest;
                    const totalAmount = numericValue + +interest;
                    const value = Number(
                        (
                            numericValue +
                            (totalAmount - numericValue) * (i / +termState / 4)
                        ).toFixed(2)
                    );
                    sortedDataPoints.push({ title: `Quarter`, value });
                }
                break;
            case "Annually":
                for (let i = 1; i <= +termState; i++) {
                    const interest = calcEarned().interest;
                    const totalAmount = numericValue + +interest;
                    const value = Number(
                        (
                            numericValue +
                            (totalAmount - numericValue) * (i / +termState)
                        ).toFixed(2)
                    );
                    sortedDataPoints.push({ title: `Year`, value });
                }
                break;
            case "Term":
                const interest = numericValue * (calcApy() / 100) * +termState;
                const totalAmount = numericValue + interest;
                sortedDataPoints.push({ title: `Term`, value: totalAmount });
                break;
            default:
                return [];
        }
        return sortedDataPoints;
    };

    const dataPoints = useMemo(
        () => generateDataPoints(),
        [interestState, accTypes, interestState, deposit, termState]
    );

    function GenerateCenterInfo() {
        return (
            <>
                <div className={styles.center_info_details}>
                    <div className={styles.main_right_header_info_earned_number}>
                        ${" "}
                        {interestState === "Monthly"
                            ? new Intl.NumberFormat("en-US").format(
                                Number((calcEarned().interest / +termState / 12).toFixed(0))
                            )
                            : 0}
                    </div>
                    <div className={styles.main_right_header_info_earned_text}>
                        Monthly
                    </div>
                </div>
                <div className={styles.center_line_one}></div>
                <div className={styles.center_info_details}>
                    <div className={styles.main_right_header_info_earned_number}>
                        ${" "}
                        {interestState === "Quarterly" || interestState === "Monthly"
                            ? new Intl.NumberFormat("en-US").format(
                                Number((calcEarned().interest / +termState / 4).toFixed(0))
                            )
                            : 0}
                    </div>
                    <div className={styles.main_right_header_info_earned_text}>
                        Quarterly
                    </div>
                </div>
                <div className={styles.center_line_one}></div>
                <div className={styles.center_info_details}>
                    <div className={styles.main_right_header_info_earned_number}>
                        ${" "}
                        {interestState === "Annually" ||
                            interestState === "Quarterly" ||
                            interestState === "Monthly"
                            ? new Intl.NumberFormat("en-US").format(
                                Number((calcEarned().interest / +termState).toFixed(0))
                            )
                            : 0}
                    </div>
                    <div className={styles.main_right_header_info_earned_text}>
                        Yearly
                    </div>
                </div>
                {/*<div className={styles.center_line_one}></div>
                    <div className={styles.center_info_details}>
                        <div className={styles.main_right_header_info_earned_number}>
                            ${' '}
                            {new Intl.NumberFormat('en-US').format(
                                Number(calcEarned().interest.toFixed(0))
                            )}
                        </div>
                        <div className={styles.main_right_header_info_earned_text}>Term</div>
                    </div>
                    */}
            </>
        );
    }

    function CustomTooltip({
        payload,
        label,
        active,
    }: {
        payload?: Array<{ payload: { title: string; value: number } }>;
        label?: number;
        active?: boolean;
    }) {
        console.log(payload, label, active);

        const numericValue = parseFloat(deposit.replace(/,/g, ""));

        if (active && payload) {
            const { title, value } = payload[0].payload;

            return (
                <div className={styles.custom_tooltip}>
                    <p className="label">{`${title} - ${(label || 0) + 1}`}</p>
                    <p className="intro">{`Interest - $${new Intl.NumberFormat(
                        "en-US"
                    ).format(value - numericValue)}`}</p>
                    <p className="desc">{`Total - $${new Intl.NumberFormat(
                        "en-US"
                    ).format(value)}`}</p>
                </div>
            );
        }

        return null;
    }

    return (
        <div className={styles.calculate}>
            <div className={styles.main}>
                <div className={styles.main_left}>
                    <form className={styles.main_left_form}>
                        <div>
                            <label>Account Type</label>
                            <SelectPicker
                                data={accountTypes}
                                searchable={false}
                                defaultValue={accTypes}
                                style={{ width: "100%", opacity: 0.9 }}
                                className={styles.SelectPicker}
                                onChange={(e) => {
                                    if (e === "Orbit") {
                                        setAccTypes(e);
                                        setDeposit("50,000");
                                    } else if (e === "Odyssey") {
                                        setAccTypes(e);
                                        setDeposit("100,000");
                                    }
                                }}
                                onClean={() => {
                                    setAccTypes("Odyssey");
                                }}
                            />
                        </div>
                        <div>
                            <label>Deposit Amount</label>
                            <InputGroup>
                                <InputGroup.Addon>$</InputGroup.Addon>
                                <Input
                                    className={styles.input_group}
                                    // defaultValue={
                                    // 	typeof deposit === 'string'
                                    // 		? deposit
                                    // 		: new Intl.NumberFormat('en-US').format(deposit)
                                    // }
                                    min={accTypes === "Orbit" ? "50,000" : "100,000"}
                                    value={
                                        typeof deposit === "string"
                                            ? deposit
                                            : new Intl.NumberFormat("en-US").format(deposit)
                                    }
                                    onChange={(e) => {
                                        if (e === "") {
                                            setDeposit(new Intl.NumberFormat("en-US").format(0));
                                        } else {
                                            setDeposit(
                                                new Intl.NumberFormat("en-US").format(
                                                    parseFloat(e.replace(/,/g, ""))
                                                )
                                            );
                                        }
                                    }}
                                />
                            </InputGroup>
                            {(() => {
                                if (typeof deposit === "string") {
                                    const numericValue = parseFloat(deposit.replace(/,/g, ""));
                                    if (accTypes === "Orbit" && numericValue < 50000) {
                                        return (
                                            <p className={styles.error}>Minimum Deposit is $50,000</p>
                                        );
                                    }
                                    if (accTypes === "Odyssey" && numericValue < 100000) {
                                        return (
                                            <p className={styles.error}>
                                                Minimum Deposit is $100,000
                                            </p>
                                        );
                                    }
                                }

                                return null;
                            })()}
                            {/* <InputNumber
                                    prefix='$'
                                    className={styles.input_group}
                                    defaultValue={parseInt(deposit)}
                                    min={accTypes === 'Orbit' ? 50000 : 100000}
                                    value={+deposit}
                                    onChange={e => {
                                        setDeposit(e);
                                    }}
                                /> */}
                        </div>
                        <div>
                            <label>Term Length</label>
                            <SelectPicker
                                data={terms}
                                searchable={false}
                                defaultValue={termState}
                                style={{ width: "100%" }}
                                className={styles.input_group}
                                onChange={(e) => {
                                    if (e !== null) {
                                        setTermState(e);
                                    }
                                }}
                                onClean={(e) => {
                                    setTermState("5");
                                }}
                            />
                        </div>
                        <div className={styles.main_left_form_apy}>
                            <label>APY</label>
                            <p>{calcApy()}%</p>
                        </div>
                        <div>
                            <label>Interest Distribution Schedule</label>
                            <SelectPicker
                                data={interests}
                                searchable={false}
                                defaultValue={interestState}
                                style={{ width: "100%", opacity: 0.9 }}
                                className={styles.input_group}
                                onChange={(e) => {
                                    if (e !== null) {
                                        setInterestState(e);
                                    }
                                }}
                                onClean={() => {
                                    setInterestState("Monthly");
                                }}
                            />
                        </div>
                    </form>
                </div>
                <div className={styles.center}>
                    <div className={styles.center_line}></div>
                </div>
                <div className={styles.center_info}>
                    <GenerateCenterInfo />
                </div>
                <div className={styles.center}>
                    <div className={styles.center_line}></div>
                </div>
                <div className={styles.main_right}>
                    <div className={styles.main_right_header_info}>
                        <div className={styles.main_right_header_info_earned} style={{marginBottom: '20px'}}>
                            <div
                                className={styles.main_right_header_info_earned_number}
                            >{`$ ${new Intl.NumberFormat("en-US").format(
                                Number(calcEarned().interest.toFixed(0))
                            )}`}</div>
                            <div className={styles.main_right_header_info_earned_text}>
                                Total Interest Earned
                            </div>
                        </div>
                        <div className={styles.main_right_header_info_balance}>
                            <div
                                className={styles.main_right_header_info_balance_number}
                            >{`$ ${new Intl.NumberFormat("en-US").format(
                                Number(calcEarned().totalAmount.toFixed(0))
                            )}`}</div>
                            <div className={styles.main_right_header_info_balance_text}>
                                Total Balance
                            </div>
                        </div>
                    </div>
                    <div className={styles.middle}>
                        <div className={styles.middle_line}></div>
                    </div>
                    <div className={styles.main_right_stats_wrapper}>
                        <div className={styles.main_right_stats}>
                            <ResponsiveContainer>
                                <LineChart width={500} height={225} data={dataPoints}>
                                    {/* <XAxis dataKey={getXAxisDataKey()} />
                                <YAxis /> */}
                                    <Tooltip content={<CustomTooltip />} />
                                    {/* <Legend /> */}
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke="white"
                                        fill="white"
                                        dot={{ r: 4, filter: "url(#glow)" }}
                                    />
                                    <defs>
                                        <filter
                                            id="glow"
                                            x="-50%"
                                            y="-80%"
                                            width="300%"
                                            height="300%"
                                        >
                                            <feGaussianBlur result="blur" stdDeviation="4" />
                                            <feMerge>
                                                <feMergeNode in="blur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div
                        className={styles.main_right_header_info_earned_number}
                    >{`Compounding Interest Option`}</div>
                    <div
                        className={styles.main_right_header_info_earned}
                        style={{ marginTop: "20px", marginBottom: "20px" }}
                    >
                        <div className={styles.main_right_header_info_earned_text}>
                            If all interest distributions are reinvested in the {accTypes}{" "}
                            account for the entirety of the {termState} years period your
                            compounded returns will equal <br></br>{" "}
                        </div>
                        <div
                            className={styles.main_right_header_info_earned_number}
                            style={{ marginTop: "20px" }}
                        >{`$ ${new Intl.NumberFormat("en-US").format(
                            Number(
                                calcularInteresCompuestoReinversion(
                                    parseFloat(deposit.replace(/,/g, "")),
                                    Number(parseFloat(termState.replace(/,/g, ""))),
                                    calcApyAnual() / 100
                                ).toFixed(0)
                            )
                        )}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
