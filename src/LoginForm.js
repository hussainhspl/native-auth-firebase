import React from 'react';
import {View, Text } from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false,
	};

	onButtonPress() {

		const {email, password } = this.state;
		this.setState({ error: '', loading: true })
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))			
					.catch( this.onLoginFail.bind(this))
			});
	}

	onLoginSuccess() {
		console.log("success");
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: 'Success',
		})
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication failed',
			loading: false,

		})
	}

	renderButton() {
		if(this.state.loading) {
			return <Spinner size='small' />
		}
		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Log in
			</Button>
		);
	}
	render() {
		return(
			<Card>
				<CardSection>
					<Input
						label= "Email"
						placeholder= "user@gmail.com"
						value={this.state.email} 
						onChangeText={email => this.setState({ email })} 
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label= "Password"
						placeholder= "*****"
						value={this.state.password} 
						onChangeText={password => this.setState({ password })} 
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}> {this.state.error}</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>

			</Card>
		)
	}
}

const styles = {
	errorTextStyle : {
		fontSize: 20,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		textAlign: 'center',
		color: 'red',
		padding: 10
	}
}
export default LoginForm;