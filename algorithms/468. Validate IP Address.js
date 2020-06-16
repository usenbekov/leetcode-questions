/*
468. Validate IP Address
*/

/*
IPv4 - 255.255.255.255
1. 0..255
2. delimiter is "."
3. leading zero is not valid: ex: 011. ...
4. group max length is 3, ex: 1, 25, 255
5. 4 groups
6. only digits

IPv6 - 2001:0db8:85a3:0000:0000:8a2e:0370:7334
1. 0..2^16
2. delimiter is ":"
3. leading zero is valid
4. group max length is 4, ex: 2001, 0db8 ...
5. 8 groups
6. digits and letters

Solution:
- Get delimiter, "." or ":"
- Split to groups => ["01", "255", "255", "255"]
- Check groups.length, must be 4 or 8
- for group of groups
    check group.length, must be <=3 or ==4
    if "." then check leading zero
    convert to number
      check num <= max, 255 or 2^16
*/

/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  const delimiter = IP.indexOf('.') > -1 ? '.' : ':';
  const ipinfo = IPInfo[delimiter];
  const groups = IP.toLowerCase().split(delimiter);
  if (ipinfo.length !== groups.length) return 'Neither';
  for (const group of groups) {
    if (!hasOnlyAllowedChars(group, ipinfo.allowedChars) ||
        !ipinfo.validGroupLen(group.length) ||
        !ipinfo.validLeadingZero(group) ||
        !ipinfo.validRange(ipinfo.toNum(group))
       ) return 'Neither';
  }
  return delimiter == '.' ? 'IPv4' : 'IPv6';
};

var hasOnlyAllowedChars = (val, allowedChars) => {
  for (const ch of val) {
    if (!allowedChars.has(ch)) return false;
  }
  return true;
}

const IPInfo = {
  ".": {
    allowedChars: new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']),
    length: 4,
    validGroupLen: (len) => { return len <= 3 && len > 0; },
    validLeadingZero: (val) => { return val.length == 1 || val[0] != '0'; },
    validRange: (num) => { return num >= 0 && num <= 255; },
    toNum: (val) => { return parseInt(val); },
  },
  ":": {
    allowedChars: new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']),
    length:8,
    validGroupLen: (len) => { return len <= 4 && len > 0; },
    validLeadingZero: (val) => { return true; },
    validRange: (num) => { return num >= 0 && num <= 2^16; },
    toNum: (val) => { return parseInt(val, 16) },
  }
}





