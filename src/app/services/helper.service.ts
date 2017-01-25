import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {
  static toBool(val) {
    if (val == 'undefined' || val == null || val == '' || val == 'false' || val == 'False')
      return false;
    else // if (val == true || val == 'true' || val == 'True')
      return true;
  };
  static shuffle(array) {
    var currentIndex = array.length, temp, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }
  static extend(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i])
        continue;

      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key))
          out[key] = arguments[i][key];
      }
    }
    return out;
  };
}
