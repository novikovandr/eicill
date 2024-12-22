runCommand('ls', ['-lh', '/usr'])
    .then(() => {
        console.log('Command executed successfully');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
