type Mods = Record<string, boolean | string>;

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []) => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
};
