import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from 'react-hook-form';
import { Button, Header, Spacer, RadioButton } from '../../../components';
import { TextInput } from 'react-native-paper';
import { moderateScale, moderateScaleVertical, textScale } from '../../../helper';
import { Colors } from '../../../resources';
import options from './_components/FormOptions';
import RadioWithController from './_components/RadioWithController';
import TextInputWithController from './_components/TextInputWithController';


const ProfileForm = ({ route }) => {
  const { taskId } = route.params;
  const { control, handleSubmit, watch } = useForm();
  const addressTraced = watch('addressTraced');
  const companyExists = watch('companyExists');
  const entryAllowed = watch('entryAllowed');
  const colleagueDetails = watch('colleagueDetails');

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Office Profile</Text>
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.formContainer}>
          <RadioWithController
            name="addressTraced"
            control={control}
            options={options.addressTraced}
            label="Address Traced:"
          />

          {addressTraced && (
            <View>
              <Text> Img 1</Text>
              <Text> Img 2</Text>
            </View>
          )}

          {addressTraced === 'yes' && (
            <>
              <RadioWithController
                name="companyExists"
                control={control}
                options={options.companyExists}
                label="Company exists:"
              />

              {companyExists === 'yes' && (
                <>
                  <RadioWithController
                    name="entryAllowed"
                    control={control}
                    options={options.entryAllowed}
                    label="Entry Allowed:"
                  />

                  {entryAllowed === 'yes' && (
                    <>
                      <TextInputWithController
                        name="firstColleague"
                        control={control}
                        label="1st Colleague Name and Designation:"
                        placeholder="Enter name and designation"
                      />

                      <TextInputWithController
                        name="secondColleague"
                        control={control}
                        label="2nd Colleague Name and Designation:"
                        placeholder="Enter name and designation"
                      />

                      <RadioWithController
                        name="colleagueDetails"
                        control={control}
                        options={options.colleagueDetails}
                        label="Details shared by colleagues about applicant:"
                      />

                      {colleagueDetails === 'yes' && (
                        <Controller
                          name="colleagueDetailsForm"
                          control={control}
                          render={({ field: { onChange, value } }) => (
                            <>
                              <TextInputWithController
                                name="metPersonName"
                                control={control}
                                label="Met Person Name:"
                                placeholder="Enter name"
                              />

                              <TextInputWithController
                                name="designation" 
                                control={control}
                                label="Designation:"
                                placeholder="Enter designation"
                              />

                              <TextInputWithController
                                name="applicantDesignation"
                                control={control}
                                label="Applicant Designation:"
                                placeholder="Enter applicant designation"
                              />

                              <View style={styles.section}>
                                <Text style={styles.sectionTitle}>Tenure of Working:</Text>
                                <View style={styles.row}>
                                  <TextInput
                                    mode="outlined"
                                    placeholder="Years"
                                    value={value?.tenureYears}
                                    onChangeText={(text) => onChange({...value, tenureYears: text})}
                                    style={[styles.input, {flex: 1, marginRight: 10}]}
                                  />
                                  <TextInput
                                    mode="outlined"
                                    placeholder="Months"
                                    value={value?.tenureMonths}
                                    onChangeText={(text) => onChange({...value, tenureMonths: text})}
                                    style={[styles.input, {flex: 1}]}
                                  />
                                </View>
                              </View>

                              <TextInputWithController
                                name="totalEmployees"
                                control={control}
                                label="Total Employees:"
                                placeholder="Enter total employees"
                              />

                              <TextInputWithController
                                name="seenEmployees"
                                control={control}
                                label="Seen Employees:"
                                placeholder="Enter seen employees"
                              />

                              <TextInputWithController
                                name="businessNature"
                                control={control}
                                label="Nature of Business:"
                                placeholder="Enter nature of business"
                              />

                              <RadioWithController
                                name="setup"
                                control={control}
                                options={options.setup}
                                label="Setup and Activity:"
                              />

                              <RadioWithController
                                name="nameBoard"
                                control={control}
                                options={options.nameBoard}
                                label="Name Board Seen:"
                              />

                              <TextInputWithController
                                name="verifierComments"
                                control={control}
                                label="Other Observation / Verifier Comments:"
                                placeholder="Enter comments"
                                multiline
                              />

                              <View style={styles.section}>
                                <Text style={styles.sectionTitle}>4 Photographs with Geo Tagging</Text>
                                {/* Photo upload component would go here */}
                              </View>

                              <TextInputWithController
                                name="verifierRemarks"
                                control={control}
                                label="Verifier Remarks:"
                                placeholder="Enter remarks"
                                multiline
                              />
                            </>
                          )}
                        />
                      )}

                      {colleagueDetails === 'no' && (
                        <>
                          <RadioWithController
                            name="callingResponse"
                            control={control}
                            options={options.callingResponse}
                            label="Calling Response:"
                          />

                          <RadioWithController
                            name="totalFloor"
                            control={control}
                            options={options.totalFloor}
                            label="Total Floor:"
                          />

                          <RadioWithController
                            name="officeFloor"
                            control={control}
                            options={options.officeFloor}
                            label="Office Exist on Which Floor:"
                          />

                          <TextInputWithController
                            name="landArea"
                            control={control}
                            label="Land Area:"
                            placeholder="Enter land area"
                          />

                          <RadioWithController
                            name="locality"
                            control={control}
                            options={options.locality}
                            label="Locality of Address:"
                          />

                          <TextInputWithController
                            name="totalEmployees"
                            control={control}
                            label="Total Employees:"
                            placeholder="Enter total employees"
                          />

                          <TextInputWithController
                            name="seenEmployees"
                            control={control}
                            label="Seen Employees:"
                            placeholder="Enter seen employees"
                          />

                          <TextInputWithController
                            name="businessNature"
                            control={control}
                            label="Nature of Business:"
                            placeholder="Enter nature of business"
                          />

                          <RadioWithController
                            name="setup"
                            control={control}
                            options={options.setup}
                            label="Setup and Activity:"
                          />

                          <RadioWithController
                            name="nameBoard"
                            control={control}
                            options={options.nameBoard}
                            label="Name Board Seen:"
                          />

                          <TextInputWithController
                            name="verifierComments"
                            control={control}
                            label="Other Observation / Verifier Comments:"
                            placeholder="Enter comments"
                            multiline
                          />

                          <View style={styles.section}>
                            <Text style={styles.sectionTitle}>4 Photographs with Geo Tagging</Text>
                            {/* Photo upload component would go here */}
                          </View>

                          <TextInputWithController
                            name="verifierRemarks"
                            control={control}
                            label="Verifier Remarks:"
                            placeholder="Enter remarks"
                            multiline
                          />
                        </>
                      )}
                    </>
                  )}

                  {entryAllowed === 'no' && (
                    <>
                      <RadioWithController
                        name="callingResponse"
                        control={control}
                        options={options.callingResponse}
                        label="Calling Response:"
                      />

                      <RadioWithController
                        name="totalFloor"
                        control={control}
                        options={options.totalFloor}
                        label="Total Floor:"
                      />

                      <RadioWithController
                        name="officeFloor"
                        control={control}
                        options={options.officeFloor}
                        label="Office Exist on Which Floor:"
                      />

                      <TextInputWithController
                        name="landArea"
                        control={control}
                        label="Land Area:"
                        placeholder="Enter land area"
                      />

                      <RadioWithController
                        name="locality"
                        control={control}
                        options={options.locality}
                        label="Locality of Address:"
                      />

                      <RadioWithController
                        name="nameBoardSeen"
                        control={control}
                        options={options.nameBoard}
                        label="Name board Seen:"
                      />

                      <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Met Person:</Text>
                        <Controller
                          name="metPerson"
                          control={control}
                          render={({ field: { onChange, value } }) => (
                            <View>
                              <Text>Name and Designation:</Text>
                              <TextInput
                                mode="outlined"
                                placeholder="Enter name and designation"
                                value={value?.name}
                                onChangeText={(text) => onChange({ ...value, name: text })}
                                style={styles.input}
                              />
                              <Text>Who confirmed:</Text>
                              <RadioButton
                                label="Confirmed applicant name and working"
                                checked={value?.confirmation === 'confirmed'}
                                onPress={() => onChange({ ...value, confirmation: 'confirmed' })}
                              />
                              <RadioButton
                                label="Not confirmed applicant name and working"
                                checked={value?.confirmation === 'notConfirmed'}
                                onPress={() => onChange({ ...value, confirmation: 'notConfirmed' })}
                              />
                            </View>
                          )}
                        />
                      </View>
                    </>
                  )}
                </>
              )}

              {companyExists === 'no' && (
                <>
                  <RadioWithController
                    name="callingResponse"
                    control={control}
                    options={options.callingResponse}
                    label="Calling Response:"
                  />

                  <TextInputWithController
                    name="firstNeighbor"
                    control={control}
                    label="1st Neighbor:"
                    placeholder="Enter first neighbor details"
                  />

                  <TextInputWithController
                    name="secondNeighbor"
                    control={control}
                    label="2nd Neighbor:"
                    placeholder="Enter second neighbor details"
                  />

                  <TextInputWithController
                    name="existingCompany"
                    control={control}
                    label="Company Name Which Exist:"
                    placeholder="Enter company name"
                  />

                  <RadioWithController
                    name="totalFloor"
                    control={control}
                    options={options.totalFloor}
                    label="Total Floor:"
                  />

                  <RadioWithController
                    name="officeFloor"
                    control={control}
                    options={options.officeFloor}
                    label="Office Exist on Which Floor:"
                  />

                  <TextInputWithController
                    name="landArea"
                    control={control}
                    label="Land Area:"
                    placeholder="Enter land area"
                  />

                  <RadioWithController
                    name="locality"
                    control={control}
                    options={options.locality}
                    label="Locality of Address:"
                  />

                  <TextInputWithController
                    name="suggestion"
                    control={control}
                    label="Suggestion:"
                    placeholder="Enter suggestion"
                  />
                </>
              )}
            </>
          )}

          {addressTraced === 'no' && (
            <>
              <RadioWithController
                name="reasonUntraced"
                control={control}
                options={options.reasonUntraced}
                label="Reason of Untraced:"
              />

              <RadioWithController
                name="requiredTrace"
                control={control}
                options={options.requiredTrace}
                label="Required to trace:"
              />

              <RadioWithController
                name="callingResponse"
                control={control}
                options={options.callingResponse}
                label="Calling response:"
              />

              <TextInputWithController
                name="lastLocation"
                control={control}
                label="Last location:"
                placeholder="Enter last location"
              />

              <RadioWithController
                name="status"
                control={control}
                options={options.status}
                label="Status:"
              />

              <View>
                <Text> Img 1</Text>
                <Text> Img 2</Text>
                <Text> Img 3</Text>
                <Text> Img 4</Text>
              </View>

              <TextInputWithController
                name="suggestion"
                control={control}
                label="Suggestion:"
                placeholder="Enter suggestion"
              />
            </>
          )}

          <Spacer height={20} />

          <Button
            title="Submit"
            onPress={handleSubmit(onSubmit)}
            style={styles.submitButton}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary
  },
  headerText: {
    color: Colors.white,
    fontSize: textScale(24),
    fontWeight: '600',
  },
  scrollContent: {
    flexGrow: 1,
    padding: moderateScale(16)
  },
  submitButton: {
    marginVertical: moderateScale(20)
  },
  label: {
    fontSize: textScale(16),
    fontWeight: '500',
    marginBottom: moderateScale(8)
  },
  formContainer: {
    paddingHorizontal: moderateScale(15)
  },
  radioGroup: {
    marginVertical: moderateScale(12)
  },
  section: {
    marginVertical: moderateScale(16)
  },
  sectionTitle: {
    fontSize: textScale(16),
    fontWeight: '600',
    marginBottom: moderateScale(12),
    color: Colors.black
  },
  input: {
    backgroundColor: Colors.white
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default ProfileForm;
