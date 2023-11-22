function cesar(str, shift, action) {
    var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

    var encode_str = "";

    var decode_str = "";
  
    if (action === "encode") {
        for (var i = 0; i < str.length; i++) {
            if (str[i] === " ") {
                encode_str += " ";
                continue;
            }

            var new_index = alphabet.indexOf(str[i]) + shift;

            if (new_index > alphabet.length) {
                encode_str += alphabet[new_index % alphabet.length];
            }
            else {
                encode_str += alphabet[new_index];
            }

        }
    }

    else if (action === "decode") {
        for (var i = 0; i < str.length; i++) {
            if (str[i] === " ") {
                decode_str += " ";
                continue;
            }

            var new_index = alphabet.indexOf(str[i]) - shift;

            if (new_index < 0) {
                decode_str += alphabet[alphabet.length + new_index % alphabet.length];
            }

            else {
                decode_str += alphabet[new_index];
            }
        }
    }

    if (encode_str.length > 0) {
        return encode_str;
    }
    else {
        return decode_str;
    }
}

console.log(cesar("эзтыхз фзъзъз", 8, "decode"))

//фраза-хакуна матата.