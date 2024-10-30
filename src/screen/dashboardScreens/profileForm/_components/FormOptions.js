const options = {
    addressTraced: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' }
    ],
    companyExists: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' }
    ],
    entryAllowed: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' }
    ],
    colleagueDetails: [
      { label: 'Confirmed', value: 'yes' },
      { label: 'Not Confirmed', value: 'no' }
    ],
    totalFloor: [
      { label: 'Only ground floor', value: 'ground' },
      { label: 'Ground to 1st floor', value: 'first' },
      { label: 'Ground to 2nd floor', value: 'second' },
      { label: 'Ground to 3rd floor', value: 'third' },
      { label: 'Ground to 4th floor', value: 'fourth' },
      { label: 'Any other', value: 'other' }
    ],
    officeFloor: [
      { label: 'Ground Floor', value: 'ground' },
      { label: '1ST Floor', value: 'first' },
      { label: '2nd Floor', value: 'second' },
      { label: '3rd Floor', value: 'third' },
      { label: '4th Floor', value: 'fourth' },
      { label: 'Any Other', value: 'other' }
    ],
    locality: [
      { label: 'Commercial', value: 'commercial' },
      { label: 'Resi cum commercial', value: 'resiCommercial' },
      { label: 'Industrial', value: 'industrial' },
      { label: 'Any Other', value: 'other' }
    ],
    setup: [
      { label: 'Average', value: 'average' },
      { label: 'Good', value: 'good' },
      { label: 'Low', value: 'low' },
      { label: 'Temporary', value: 'temporary' }
    ],
    nameBoard: [
      { label: 'Seen by Same name', value: 'sameName' },
      { label: 'Not seen by same name', value: 'notSameName' },
      { label: 'Any other', value: 'other' }
    ],
    callingResponse: [
      { label: 'Did not pick the call', value: 'notPicked' },
      { label: 'Number was not reachable', value: 'notReachable' },
      { label: 'Number was Switch off', value: 'switchOff' },
      { label: 'Any other', value: 'other' }
    ],
    reasonUntraced: [
      { label: 'Address is Incomplete', value: 'incomplete' },
      { label: 'Address exist in slum location', value: 'slum' },
      { label: 'Address is not in sequences', value: 'sequence' },
      { label: 'Any other', value: 'other' }
    ],
    requiredTrace: [
      { label: 'Required street number', value: 'street' },
      { label: 'Required landmark', value: 'landmark' },
      { label: 'Any other', value: 'other' }
    ],
    status: [
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Refer to credit', value: 'referCredit' }
    ]
  };

  export default FormOptions;