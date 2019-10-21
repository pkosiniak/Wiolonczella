import React from 'react';
import { Width, IDevice, Device, DeviceType } from '../../assets/styles';

export interface ResponsiveProps {
   children: (
      state: {
         lessThenOrEqualTo: (breakpoint: DeviceType) => boolean;
         greaterThenOrEqualTo: (breakpoint: DeviceType) => boolean;
         device: IDevice;
         isMobile: boolean;
         isSTablet: boolean;
         isTablet: boolean;
         isDesktop: boolean;
         isPortrait: boolean;
      }
   ) => React.ReactNode;
}

export interface ResponsiveState {
   device: IDevice;
   isMobile: boolean;
   isSTablet: boolean;
   isTablet: boolean;
   isDesktop: boolean;
   isPortrait: boolean;
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
         isPortrait: window.matchMedia('(orientation: portrait)').matches,
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
         isPortrait: window.matchMedia('(orientation: portrait)').matches
      });
   };

   devicePicker = (width: number): IDevice => {
      if (width <= Width.mobile)
         return {
            name: Device.mobile.name,
            width: Device.mobile.width,
         };
      if (width <= Width.sTablet)
         return {
            name: Device.sTablet.name,
            width: Device.sTablet.width,
         };
      if (width <= Width.tablet)
         return {
            name: Device.tablet.name,
            width: Device.tablet.width,
         };
      return {
         name: Device.desktop.name,
         width: Device.desktop.width,
      };
   };

   lessThenOrEqualTo = (breakpoint: DeviceType) => {
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

   greaterThenOrEqualTo = (breakpoint: DeviceType) => {
      const { isDesktop, isTablet, isSTablet, isMobile } = this.state;
      switch (breakpoint) {
         case Device.desktop.name:
            return isDesktop;
         case Device.tablet.name:
            return isTablet || isDesktop;
         case Device.sTablet.name:
            return isSTablet || isTablet || isDesktop;
         case Device.mobile.name:
            return isMobile || isSTablet || isTablet || isDesktop;
         default:
            return false;
      }
   };

   render() {
      const { device, isMobile, isSTablet, isTablet, isDesktop, isPortrait } = this.state;
      return this.props.children(
         {
            lessThenOrEqualTo: this.lessThenOrEqualTo,
            greaterThenOrEqualTo: this.greaterThenOrEqualTo,
            device,
            isMobile,
            isSTablet,
            isTablet,
            isDesktop,
            isPortrait,
         },
      );
   }
}
