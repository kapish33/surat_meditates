export const number = '8707559369';
const message = `Hi, can you send me *program details*?`;
const encodedMessage = encodeURIComponent(message);
export const whatsAppURL = () => {
  return `https://wa.me/+91${number}?text=${message}`;
};
