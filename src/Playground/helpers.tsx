export const parseBool = (value: string | null): boolean => value && value === 'true' ? true : false;

export const allTrueCheck = (demoState: boolean[]): boolean => {
   for (const demo of demoState) {
      if (!demo) {
         return false;
      }
   }
   return true;
};
