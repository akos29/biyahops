import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import contactStyle from '../styles/Contact.module.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Row, Col } from 'react-bootstrap';

import { init } from 'emailjs-com';

init('user_Id41zcfbM2Am99QJmXKSe');

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ' ';

const Contact = () => {
	const cx = (...classNames) => classNames.join(' ');

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// Function that displays a success toast on bottom right of the page when form submission is successful
	const toastifySuccess = () => {
		toast('Form sent!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: 'submit-feedback success',
			toastId: 'notifyToast',
		});
	};

	// Function called on submit that uses emailjs to send email of valid contact form
	const onSubmit = async (data) => {
		// Destrcture data object
		const { name, email, subject, message } = data;
		try {
			const templateParams = {
				name,
				email,
				subject,
				message,
			};

			await emailjs.send(
				/* process.env.REACT_APP_SERVICE_ID */ 'service_rogyb59',
				/* 	process.env.REACT_APP_TEMPLATE_ID */ 'template_ddx3jvn',
				templateParams,
				process.env.REACT_APP_USER_ID
			);
			console.log(process.env.REACT_APP_TEMPLATE_ID);
			reset();
			toastifySuccess();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Container fluid className={contactStyle.contain}>
				<Container>
					<h1 className={cx(contactStyle.header, 'ip-5')}>Welcome</h1>
					<p className={cx(contactStyle.text, 'ip-5')}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
						eveniet laborum ipsam incidunt. Tenetur accusamus eligendi nisi
						dignissimos esse rerum. Omnis sapiente hic illo et quo quis, quidem
						blanditiis fugiat?
					</p>
				</Container>
			</Container>

			<div className='ContactForm'>
				<div className={contactStyle.container}>
					<div
						className={cx(
							contactStyle.contactForm,
							'text-center ip-3',
							contactStyle.item
						)}
					>
						<div className={cx(contactStyle.contactForm)}>
							<form
								id='contact-form ip-3'
								onSubmit={handleSubmit(onSubmit)}
								noValidate
							>
								{/* Row 1 of form */}
								{/* <div className='row formRow ip-5'> */}
								<div className='ip-3 '>
									<input
										type='text'
										name='name'
										{...register('name', {
											required: {
												value: true,
												message: 'Please enter your name',
											},
											maxLength: {
												value: 30,
												message: 'Please use 30 characters or less',
											},
										})}
										className='form-control formInput'
										placeholder='Name'
									></input>
									{errors.name && (
										<span className='errorMessage'>{errors.name.message}</span>
									)}
								</div>
								<div className='ip-3'>
									<input
										type='email'
										name='email'
										{...register('email', {
											required: true,
											pattern:
												/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
										})}
										className='form-control formInput'
										placeholder='Email address'
									></input>
									{errors.email && (
										<span className='errorMessage'>
											Please enter a valid email address
										</span>
									)}
								</div>
								{/* 	</div> */}
								{/* Row 2 of form */}
								<div className='row formRow ip-3'>
									<div className='col'>
										<input
											type='text'
											name='subject'
											{...register('subject', {
												required: {
													value: true,
													message: 'Please enter a subject',
												},
												maxLength: {
													value: 75,
													message: 'Subject cannot exceed 75 characters',
												},
											})}
											className='form-control formInput'
											placeholder='Subject'
										></input>
										{errors.subject && (
											<span className='errorMessage'>
												{errors.subject.message}
											</span>
										)}
									</div>
								</div>
								{/* Row 3 of form */}
								<div className='row formRow ip-3'>
									<div className='col'>
										<textarea
											rows={3}
											name='message'
											{...register('message', {
												required: true,
											})}
											className='form-control formInput'
											placeholder='Message'
										></textarea>
										{errors.message && (
											<span className='errorMessage'>
												Please enter a message
											</span>
										)}
									</div>
								</div>
								<Button className='submit-btn' variant='primary' type='submit'>
									Submit
								</Button>
							</form>
						</div>
						<ToastContainer />
					</div>
					<div className={contactStyle.item}>
						<img src={prefix + '/digital-world-map.jpg'} alt='' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
