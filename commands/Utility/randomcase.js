module.exports = {
  name: "randomcase",
  aliases: ["rc"],
  category: "Utility",
  description: "Return Random Case Message!",
  usage: "Randomcase <Message>",
  run: async (client, message, args) => {
    
    let Msg = args.join(" "), Case = "";
    if (!Msg) return message.channel.send("Please Give Your Message!");

    for (let i in Msg) {
      let Random = await Math.floor(Math.random() * 2);
      Case += Random == 1 ? Msg[i].toLowerCase() : Msg[i].toUpperCase();
    };

    return message.channel.send(Case);
  }
};