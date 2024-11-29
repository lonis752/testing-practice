function capitalize (str) {
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

it("capitalizes first letter", () => {
  expect(capitalize("greg")).toBe("Greg");
});

function reversed(str) {
    return str.split('').reverse().join('');
}

it("reverse letters", () => {
    expect(reversed("greg")).toBe("gerg");
});

const calculator = {
    add: function add(a, b) {
        return a + b;
    },
    subtract: function subtract(a, b) {
        return a - b;
    },
    divide: function divide(a, b) {
        return a / b;
    },
    multiply: function multiply(a, b) {
        return a * b;
    }
}

it("adding numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
})

it("subtract numbers", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
})

it("divide numbers", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
})

it("multiply numbers", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
})

const caesarCipher = (str, shift, decrypt = false) => {
    const s = decrypt ? (26 - shift) % 26 : shift;
    const n = s > 0 ? s : 26 + (s % 26);
    return [...str]
    .map((l, i) => {
        const c = str.charCodeAt(i);
        if (c >= 65 && c <= 90)
        return String.fromCharCode(((c - 65 + n) % 26) + 65);
        if (c >= 97 && c <= 122)
        return String.fromCharCode(((c - 97 + n) % 26) + 97);
        return l;
    })
    .join('');
};

it("wraps alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})

it("capitalization sync", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

it("include punctuation", () => {
    expect(caesarCipher("xyz!", 3)).toBe("abc!")
})

it("wraps alphabet", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})

const array = [1,8,3,4,2,6]

function analyzeArray(arr) {
    let sum = 0;
    let length = arr.length;
    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    let object = {
        average: average,
        min: min,
        max: max,
        length: length
    }
    return object;
}

it("array analyzer", () => {
    expect(analyzeArray(array)).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})