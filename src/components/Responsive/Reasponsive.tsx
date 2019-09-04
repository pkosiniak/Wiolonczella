import React from 'react';
import { Width, IDevice, Device } from '../../styles/constants';

export interface ResponsiveProps {
   children: (state: IDevice) => React.ReactNode;
}

export interface ResponsiveState {
   device: IDevice;
}

export default class Responsive extends React.Component<ResponsiveProps, ResponsiveState> {
   constructor(props: ResponsiveProps) {
      super(props);
      this.state = { device: this.devicePicker(window.innerWidth) };
   }

   componentDidMount = () => {
      window.addEventListener('resize', this.windowSizeListener);
   };

   componentWillUnmount = () => {
      window.removeEventListener('resize', this.windowSizeListener);
   };

   windowSizeListener = () => {
      this.setState({ device: this.devicePicker(window.innerWidth) });
   };

   devicePicker = (width: number): IDevice => {
      if (width < Width.mobile)
         return { device: Device.mobile };
      if (width < Width.tablet)
         return { device: Device.tablet };
      // if (width < Width.desktop)
      return { device: Device.desktop };
   };

   render() {
      return this.props.children({
         device: this.state.device.device
      });
   }
}
