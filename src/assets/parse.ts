
export type IsFunction<T> = T extends (...args: any[]) => any ? T : never;
export const isFunction = <T extends {}>(value: T): value is IsFunction<T> => typeof value === 'function';

export const isValid = <T extends any>(value: any): T | undefined => !!value ? value : undefined;

export const typeOrUndefined = <T extends any, R extends {}>(value: T, toReturn?: R): T | R | undefined => {
   const parsed = isValid<T>(value);
   if (typeof parsed === 'undefined') return undefined;
   return toReturn || parsed;
}
