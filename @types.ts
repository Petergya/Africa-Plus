// declare module 'react-native-datepicker' {
//     import { Component } from 'react';
//     import { ViewStyle, TextStyle } from 'react-native';
  
//     export interface DatePickerCustomStyles {
//       dateInput?: ViewStyle;
//       dateText?: TextStyle;
//       placeholderText?: TextStyle;
//       dateIcon?: ViewStyle;
//       dateTouchBody?: ViewStyle;
//       datePicker?: ViewStyle;
//       datePickerMask?: ViewStyle;
//       datePickerCon?: ViewStyle;
//       disabled?: ViewStyle;
//     }
  
//     export interface DatePickerProps {
//       style?: ViewStyle;
//       date?: string | Date;
//       mode?: 'date' | 'datetime' | 'time';
//       format?: string;
//       minDate?: string | Date;
//       maxDate?: string | Date;
//       confirmBtnText?: string;
//       cancelBtnText?: string;
//       iconSource?: any;
//       iconComponent?: React.ReactNode;
//       duration?: number;
//       customStyles?: DatePickerCustomStyles;
//       showIcon?: boolean;
//       hideText?: boolean;
//       minuteInterval?: number;
//       timeZoneOffsetInMinutes?: number;
//       locale?: string;
//       disabled?: boolean;
//       onDateChange: (date: string, dateString: string) => void;
//       placeholder?: string;
//       androidMode?: 'default' | 'calendar' | 'spinner';
//       is24Hour?: boolean;
//       getDateStr?: (date: Date) => string;
//     }
  
//     export default class DatePicker extends Component<DatePickerProps> {}
//   }

declare module 'react-native-datepicker' {
    import { Component } from 'react';
    import { ViewStyle, TextStyle } from 'react-native';
  
    export interface DatePickerCustomStyles {
      dateInput?: ViewStyle;
      dateText?: TextStyle;
      placeholderText?: TextStyle;
      dateIcon?: ViewStyle;
      dateTouchBody?: ViewStyle;
      datePicker?: ViewStyle;
      datePickerMask?: ViewStyle;
      datePickerCon?: ViewStyle;
      disabled?: ViewStyle;
    }
  
    export interface DatePickerProps {
      style?: ViewStyle;
      date?: string | Date;
      mode?: 'date' | 'datetime' | 'time';
      format?: string;
      minDate?: string | Date;
      maxDate?: string | Date;
      confirmBtnText?: string;
      cancelBtnText?: string;
      iconSource?: any;
      iconComponent?: React.ReactNode;
      duration?: number;
      customStyles?: DatePickerCustomStyles;
      showIcon?: boolean;
      hideText?: boolean;
      minuteInterval?: number;
      timeZoneOffsetInMinutes?: number;
      locale?: string;
      disabled?: boolean;
      onDateChange: (date: string, dateString: string) => void;
      placeholder?: string;
      androidMode?: 'default' | 'calendar' | 'spinner';
      is24Hour?: boolean;
      getDateStr?: (date: Date) => string;
    }
  
    export default class DatePicker extends Component<DatePickerProps> {}
  }
  
  