const muhavaraList = [
    { muhavara: "अंधा बांटे रेवड़ी फिर-फिर अपनों को देय", emoji: "👀🍬" },
    { muhavara: "अंधेर नगरी चौपट राजा", emoji: "🏙️👑" },
    { muhavara: "अक्ल बड़ी या भैंस", emoji: "🤔🐃" },
    { muhavara: "आसमान से गिरे खजूर में अटके", emoji: "🌧️🌴" },
    { muhavara: "आटे दाल का भाव मालूम होना", emoji: "🌾💰" },
    { muhavara: "उँगलियों पर नचाना", emoji: "🖐️💃" },
    { muhavara: "उधार प्रेम की काँच की चूड़ियाँ", emoji: "💔🔄" },
    { muhavara: "ऊँट के मुँह में जीरा", emoji: "🐪🌿" },
    { muhavara: "एक अनार सौ बीमार", emoji: "🍎🤒" },
    { muhavara: "कबीर का कहा न मानें, औरों का पछताए", emoji: "🙉😓" },
    { muhavara: "कटे पर नमक छिड़कना", emoji: "🩹🧂" },
    { muhavara: "कालीदास ने अपनी शाखा काटी", emoji: "✂️🌳" },
    { muhavara: "काठ की हांडी बार-बार नहीं चढ़ती", emoji: "🍲🚫" },
    { muhavara: "कोई माई का लाल", emoji: "🚶‍♂️🌟" },
    { muhavara: "गड़े मुर्दे उखाड़ना", emoji: "⚰️👻" },
    { muhavara: "घर का भेदी लंका ढाए", emoji: "🏠🔥" },
    { muhavara: "घाव ऊपर से हरा लगाना", emoji: "🤕🍃" },
    { muhavara: "चोरी और सीनाजोरी", emoji: "🕵️‍♂️💪" },
    { muhavara: "चौबारा चित्तचोर, रात कटती चोरी से", emoji: "🌜🕵️‍♂️" },
    { muhavara: "जहाँ न पहुँचे रवि, वहाँ पहुँचे कवि", emoji: "🌞✍️" },
    { muhavara: "तिनका तिनका जोड़ने में उम्र बीत जाती है", emoji: "🪶🕰️" },
    { muhavara: "तीर की तरह निकलना", emoji: "🏹💨" },
    { muhavara: "तीर मारना", emoji: "🏹🎯" },
    { muhavara: "दूसरों के पापों का भागी", emoji: "🙇‍♂️🙏" },
    { muhavara: "दाने-दाने पर लिखा है खाने वाले का नाम", emoji: "🍚📝" },
    { muhavara: "नाच न जाने आँगन टेढ़ा", emoji: "💃🏠" },
    { muhavara: "नकल में भी अकल चाहिए", emoji: "📝🧠" },
    { muhavara: "नौ दिन चले अढ़ाई कोस", emoji: "9️⃣➡️2️⃣5️⃣0️⃣" },
    { muhavara: "न रहेगा बाँस न बजेगी बाँसुरी", emoji: "🚫🎋🎶" },
    { muhavara: "नाक कटना", emoji: "👃✂️" },
    { muhavara: "नाक में दम करना", emoji: "👃😤" },
    { muhavara: "नक्कारखाने में तूती की आवाज़", emoji: "🦜🔊" },
    { muhavara: "नाच न आए आँगन टेढ़ा", emoji: "💃🏡" },
    { muhavara: "नाचते हुए नाचना", emoji: "💃🎶" },
    { muhavara: "नाच न जाने आँगन टेढ़ा", emoji: "💃🏠" },
    { muhavara: "पानी पीकर सोना", emoji: "💧🛏️" },
    { muhavara: "पानी-पानी होना", emoji: "💧😳" },
    { muhavara: "पानी में मीन प्यासा", emoji: "🐟💧" },
    { muhavara: "पल में तोला पल में माशा", emoji: "⏳⚖️" },
    { muhavara: "फूंक-फूंक कर कदम रखना", emoji: "👣🔥" },
    { muhavara: "बंदर क्या जाने अदरक का स्वाद", emoji: "🐒🍬" },
    { muhavara: "बंदर की तरह नाचना", emoji: "🐒💃" },
    { muhavara: "बंदर सेब खाने का", emoji: "🐒🍎" },
    { muhavara: "बंदर और बंदरिया", emoji: "🐒🐒" },
    { muhavara: "भूखे भजन न होय गोपाला", emoji: "🙏🍲" },
    { muhavara: "भेड़िया आया", emoji: "🐺⚠️" },
    { muhavara: "मुँह में राम बगल में छुरी", emoji: "🙏🔪" },
    { muhavara: "मन चंगा तो कठौती में गंगा", emoji: "🧘‍♂️💧" },
    { muhavara: "मन के हारे हार है, मन के जीते जीत", emoji: "🧠🏆" }
];

document.getElementById('generate-btn').addEventListener('click', displayRandomMuhavara);

function displayRandomMuhavara() {
    const randomIndex = Math.floor(Math.random() * muhavaraList.length);
    const randomMuhavara = muhavaraList[randomIndex];
    document.getElementById('muhavara-text').innerText = `${randomMuhavara.muhavara} ${randomMuhavara.emoji}`;
}
