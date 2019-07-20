module.exports.run = async (client, message, args) => {
let main = args[0];
let rainbow = "http://http://www.pptback.com/uploads/colors-rainbow-backgrounds-powerpoint.jpg";
mergeImages([
  { src: main },
  { src: rainbow, opacity: 0.5 }
])
  .then(b64 => rainbow);
  let result = data:image/png;base64,rainbow
  message.reply(result);
        
        }