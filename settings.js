const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==ANqpXVBlWOOlVW1UFNI1ydnV2aYV0ViVXeKZFexRkQqhVO3VUazU0SI9ETjk1NShUV5kkSpwd=98891365672',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hey there😊👋@name And @gname @members Number of Members,I am QueenElisa and Alive Now!*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: 'mongodb+srv://herrison:wells@cluster0.tqhtuou.mongodb.net/?retryWrites=true&w=majority', 
  PREFIX: '.',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝐐𝐔𝐄𝐄𝐍 𝐄𝐋𝐈𝐒𝐀',
  OWNER_NAME: 'Tristan',
  OWNER_NUMBER: '27634624586',
  SUDO: '27734887674',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Africa/Johannesburg',
  CAPTION: '*',
  STICKER_AUTHOR: 'Tristan®',
  STICKER_PACK: '🎀',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 900,
  OWNER_R_EMOJI: '✨',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: true,
  OWNER_REACT: true,
  AUTO_REACT: false,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: true,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: false,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: true,
  BLOCK_CMD_MSG_SEND: true,
  INBOX_BLOCK_MSG_SEND: true,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by my Owner!',
    BANED_MSG: "@user IDiot🤬you can't use bot,*You are banned by my owner,* contact:+27634624586",
    GROUP_LEAVE: 'BYE👋 @groupName I am Going.',
    INBOX_BLOCK:
      '❌ *you texted me without My owner(+27634624586) permission,* *So you will be auto blocked after 8 seconds😊BYE mylove💗👋*'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add me to groups without asking my owner(27634624586).\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
