import { Server } from './src/server';

async function init(): Promise<void> {
  try {
    const server = new Server();
    await server.start();
  } catch(err) {
    console.log('Something went wrong, aborting: ' + err);
    return process.exit(1);
  }
}

init();
