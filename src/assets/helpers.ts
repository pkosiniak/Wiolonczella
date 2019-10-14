export const getScrollbarWidth = (): number => {
   const root = document.getElementById('root');
   return !root || !window ? 0 : window.innerWidth - root.clientWidth;
};

export const scrollbarWidth = getScrollbarWidth();

export const hideScrollbar = (hide: boolean) => {
   const body = document.getElementsByTagName('body')[0];
   if (!body) return;
   const status = hide ? 'hidden' : 'auto';
   body.style.overflowY = status;
   body.style.msOverflowStyle = status;
   windowResizeListenerWorker();
};

export const delayedHideScrollbar = (hide: boolean, timeout: number) =>
   setTimeout(() => hideScrollbar(hide), timeout);

export const getReverseScrollbarWidth = () => getScrollbarWidth() ? 0 : scrollbarWidth;

export const windowResizeListenerWorker = () => {
   const root = document.getElementById('root');
   if (!root) return;
   root.style.marginRight = `${getScrollbarWidth() ? 0 : scrollbarWidth + 1}px`;
   root.style.width = window.innerWidth.toString();
};
