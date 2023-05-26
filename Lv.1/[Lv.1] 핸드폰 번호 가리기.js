function solution(phone_number) {
  let number = "";

  for (let i = 0; i < phone_number.length; i++) {
    if (phone_number.length - i <= 4) {
      number += phone_number[i];
    } else {
      number += "*";
    }
  }
  return number;
}
