



alphabet = 'abcdefghijklmnopqrstuvwxyz '

letter_to_index = dict(zip(alphabet, range(len(alphabet))))

index_to_letter = dict(zip(range(len(alphabet)), alphabet))

def encrypt (message, key):
    encrypted = ''

    split_message = [message[i : i + len(key)] for i in range(0, len(message), len(key))]

    for each_split in split_message:
        i = 0
        
        for letter in each_split:
            number = (letter_to_index[letter] + letter_to_index[key[i]]) % len(alphabet)
            encrypted += index_to_letter[number]
            i += 1

    return encrypted




def decrypt (cipher, key):
    decrypted = ''

    split_cipher = [cipher[i : i + len(key)] for i in range(0, len(cipher), len(key))]

    for each_split in split_cipher:
        i = 0

        for letter in each_split:
            number = (letter_to_index[letter] - letter_to_index[key[i]]) % len(alphabet)
            decrypted += index_to_letter[number]
            i += 1

    return decrypted


def main():
    key = 'hack'
    cipher1 = 'ripq'
    cipher2 = 'glqe'
    cipher3 = 'ldbk'
    cipher4 = 'z oh'
    cipher5 = 'gfcc'
    cipher6 = 'oetj'

    cipher = "ripqglqeldbkz ohgfccoetjhsbwe okztgagfqvsoyngaujtybqyeccgpccyopj hqdnhvjvnbsu ohgptkeetbg msugbvlatjgtjogbqfgiujiepcgapngdtkcnbwhkgjmrqwgtjogsjkmtbjrepcg no  kcgfcvs tk hgagtjyagjj hgjmotugipehdgj hgjyeisvnbym ohghgkytbll moutbdumcxuetve yrlnbvlatjpsbwhdbfoavjcincgtjya fygonngmcxgtjsukucgtjya vrhtbnat jzhcvs jkbebnyecngtqjzpgkr yrlnbzvwgagtqjmlcc ethgbqfz vygpnkpnpozsbrvnqdysblvupngwjou okqeuce ucvorbgtqjmonve tobetbl vre fyvmbkudbsu vre doztbmvnusketk iqxgcjoxugj hkbghknlowbgrcbongbz cxzwgagm jsihogm jqufqtepcgtjhgyqduggb  fkagjclrbnveujuovjsoxogtjol nohsvjuotjhrgj hqbl gwwt rlatcldbfoouoglqfgsqdudbalvgaisbxv jyslqfueubg msugbvlatjgkgx  qxgtjhglkpl pygmqal bulnvjgm jsihogibxlvgaghgvk dd  cbgabzhwpj obfhggjhgcsusvj h jlngwpeujuotjmecagtqjsouogivj h jzaho"

    decrypted_message1 = decrypt(cipher1, key)
    decrypted_message2 = decrypt(cipher2, key)
    decrypted_message3 = decrypt(cipher3, key)
    decrypted_message4 = decrypt(cipher4, key)
    decrypted_message5 = decrypt(cipher5, key)
    decrypted_message6 = decrypt(cipher6, key)

    decrypted_message = decrypt(cipher, key)


    print("Message 1: " + decrypted_message1)
    print("Message 2: " + decrypted_message2)
    print("Message 3: " + decrypted_message3)
    print("Message 4: " + decrypted_message4)
    print("Message 3: " + decrypted_message5)
    print("Message 4: " + decrypted_message6)


    print("Message: " + decrypted_message)

main()
