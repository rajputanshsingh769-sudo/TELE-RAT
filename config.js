const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8223043903:AAHh4yng_2LcM83cJ8JNfjqhwTXDxWo1ttw',
  id: isNaN(parsedId) ? 5860308831 : parsedId // replace 12345.. with your telegram chat id
};
