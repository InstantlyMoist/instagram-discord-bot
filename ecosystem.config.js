module.exports = {
  apps : [{
    name: 'instagram-discord-bot',
    script: 'index.js',
        "shutdown_with_message" : true,
        watch: true,
    args: 'one two',
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'kyllian',
      host : '172.19.3.20',
      key  : '/home/kyllian/.ssh/id_rsa',
      ref  : 'origin/master',
      repo : 'git@github.com:InstantlyMoist/instagram-discord-bot.git',
      path : '/home/kyllian/instagram-discord-bot',
      'post-deploy' : 'pm2 stop /home/kyllian/instagram-discord-bot/ecosystem.config.js && git pull && npm install && pm2 start /home/kyllian/instagram-discord-bot/ecosystem.config.js'
    }
  }
};
