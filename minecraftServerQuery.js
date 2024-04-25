/**
 * Filename: minecraftServerQuery.js
 * Description: A utility to query Minecraft server status.
 * Copyright © 2024 Max Brückner
 * License: MIT
 */

import minecraftUtil from 'minecraft-server-util';

const DEFAULT_PORT = 25565;

const getServerInput = () => {
    const serverInput = process.argv[2];

    if (!serverInput) {
        console.error('Usage: node script.js <ip:port>');
        process.exit(1);
    }

    return serverInput;
};

const parseServerInput = (serverInput) => {
    const [address, port] = serverInput.split(':');
    const portNumber = parseInt(port, 10) || DEFAULT_PORT;

    if (isNaN(portNumber)) {
        console.error('Invalid port. Please enter a valid port number.');
        process.exit(1);
    }

    return { address, port: portNumber };
};

const displayServerStatus = (status) => {
    console.log(`${status.players.online} out of ${status.players.max} players online.`);
    console.log(`Version: ${status.version.name} (Protocol: ${status.version.protocol})`);
    console.log(`MOTD: ${status.motd.clean}`);

    if (status.players.sample?.length) {
        console.log('-------------------Players-------------------');
        status.players.sample.forEach(player => {
            console.log(`${player.name} - ${player.id}`);
        });
    }
};

const fetchServerStatus = async (serverAddress, serverPort) => {
    try {
        const status = await minecraftUtil.status(serverAddress, serverPort);
        displayServerStatus(status);
    } catch (error) {
        console.error('Error retrieving server status:', error);
    }
};

const main = async () => {
    const serverInput = getServerInput();
    const { address, port } = parseServerInput(serverInput);
    await fetchServerStatus(address, port);
};

main();