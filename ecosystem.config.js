module.exports = {
  apps: [
    {
      name: 'amenties',
      script: 'npm',
      args: 'start',
      interpreter: 'none',
      cwd: '/home/ubuntu/htdocs/amenities',
      instances: 1,
      autorestart: false,
      stop_exit_codes: '0',
      watch: false,
      max_memory_restart: '1G',
      max_restarts: 5,
      restart_delay: 5000,       // 5 seconds delay
      exp_backoff_restart_delay: 200, // exponential backoff
      env: {
        NODE_ENV: 'production',
        PORT: 3006
      },
      error_file: './logs/prod-error.log',
      out_file: './logs/prod-out.log',
      log_file: './logs/prod-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
};