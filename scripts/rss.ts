// A compile time script to generate RSS feeds.

const DOMAIN = 'https://3fuyang.github.io'
const AUTHOR = {
  name: 'Fwio Fu',
  email: '624835339@qq.com',
  link: DOMAIN
}

async function buildRSSFeed() {
  const pages = import.meta.glob
}