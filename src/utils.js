const addTwoDigits = (n) => n % 10 + Math.floor(n / 10);;

const getLetter = (digits) => {
  let res = 0;

  for (let i = 0; i < 4; i++) {
    const multiplier = i % 2 ? 2 : 1;
    const currentRes = digits[i] * multiplier;

    // check if current result of multiplication is greater then 9, then sum its digits
    if (currentRes > 9) {
      res += addTwoDigits(currentRes);
    }
    else {
      res += currentRes;
    }
  }

  return String.fromCharCode(res % 26 + 65); 
};

export const checkIsPinValid = (pin) => {
  const reg = new RegExp('JN-[0-9]{4}-[0-9]{4}-[A-Z]{2}');

  // the entered pin is not of valid type
  if (!reg.test(pin)) return false;

  const firstLetter = getLetter(pin.slice(3,7));
  const secondLetter = getLetter(pin.slice(8,-3));

  if (pin[pin.length - 2] === firstLetter && pin[pin.length - 1] === secondLetter) {
    return true;
  }

  return false;
}