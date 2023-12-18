import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args, usedPrefix }) => {
   const res = await fetch('https://api.github.com/repos/The-DiosBot-MD/The-MikuBot-MDV2');
   const json = await res.json();
   let txt = `_*< INFO - REPOSITORIO />*_\n\n`;
      txt += `▢ *Nombre:* ${json?.name || 'The-MikuBot-MDV2'}\n\n`;
      txt += `▢ *Visitantes:* ${json?.watchers_count || '-'}\n\n`;
      txt += `▢ *Tamaño:* ${(json?.size / 1024).toFixed(2) || '-'} MB\n\n`;
      txt += `▢ *Actualización:* ${moment(json?.updated_at).format('DD/MM/YY - HH:mm:ss') || '-'}\n\n`;
      txt += `▢ *URL:* ${json?.html_url || 'https://github.com/The-DiosBot-MD/The-MikuBot-MDV2'}\n\n`;
      txt += `${json?.forks_count || '-'} Forks · ${json?.stargazers_count || '-'} Stars · ${json?.open_issues_count || '-'} Issues\n\n`;
      txt += `*[ ℹ️ ] Puedes descargar este repositorio enviando el comando:*\n_${usedPrefix}gitclone ${json?.html_url || 'https://github.com/The-DiosBot-MD/The-MikuBot-MDV2'}_`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `https://www.instagram.com/@adri.analegresanchez`, "sourceUrl": `https://www.instagram.com/@adri.analegreanchez`}}}, {quoted: m});
};
handler.command = ['script', 'repositorio', 'repo', 'sc']
export default handler;
