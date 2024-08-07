import { NativeModules } from 'react-native';

const { WidgetModule } = NativeModules;

const updateWidget = (text) => {
  if (WidgetModule) {
    WidgetModule.updateWidget(text);
  } else {
    console.error('WidgetModule is not available.');
  }
};

export default updateWidget;
