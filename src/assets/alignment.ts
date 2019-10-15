export enum AlignType {
   left = 'left',
   right = 'right',
   center = 'center',
   auto = 'auto'
}

const isClientRectInvalid = (rect: ClientRect): boolean => !rect.top && !rect.right && !rect.bottom && !rect.left;

export const setAlignment = (trigger: HTMLElement | null, layout: HTMLElement | null, align: string | AlignType = AlignType.auto, offset: number = 0) => {
   if (!window || !trigger || !layout) return;
   const triggerRect = trigger.getBoundingClientRect();
   const layoutRect = layout.getBoundingClientRect();
   if (isClientRectInvalid(triggerRect) || isClientRectInvalid(layoutRect)) return;
   const paddingLeft = (window.innerWidth - layoutRect.width) / 2;

   switch (align) {
      case AlignType.left:
         layout.style.left = `${offset}px`;
         layout.style.right = 'unset';
         break;
      case AlignType.right:
         layout.style.left = 'unset';
         layout.style.right = `${offset}px`;
         break;
      case AlignType.center:
         layout.style.left = `${-triggerRect.left + paddingLeft}px`;
         layout.style.right = 'unset';
         break;
      case AlignType.auto:
      default:
         if (triggerRect.left + triggerRect.width > window.innerWidth) {
            layout.style.left = 'unset';
            layout.style.right = `${offset}px`;
         } else if (triggerRect.left + triggerRect.width - triggerRect.width + offset < 0) {
            layout.style.left = `${offset}px`;
            layout.style.right = 'unset';
         }
   }
};

export const getPosition = (element: HTMLElement | null) => {
   if (!element) return;
   const rect = element.getBoundingClientRect();
   if (isClientRectInvalid(rect)) return;
   return rect;
};
