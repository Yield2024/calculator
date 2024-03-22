'use client';
import { Checkbox, Input, InputGroup, InputNumber, SelectPicker } from 'rsuite';
import styles from './calc.module.scss';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useMemo, useState } from 'react';
import 'rsuite/SelectPicker/styles/index.css';
import 'rsuite/InputNumber/styles/index.css';
import 'rsuite/InputGroup/styles/index.css';
import { Button } from '../components/ui/buttons';

const defaultData = [
	{ id: 4, value: 95, label: 'Principal and interest' },
	{ id: 3, value: 5, label: 'PMI' },
	{ id: 2, value: 0, label: 'Property taxes' },
	{ id: 1, value: 0, label: 'Insurance' },
	{ id: 0, value: 0, label: 'HOA fees' },
];

export default function Calc() {
	const [data, setData] = useState(defaultData);
	const [total, setTotal] = useState('0');
	const [home, setHome] = useState('300,000');
	const [paymentsDollar, setPaymentsDollar] = useState('50,000');
	const [interest, setInterest] = useState(5);
	const [paymentsPercent, setPaymentsPercent] = useState(17);
	const [loan, setLoan] = useState(10);
	const [military, setMilitary] = useState(false);
	const [taxes, setTaxes] = useState('0');
	const [insurence, setInsurence] = useState('0');
	const [fees, setFees] = useState('0');

	const terms = useMemo(
		() =>
			[10, 15, 20, 30].map(item => ({ label: `${item} Years`, value: item })),
		[]
	);

	const updateValueById = (id: any, updatedValue: any) => {
		const indexToUpdate = data.findIndex(item => item.id === id);

		if (indexToUpdate !== -1) {
			data[indexToUpdate].value = updatedValue;
		}
	};

	const calcPAI = () => {
		const monthlyInterestRate = interest / 12 / 100;
		const numberOfPayments = loan * 12;
		const amount =
			parseFloat(home.replace(/,/g, '')) -
			parseFloat(paymentsDollar.replace(/,/g, ''));

		const monthlyPayment =
			(amount * monthlyInterestRate) /
			(1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

		return monthlyPayment.toFixed(2);
	};

	const generateDataPoints = () => {
		const pai = Math.round(+calcPAI());
		const totalAmount = parseFloat(home.replace(/,/g, ''));
		const totalTaxes = parseFloat(taxes.replace(/,/g, ''));
		const totalInsurence = parseFloat(insurence.replace(/,/g, ''));
		const totalFees = parseFloat(fees.replace(/,/g, ''));

		const sum = military ? pai + totalTaxes + totalInsurence + totalFees :  pai + totalTaxes + totalInsurence + totalFees + Math.round((totalAmount * 0.045) / 100);
		setTotal(sum.toFixed(2));

		const paiPercentage = (pai / sum) * 100;
		const totalTaxesPercentage = (totalTaxes / sum) * 100;
		const totalInsurencePercentage = (totalInsurence / sum) * 100;
		const totalFeesPercentage = (totalFees / sum) * 100;
		const totalPMIPercentage = military ? 0 : (Math.round((totalAmount * 0.045) / 100) / sum) * 100;

		updateValueById(4, paiPercentage.toFixed(0));
		updateValueById(3, totalPMIPercentage.toFixed(0));
		updateValueById(2, totalTaxesPercentage.toFixed(0));
		updateValueById(1, totalInsurencePercentage.toFixed(0));
		updateValueById(0, totalFeesPercentage.toFixed(0));
	};

	const calcPMI = () => {
		const totalAmount = parseFloat(home.replace(/,/g, ''));
		return Math.round((totalAmount * 0.045) / 100).toFixed(2);
	};

	const dataPoints = useMemo(
		() => generateDataPoints(),
		[home, paymentsDollar, interest, loan, military, taxes, insurence, fees]
	);

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.header}>Mortgage Calculator</h1>
			<p className={styles.header_details}>Get a sense of costs of buying a home with our monthly mortgage calculator</p>
			<div className={styles.calculator}>
				<div className={styles.left}>
					<form className={styles.form}>
						<div className={styles.half}>
							<div className={styles.input}>
								<p className={styles.input_title}>Home price</p>
								<InputGroup>
									<InputGroup.Addon>$</InputGroup.Addon>
									<Input
										className={styles.input_group}
										value={
											typeof home === 'string'
												? home
												: new Intl.NumberFormat('en-US').format(home)
										}
										onChange={e => {
											if (e === '') {
												setHome(new Intl.NumberFormat('en-US').format(0));
											} else {
												setHome(
													new Intl.NumberFormat('en-US').format(
														parseFloat(e.replace(/,/g, ''))
													)
												);
											}
										}}
									/>
								</InputGroup>
							</div>
							<div className={styles.input}>
								<p className={styles.input_title}>Down Payment($)</p>
								<InputGroup>
									<InputGroup.Addon>$</InputGroup.Addon>
									<Input
										className={styles.input_group}
										value={
											typeof paymentsDollar === 'string'
												? paymentsDollar
												: new Intl.NumberFormat('en-US').format(paymentsDollar)
										}
										onChange={e => {
											if (e === '') {
												setPaymentsPercent(0);
												setPaymentsDollar(
													new Intl.NumberFormat('en-US').format(0)
												);
											} else {
												const numericValue = parseFloat(e.replace(/,/g, ''));
												const maxValue = parseFloat(home.replace(/,/g, ''));

												if (numericValue < maxValue) {
													const sum = (numericValue / maxValue) * 100;
													setPaymentsPercent(Math.round(sum));
													setPaymentsDollar(
														new Intl.NumberFormat('en-US').format(
															parseFloat(e.replace(/,/g, ''))
														)
													);
												} else {
													setPaymentsPercent(100);
													setPaymentsDollar(
														new Intl.NumberFormat('en-US').format(
															parseFloat(home.replace(/,/g, ''))
														)
													);
												}
											}
										}}
									/>
								</InputGroup>
							</div>
							<div className={styles.input}>
								<p className={styles.input_title}>Interest Rate</p>
								<InputGroup>
									<Input
										className={styles.input_group}
										value={interest}
										onChange={e => {
											if (+e >= 20) {
												setInterest(20);
											} else if (+e > 0) {
												setInterest(+e);
											} else {
												setInterest(1);
											}
										}}
									/>
									<InputGroup.Addon>%</InputGroup.Addon>
								</InputGroup>
							</div>
						</div>
						<div className={styles.half}>
							<div className={styles.input}>
								<p className={styles.input_title}>Down Payment(%)</p>
								<InputGroup>
									<Input
										className={styles.input_group}
										value={paymentsPercent}
										onChange={e => {
											const number = parseFloat(home.replace(/,/g, ''));

											if (+e >= 100) {
												setPaymentsDollar(
													new Intl.NumberFormat('en-US').format(number)
												);
												setPaymentsPercent(100);
											} else {
												const sum = (+e / 100) * number;
												console.log(sum);
												setPaymentsPercent(+e);
												setPaymentsDollar(
													new Intl.NumberFormat('en-US').format(Math.round(sum))
												);
											}
										}}
									/>
									<InputGroup.Addon>%</InputGroup.Addon>
								</InputGroup>
							</div>
							<div className={styles.input}>
								<p className={styles.input_title}>Loan Term</p>
								<SelectPicker
									data={terms}
									searchable={false}
									defaultValue={loan}
									style={{ width: '100%', opacity: 0.9 }}
									className={styles.input_group}
									onChange={e => {
										if (e !== null) {
											setLoan(e);
										}
									}}
									onClean={() => {
										setLoan(10);
									}}
								/>
							</div>
							<div className={styles.input}>
								<p className={styles.input_title}>Military Veteran</p>
								<Checkbox
									value={military ? 'yes' : 'no'}
									onChange={() => setMilitary(!military)}
								/>
							</div>
						</div>
					</form>
					<p className={styles.underform}>
						Improve the accuracy of your monthly payment estimate by contacting
						a loan expert
					</p>
					<Button className='default_button'>Apply Now</Button>
				</div>
				<div className={styles.vertical_line}></div>
				<div className={styles.center}>
					<h5>${total}</h5>
					<p>Your monthly payment</p>
					<div className={styles.horizontal_line}></div>
					<div className={styles.circle_wrapper}>
						<PieChart
							className='123'
							series={[
								{
									data,
									highlightScope: { faded: 'global', highlighted: 'item' },
									innerRadius: 40,
									outerRadius: 100,
									paddingAngle: 0,
									cornerRadius: 5,
									startAngle: 360,
									endAngle: 0,
									cx: 150,
									cy: 150,
									faded: { innerRadius: 45, additionalRadius: 0 },
								},
							]}
							height={300}
							legend={{ hidden: true }}
						/>
					</div>
				</div>
				<div className={styles.vertical_line}></div>

				<div className={styles.right}>
					<div className={styles.right_input}>
						<p className={styles.input_details}>{`$${calcPAI()}`}</p>
						<p className={styles.input_title}>Principal and interest</p>
					</div>
					<div className={styles.horizontal_line}></div>
					<div className={styles.right_input}>
						<p className={styles.input_details}>{`$${military ? 0 : calcPMI()}`}</p>
						<p className={styles.input_title}>PMI</p>
					</div>
					<div className={styles.horizontal_line}></div>
					<div className={styles.right_input}>
						<InputGroup>
							<InputGroup.Addon>$</InputGroup.Addon>
							<Input
								className={styles.input_group}
								value={
									typeof taxes === 'string'
										? taxes
										: new Intl.NumberFormat('en-US').format(taxes)
								}
								onChange={e => {
									if (e === '') {
										setTaxes(new Intl.NumberFormat('en-US').format(0));
									} else {
										setTaxes(
											new Intl.NumberFormat('en-US').format(
												parseFloat(e.replace(/,/g, ''))
											)
										);
									}
								}}
							/>
						</InputGroup>
						<p className={styles.input_title}>Property taxes</p>
					</div>
					<div className={styles.horizontal_line}></div>
					<div className={styles.right_input}>
						<InputGroup>
							<InputGroup.Addon>$</InputGroup.Addon>
							<Input
								className={styles.input_group}
								value={
									typeof insurence === 'string'
										? insurence
										: new Intl.NumberFormat('en-US').format(insurence)
								}
								onChange={e => {
									if (e === '') {
										setInsurence(new Intl.NumberFormat('en-US').format(0));
									} else {
										setInsurence(
											new Intl.NumberFormat('en-US').format(
												parseFloat(e.replace(/,/g, ''))
											)
										);
									}
								}}
							/>
						</InputGroup>
						<p className={styles.input_title}>Insurance</p>
					</div>
					<div className={styles.horizontal_line}></div>
					<div className={styles.right_input}>
						<InputGroup>
							<InputGroup.Addon>$</InputGroup.Addon>
							<Input
								className={styles.input_group}
								value={
									typeof fees === 'string'
										? fees
										: new Intl.NumberFormat('en-US').format(fees)
								}
								onChange={e => {
									if (e === '') {
										setFees(new Intl.NumberFormat('en-US').format(0));
									} else {
										setFees(
											new Intl.NumberFormat('en-US').format(
												parseFloat(e.replace(/,/g, ''))
											)
										);
									}
								}}
							/>
						</InputGroup>
						<p className={styles.input_title}>HOA fees</p>
					</div>
				</div>
			</div>
		</div>
	);
}
