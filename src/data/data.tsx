export enum Language {
    english,
    hiragana,
    katakana
}

export interface Path {
    id: number,
    base_language: Language,
    learn_language: Language,
    button_text: string,
    description: string
}

export const Paths: Path[] = [
    {
        id: 1,
        base_language: Language.english,
        learn_language: Language.hiragana,
        button_text: "あ / a Learn Hiragana",
        description: "Learn Hiragana - a great starting point for all beginning Japanese learners. Hiragana is an alphabet-like set of characters used for writing Japanese words."
    },
    {
        id: 2,
        base_language: Language.english,
        learn_language: Language.katakana,
        button_text: "ア / a Learn Katakana",
        description: "Learn Katakana - most students progress to Katakana after learning Hiragana. Katakana is an alphabet-like set of characters used for writing non-Japanese words."
    },
    {
        id: 3,
        base_language: Language.hiragana,
        learn_language: Language.katakana,
        button_text: "あ / ア Blend Hiragana and Katakana",
        description: "Blend Hiragana and Katakana - once you feel competent in both Hiragana and Katakana, challenge yourself by practicing them both at once."
    },
];

export interface PathCharacter {
    path_char_id: number,
    english: string,
    hiragana: string,
    katakana: string,
    sort_order: number,
    phonetic: string,
    description: string
}

export const PathCharacters: PathCharacter[] = [
    { path_char_id: 1, english: 'a', hiragana: 'あ', katakana: 'ア', sort_order: 1, phonetic: 'ah', description: "This hiragana has an upside down capital 'A' in it. Ah! You can use that to remember." },
    { path_char_id: 2, english: 'i', hiragana: 'い', katakana: 'イ', sort_order: 2, phonetic: 'e in tree', description: "It looks like two side-by-side eels!" },
    { path_char_id: 3, english: 'u', hiragana: 'う', katakana: 'ウ', sort_order: 3, phonetic: 'ooh ', description: "See how it looks like a sideways 'u'?" },
    { path_char_id: 4, english: 'e', hiragana: 'え', katakana: 'エ', sort_order: 4, phonetic: 'eh ', description: "This one looks like a z, just think of how it is e-z to remember." },
    { path_char_id: 5, english: 'o', hiragana: 'お', katakana: 'オ', sort_order: 5, phonetic: 'oh ', description: "Oh no! This person tripped and dropped something!" },
    { path_char_id: 6, english: 'ka', hiragana: 'か', katakana: 'カ', sort_order: 6, phonetic: 'ka ', description: "Looks like a fighter with a sword yelling 'KA!'" },
    { path_char_id: 7, english: 'ki', hiragana: 'き', katakana: 'キ', sort_order: 7, phonetic: 'key ', description: "Pronounced like the word key and it looks like a key!" },
    { path_char_id: 8, english: 'ku', hiragana: 'く', katakana: 'ク', sort_order: 8, phonetic: 'koo ', description: "It looks just like a bird's beak, making a coo sound." },
    { path_char_id: 9, english: 'ke', hiragana: 'け', katakana: 'ケ', sort_order: 9, phonetic: 'keh ', description: "You can remember this one because it looks like the word 'it' - and remember, its kay! " },
    { path_char_id: 10, english: 'ko', hiragana: 'こ', katakana: 'コ', sort_order: 10, phonetic: 'ko ', description: "No tips yet!" },
    { path_char_id: 11, english: 'sa', hiragana: 'さ', katakana: 'サ', sort_order: 11, phonetic: 'saw ', description: "The top line is a saw, the bottom loop is an arm as a lady missing a hand saws a board." },
    { path_char_id: 12, english: 'shi', hiragana: 'し', katakana: 'シ', sort_order: 12, phonetic: 'she ', description: "It looks like a fishhook - she likes to fish! Exception! Note the spelling difference for Romaaji." },
    { path_char_id: 13, english: 'su', hiragana: 'す', katakana: 'ス', sort_order: 13, phonetic: 'sue ', description: "It's a T with a curly line through it, like Curly Sue." },
    { path_char_id: 14, english: 'se', hiragana: 'せ', katakana: 'セ', sort_order: 14, phonetic: 'seh ', description: "It looks kind of a like a chair for an old man to 'seht' (sit) in." },
    { path_char_id: 15, english: 'so', hiragana: 'そ', katakana: 'ソ', sort_order: 15, phonetic: 'so ', description: "It looks like a z - soz, what's up?" },
    { path_char_id: 16, english: 'ta', hiragana: 'た', katakana: 'タ', sort_order: 16, phonetic: 'taw ', description: "It looks like a t and an a - a real easy one!" },
    { path_char_id: 17, english: 'chi', hiragana: 'ち', katakana: 'チ', sort_order: 17, phonetic: 'chi ', description: "It's a CHEating soccer player. He's getting kicked in the shins. Exception! Note the spelling difference for Romaaji." },
    { path_char_id: 18, english: 'tsu', hiragana: 'つ', katakana: 'ツ', sort_order: 18, phonetic: 'tsu ', description: "Exception! Note the spelling difference for Romaaji." },
    { path_char_id: 19, english: 'te', hiragana: 'て', katakana: 'テ', sort_order: 19, phonetic: 'teh ', description: "" },
    { path_char_id: 20, english: 'to', hiragana: 'と', katakana: 'ト', sort_order: 20, phonetic: 'toe ', description: "" },
    { path_char_id: 21, english: 'na', hiragana: 'な', katakana: 'ナ', sort_order: 21, phonetic: 'naw ', description: "" },
    { path_char_id: 22, english: 'ni', hiragana: 'に', katakana: 'ニ', sort_order: 22, phonetic: 'nee ', description: "" },
    { path_char_id: 23, english: 'nu', hiragana: 'ぬ', katakana: 'ヌ', sort_order: 23, phonetic: 'new ', description: "" },
    { path_char_id: 24, english: 'ne', hiragana: 'ね', katakana: 'ネ', sort_order: 24, phonetic: 'neh ', description: "" },
    { path_char_id: 25, english: 'no', hiragana: 'の', katakana: 'ノ', sort_order: 25, phonetic: 'no ', description: "Imagine a cigarette behind the character - no smoking!" },
    { path_char_id: 26, english: 'ha', hiragana: 'は', katakana: 'ハ', sort_order: 26, phonetic: 'ha ', description: "" },
    { path_char_id: 27, english: 'hi', hiragana: 'ひ', katakana: 'ヒ', sort_order: 27, phonetic: 'hi ', description: "" },
    { path_char_id: 28, english: 'fu', hiragana: 'ふ', katakana: 'フ', sort_order: 28, phonetic: 'fu ', description: "" },
    { path_char_id: 29, english: 'he', hiragana: 'へ', katakana: 'ヘ', sort_order: 29, phonetic: 'heh ', description: "" },
    { path_char_id: 30, english: 'ho', hiragana: 'ほ', katakana: 'ホ', sort_order: 30, phonetic: 'hoe ', description: "" },
    { path_char_id: 31, english: 'ma', hiragana: 'ま', katakana: 'マ', sort_order: 31, phonetic: 'ma ', description: "" },
    { path_char_id: 32, english: 'mi', hiragana: 'み', katakana: 'ミ', sort_order: 32, phonetic: 'me ', description: "" },
    { path_char_id: 33, english: 'mu', hiragana: 'む', katakana: 'ム', sort_order: 33, phonetic: 'moo ', description: "" },
    { path_char_id: 34, english: 'me', hiragana: 'め', katakana: 'メ', sort_order: 34, phonetic: 'meh ', description: "" },
    { path_char_id: 35, english: 'mo', hiragana: 'も', katakana: 'モ', sort_order: 35, phonetic: 'mow ', description: "" },
    { path_char_id: 36, english: 'ra', hiragana: 'ら', katakana: 'ラ', sort_order: 36, phonetic: 'ra ', description: "" },
    { path_char_id: 37, english: 'ri', hiragana: 'り', katakana: 'リ', sort_order: 37, phonetic: 'ree ', description: "" },
    { path_char_id: 38, english: 'ru', hiragana: 'る', katakana: 'ル', sort_order: 38, phonetic: 'rue ', description: "" },
    { path_char_id: 39, english: 're', hiragana: 'れ', katakana: 'レ', sort_order: 39, phonetic: 'reh ', description: "" },
    { path_char_id: 40, english: 'ro', hiragana: 'ろ', katakana: 'ロ', sort_order: 40, phonetic: 'row ', description: "" },
    { path_char_id: 41, english: 'ya', hiragana: 'や', katakana: 'ヤ', sort_order: 41, phonetic: 'yaw ', description: "" },
    { path_char_id: 42, english: 'yu', hiragana: 'ゆ', katakana: 'ユ', sort_order: 42, phonetic: 'you ', description: "" },
    { path_char_id: 43, english: 'yo', hiragana: 'よ', katakana: 'ヨ', sort_order: 43, phonetic: 'yo ', description: "" },
    { path_char_id: 44, english: 'wa', hiragana: 'わ', katakana: 'ワ', sort_order: 44, phonetic: 'wah ', description: "" },
    { path_char_id: 45, english: 'wo', hiragana: 'を', katakana: 'ヲ', sort_order: 45, phonetic: 'whoa ', description: "" },
    { path_char_id: 46, english: 'n', hiragana: 'ん', katakana: 'ン', sort_order: 46, phonetic: 'n ', description: "" },
]
