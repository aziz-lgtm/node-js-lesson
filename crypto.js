  const crypto = require("crypto");
        
//   createHash()
  const hashedPassword = crypto.createHash("sha256")
  .update("myStrongPassword")
  .digest("hex");

  console.log("createHash result:", hashedPassword);

//   createHmac 

const hashedMessage = crypto.createHmac("sha256", "secretkey")
.update("important-secret-message")
.digest("hex");

console.log("createHmac result: ", hashedMessage);

// createCipheriv(algorithm, key, iv);
// createDecipheriv(algorithm, key, iv);

const key = Buffer.from("12345678901234567890123456789012");

const iv = Buffer.from("1234567890123456");

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

let encrypted = cipher.update("Hello Ayse Berra", "utf-8", "hex");
encrypted += cipher.final("hex");

console.log("Encrypted data:", encrypted);

const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");

console.log("Decrypted data:", decrypted);

// sign() and verify()

// randomBytes(16)
console.log("Random Bytes:", crypto.randomBytes(16));

console.log("Random Bytes:", crypto.randomBytes(16).toString("hex"));

// createSecretKey()
const secret = crypto.createSecretKey(crypto.randomBytes(32));
console.log(secret);
console.log(secret.export());
console.log(secret.export().toString('hex'));

// createPublicKey() and createPrivateKey() that lets you work with keys generated elsewhere
// createDiffieHellman() for two parties to generate a shared secret without sending the secret directly
// Certificate() for working with the one used in HTTPS, so you can parse, export, and verify certificate contents