import React, {Component} from 'react';
import {
  Button, 
  StyleSheet, 
  Text, 
  View,
  TextInput, 
  Keyboard, 
  Alert, 
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Animals from './components/Animals';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        currentScreen: 'welcome',
        type: '',
        breed: '',
        gender: '',
        description: '',
        extraInfo: '',
        discoveryLocation: '',
        time: '', // MM:HH
        discoveryDate: '', // DD/MM/YYYY
        pickUpLocation: '', 
        firstName: '',
        lastName: '',
        phone: '',
        email: '', 
      };
    
  this.handleTypeChange = this.handleTypeChange.bind(this);
  this.handleBreedChange = this.handleBreedChange.bind(this);
  this.handleGenderChange = this.handleGenderChange.bind(this);
  this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  this.handleExtraInfoChange = this.handleExtraInfoChange.bind(this);
  this.handleDiscoveryLocationChange = this.handleDiscoveryLocationChange.bind(this);
  this.handleTimeChange = this.handleTimeChange.bind(this);
  this.handleDiscoveryDateChange = this.handleDiscoveryDateChange.bind(this);
  this.handlePickUpLocationChange = this.handlePickUpLocationChange.bind(this);
  this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  this.handleLastNameChange = this.handleLastNameChange.bind(this);
  this.handlePhoneChange = this.handlePhoneChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.onPressAddNewAnimal = this.onPressAddNewAnimal.bind(this);
  this.onPressSubmitInfo = this.onPressSubmitInfo.bind(this);
  this.onPressConfirmInfo = this.onPressConfirmInfo.bind(this);
  this.onPressCancelInfo = this.onPressCancelInfo.bind(this);
  this.onPressBackHome = this.onPressBackHome.bind(this);
  this.onPressShowAnimals = this.onPressShowAnimals.bind(this);

  }
  handleTypeChange(type) {
    this.setState({ type });
  }
  handleBreedChange(breed) {
    this.setState({ breed });
  }
  handleGenderChange(gender) {
    this.setState({ gender });
  }
  handleDescriptionChange(description) {
    this.setState({ description });
  }
  handleExtraInfoChange(extraInfo) {
    this.setState({ extraInfo });
  }
  handleDiscoveryLocationChange(discoveryLocation) {
    this.setState({ discoveryLocation });
  }
  handleTimeChange(time) {
    this.setState({ time });
  }
  handleDiscoveryDateChange(discoveryDate) {
    this.setState({ discoveryDate });
  }
  handlePickUpLocationChange(pickUpLocation) {
    this.setState({ pickUpLocation });
  }
  handleFirstNameChange(firstName) {
    this.setState({ firstName });
  }
  handleLastNameChange(lastName) {
    this.setState({ lastName });
  }
  handlePhoneChange(phone) {
    this.setState({ phone });
  }
  handleEmailChange(email) {
    this.setState({ email });
  }
  // NAPPULAT ALKAA BUTTON START

  onPressShowAnimals() { // a list of saved animals 
    this.setState({ currentScreen: 'showAnimals' });
  }
  onPressBackHome() { 
    this.setState({ currentScreen: 'welcome' });
  }
  onPressAddNewAnimal() { // form screen for new animal
    this.setState({ currentScreen: 'addNewAnimal' });
  }
  onPressSubmitInfo() { // submit info
    this.setState({ currentScreen: 'confirm' }); // textinput validation here?
  }
  onPressCancelInfo() { // cancel submit -> back to home screen
    this.setState({ currentScreen: 'welcome' });
    this.setState({ // update view -> empty textinputs
      type: '',
      breed: '',
      gender: '',
      description: '',
      extraInfo: '',
      discoveryLocation: '',
      time: '',
      discoveryDate: '',
      pickUpLocation: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '', 
    })  
  }
  onPressConfirmInfo() { // confirm info. in the future the data goes also to the database
    this.setState({ currentScreen: 'welcome' });
        Alert.alert(
            'Tiedot vahvistettu!', // headline of the warning
            'Löytynyt eläin on lisätty tietoihimme', // "animal has been added"
            //[{text: 'Ok :)', style: 'destructive', 
        );
    this.setState({ // update view -> empty textinputs
        type: '',
        breed: '',
        gender: '',
        description: '',
        extraInfo: '',
        discoveryLocation: '',
        time: '',
        discoveryDate: '',
        pickUpLocation: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '', 
      }) 
  }
  // NAPPULAT PÄÄTTYY BUTTON END

  // SCREENIT ALKAA SCREEN START
  
  renderHomeScreen() { 
    return (
      <View style={styles.screen}>
        <View style={styles.textContainer}>
          <Text>Tervetuloa löytöeläintalo Löytölään</Text>
        </View>
        <View style={styles.lonelyButton}>
          <Button
            onPress={this.onPressAddNewAnimal} 
            title="Lisää uusi eläin" 
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Näytä eläimet"
              onPress={this.onPressShowAnimals}
            />
          </View>
          <View style={styles.button}> 
            <Button title="Häkkipaikat" // not in use
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Raportit" // not in use
            />
          </View>
          <View style={styles.button}>  
            <Button title="Luovuta eläin" // not in use
            />
          </View>
        </View>
      </View>
    );
  }

// textinput validation, location (api-keyd needed!) and camera can be added
  renderFormScreen() { 
    return (
      <TouchableWithoutFeedback onPress={() => {
        // touchin the screen, keyboard will dismiss. ios/android
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled 
      // keyboard doesn't go on top of the view. it moves the view up as much as needed
      >
      <View style={styles.screen} >
        <View style={styles.formScreen}>
          <Text>Eläimen tiedot</Text>
        </View>
        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Laji"
              maxLength={20}
              autoCorrect={false}
              keyboardType="default"
              value={this.state.type}
              onChangeText={this.handleTypeChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Rotu"
              maxLength={20}
              autoCorrect={false}
              keyboardType="default"
              value={this.state.breed}
              onChangeText={this.handleBreedChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Sukupuoli"
              maxLength={20}
              autoCorrect={false}
              keyboardType="default"
              value={this.state.gender}
              onChangeText={this.handleGenderChange}
            />
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea} 
                placeholder="Tuntomerkit"
                multiline={true}
                numberOfLines={3}
                autoCorrect={false}
                keyboardType="default"
                value={this.state.description}
                onChangeText={this.handleDescriptionChange}
              />
            </View>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea} 
                placeholder="Lisätiedot"
                multiline={true}
                numberOfLines={5}
                autoCorrect={false}
                keyboardType="default"
                value={this.state.extraInfo}
                onChangeText={this.handleExtraInfoChange}
              />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Löytöpaikka"
              maxLength={20}
              autoCorrect={false}
              keyboardType="default"
              value={this.state.discoveryLocation}
              onChangeText={this.handleDiscoveryLocationChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Löytöaika (HH:MM)"
              maxLength={20}
              autoCorrect={false}
              keyboardType="numbers-and-punctuation"
              value={this.state.time}
              onChangeText={this.handleTimeChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Löytöpäivä (pp.kk.yyy)"
              maxLength={20}
              autoCorrect={false}
              keyboardType="numbers-and-punctuation"
              value={this.state.discoveryDate}
              onChangeText={this.handleDiscoveryDateChange}
            />           
            <TextInput
              style={styles.textInput}
              placeholder="Noutopaikka"
              maxLength={20}
              autoCorrect={false}
              keyboardType="default"
              value={this.state.pickUpLocation}
              onChangeText={this.handlePickUpLocationChange}
            />
            <View style={styles.formScreen}>
              <Text>Löytäjän tiedot</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Etunimi"
              maxLength={20}
              autoCorrect={false}
              keyboardType="default"
              value={this.state.firstName}
              onChangeText={this.handleFirstNameChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Sukunimi"
              maxLength={20}
              autoCorrect={false}
              keyboardType="default"
              value={this.state.lastName}
              onChangeText={this.handleLastNameChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Puhelin"
              maxLength={20}
              autoCorrect={false}
              keyboardType="numeric" // keyboard with numbers
              value={this.state.phone}
              onChangeText={this.handlePhoneChange}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Sähköposti"
              maxLength={20}
              autoCorrect={false}
              autoCapitalize = 'none' // email starts with lowercase
              keyboardType="email-address" // only iOS
              value={this.state.email}
              onChangeText={this.handleEmailChange}
            />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              onPress={this.onPressCancelInfo}
              title="Peruuta" 
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this.onPressSubmitInfo} 
              title="Lähetä tiedot" // -> ConfirmScreen
            />
          </View>
        </View>                
      </View>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
  renderShowAnimalsScreen() { 
    return (
      <View style={styles.screen}>
        <Animals // a list of saved animals
        />
        <View style={styles.button}>
            <Button
              onPress={this.onPressBackHome}
              title="Takaisin"
            />
         </View>
      </View>
    );
  } 
  renderConfirmScreen() {  // confirm the info
    return ( 
      <View style={styles.screen}>
          <Text>Laji: {this.state.type}</Text>
          <Text>Rotu: {this.state.breed}</Text>
          <Text>Sukupuoli: {this.state.gender}</Text>
          <Text>Tuntomerkit: {this.state.description}</Text>
          <Text>Tuntomerkit: {this.state.extraInfo}</Text>
          <Text>Löytöpaikka: {this.state.discoveryLocation}</Text>
          <Text>Löytoaika: {this.state.time}</Text>
          <Text>Löytopäivä: {this.state.discoveryDate}</Text>
          <Text>Noutopaikka: {this.state.pickUpLocation}</Text>
          <Text>Etunimi: {this.state.firstName}</Text>
          <Text>Sukunimi: {this.state.lastName}</Text>
          <Text>Puhelin: {this.state.phone}</Text>
          <Text>Sähköposti: {this.state.email}</Text>
        
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                onPress={this.onPressCancelInfo}
                title="Peruuta" 
              />
            </View>
            <View style={styles.button}>
              <Button 
                onPress={this.onPressAddNewAnimal} // info can be modified with this button
                title="Muokkaa"  
              />
            </View>
          </View>
          <View style={styles.lonelyButton}>
              <Button // some day the data will go to the database. now it won't be stored
                onPress={this.onPressConfirmInfo}  
                title="Vahvista"
              />
            </View>
      </View>
    ); 
  }
  render() { // navigation system. Header and Footer always on screen
  const { currentScreen } = this.state; 
  return (  
    <View style={styles.container}>
      <Header title="Löytöeläintalo Löytölä"/>
        { currentScreen === 'welcome' && this.renderHomeScreen() }
        { currentScreen === 'addNewAnimal' && this.renderFormScreen() }
        { currentScreen === 'confirm' && this.renderConfirmScreen() }
        { currentScreen === 'showAnimals' && this.renderShowAnimalsScreen() }
      <Footer title="Löydämme kaikki" />
    </View>
  );
  }
}

// SCREENIT LOPPUU SCREEN END

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  formScreen: {
    fontSize: 12,
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    //flexDirection: 'row',
    width: 115,
    //justifyContent: 'space-between',
    //paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 30,
    borderColor: 'black', 
    borderWidth: 1,
    maxWidth: '80%',
    borderRadius: 10, //kulmien pyöristys
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    maxWidth: '80%',
    //marginRight: 50,
  },
  screen: {
    flex: 1, // ottaa kaiken mahd tilan headerin alta
    //padding: 10,
    //justifyContent: 'center',
    
  },
  textContainer: {
    alignItems: 'center',
    fontSize: 20
  },
  lonelyButton: {
    marginTop: 30,
    marginLeft: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: 'black', 
    borderWidth: 1,
    width:'80%',
    borderRadius: 10, //kulmien pyöristys
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start"
  },
  textAreaContainer: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
  }
});
