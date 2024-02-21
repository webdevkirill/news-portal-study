type Mods = Record<string, boolean | string | undefined>;

export const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined> = []) => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
};
