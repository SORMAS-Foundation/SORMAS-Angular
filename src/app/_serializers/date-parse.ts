/* eslint-disable no-param-reassign */

export function serializeDates(source: any): void {
  if (!source || !(source instanceof Object)) {
    return;
  }

  if (source instanceof Array) {
    source.forEach((item) => serializeDates(item));
  }

  Object.entries(source).forEach(([key, value]) => {
    if (value instanceof Date) {
      source[key] = value.getTime();
    }

    if (value instanceof Array || value instanceof Object) {
      serializeDates(value);
    }
  });
}

export function deserializeDates(source: any): void {
  if (!source || !(source instanceof Object)) {
    return;
  }

  if (source instanceof Array) {
    source.forEach((item) => deserializeDates(item));
  }

  Object.entries(source).forEach(([key, value]) => {
    if (
      typeof value === 'number' &&
      (key.endsWith('Date') ||
        key.endsWith('Until') ||
        key.endsWith('End') ||
        key.endsWith('Start') ||
        key.endsWith('DateTime'))
    ) {
      source[key] = new Date(value);
    }

    if (value instanceof Array || value instanceof Object) {
      deserializeDates(value);
    }
  });
}
