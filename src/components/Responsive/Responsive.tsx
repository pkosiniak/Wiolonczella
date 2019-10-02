import React from 'react';
import { Width, IDevice, Device, DeviceType } from '../../assets/styles';

export interface ResponsiveProps {
   children: (
      state: {
         lessThen: (breakpoint: DeviceType) => boolean;
         device: IDevice;
         isMobile: boolean;
         isSTablet: boolean;
         isTablet: boolean;
         isDesktop: boolean;
      }
   ) => React.ReactNode;
}

export interface ResponsiveState {
   device: IDevice;
   isMobile: boolean;
   isSTablet: boolean;
   isTablet: boolean;
   isDesktop: boolean;
}

export default class Responsive extends React.Component<ResponsiveProps, ResponsiveState> {
   constructor(props: ResponsiveProps) {
      super(props);
      const device = this.devicePicker(window.innerWidth);
      this.state = {
         device,
         isMobile: device.name === Device.mobile.name,
         isSTablet: device.name === Device.sTablet.name,
         isTablet: device.name === Device.tablet.name,
         isDesktop: device.name === Device.desktop.name,
      };
   }

   componentDidMount = () => {
      window.addEventListener('resize', this.windowSizeListener);
   };

   componentWillUnmount = () => {
      window.removeEventListener('resize', this.windowSizeListener);
   };

   windowSizeListener = () => {
      const device = this.devicePicker(window.innerWidth);
      this.setState({
         device,
         isMobile: device.name === Device.mobile.name,
         isSTablet: device.name === Device.sTablet.name,
         isTablet: device.name === Device.tablet.name,
         isDesktop: device.name === Device.desktop.name,
      });
   };

   devicePicker = (width: number): IDevice => {
      if (width < Width.mobile)
         return {
            name: Device.mobile.name,
            width: Device.mobile.width,
         };
      if (width < Width.sTablet)
         return {
            name: Device.sTablet.name,
            width: Device.sTablet.width,
         };
      if (width < Width.tablet)
         return {
            name: Device.tablet.name,
            width: Device.tablet.width,
         };
      return {
         name: Device.desktop.name,
         width: Device.desktop.width,
      };
   };

   lessThen = (breakpoint: DeviceType) => {
      const { isDesktop, isTablet, isSTablet, isMobile } = this.state;
      switch (breakpoint) {
         case Device.desktop.name:
            return isDesktop || isTablet || isSTablet || isMobile;
         case Device.tablet.name:
            return isTablet || isSTablet || isMobile;
         case Device.sTablet.name:
            return isSTablet || isMobile;
         case Device.mobile.name:
            return isMobile;
         default:
            return false;
      }
   };

   render() {
      const { device, isMobile, isSTablet, isTablet, isDesktop } = this.state;
      return this.props.children(
         {
            lessThen: this.lessThen,
            device,
            isMobile,
            isSTablet,
            isTablet,
            isDesktop
         },
      );
   }
}
